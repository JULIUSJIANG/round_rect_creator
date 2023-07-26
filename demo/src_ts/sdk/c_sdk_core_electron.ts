import c_sdk_core from "./c_sdk_core.js";
import c_sdk_ctx_get from "./c_sdk_ctx_get.js";
import c_sdk_ctx_set from "./c_sdk_ctx_set.js";
import c_modules from "../c_modules.js";

/**
 * 存档路径
 */
const STORAGE_PATH = c_modules.path.join (`c_sdk_core_electron_storage.json`);

/**
 * 针对不同运行环境做兼容处理 - 策略 - electron
 */
class c_sdk_core_electron extends c_sdk_core {

    set (txt: string): Promise<c_sdk_ctx_set> {
        let folder = c_modules.path.dirname (STORAGE_PATH);
        return Promise.resolve ()
            // 检查文件目录是否存在
            .then (() => {
                return new Promise ((resolve) => {
                    c_modules.fs.stat (
                        folder,
                        (err, stat) => {
                            if (err) {
                                resolve (false);
                                return;
                            };
                            resolve (true);
                        }
                    )
                });
            })
            // 目录不存在的话，就新建一个
            .then ((isExist) => {
                if (isExist) {
                    return;
                };
                return new Promise ((resolve, reject) => {
                    c_modules.fs.mkdir (
                        folder,
                        {
                            recursive: true
                        },
                        (err) => {
                            if (err) {
                                reject (err);
                                return;
                            };
                            resolve (null);
                        }
                    )
                });
            })
            // 正式写入文件
            .then (() => {
                return new Promise<c_sdk_ctx_set> ((resolve, reject) => {
                    c_modules.fs.writeFile (STORAGE_PATH, txt, (err) => {
                        if (err) {
                            reject (err);
                            return;
                        };
                        resolve ({
                            is_successed: true
                        });
                    });
                });
            })
            // 有任何异常，视为执行失败
            .catch ((err) => {
                console.log (`存档失败`, err);
                return Promise.resolve<c_sdk_ctx_set> ({
                    is_successed: false
                });
            })
    }

    get (): Promise<c_sdk_ctx_get> {
        return new Promise ((resolve) => {
            c_modules.fs.readFile (
                STORAGE_PATH, 
                (err, data) => {
                    if (err) {
                        resolve ({
                            is_successed: false,
                            txt: null
                        });
                        return;
                    };
                    resolve ({
                        is_successed: true,
                        txt: data.toString ()
                    });
                }    
            )
        });
    }
}

export default c_sdk_core_electron;
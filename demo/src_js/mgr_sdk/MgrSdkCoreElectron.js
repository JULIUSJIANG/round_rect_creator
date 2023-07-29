import MgrSdkCore from "./MgrSdkCore.js";
import NodeModules from "../NodeModules.js";
/**
 * 存档路径
 */
const STORAGE_PATH = NodeModules.path.join(`c_sdk_core_electron_storage.json`);
/**
 * 针对不同运行环境做兼容处理 - 策略 - electron
 */
class MgrSdkCoreElectron extends MgrSdkCore {
    set(txt) {
        let folder = NodeModules.path.dirname(STORAGE_PATH);
        return Promise.resolve()
            // 检查文件目录是否存在
            .then(() => {
            return new Promise((resolve) => {
                NodeModules.fs.stat(folder, (err, stat) => {
                    if (err) {
                        resolve(false);
                        return;
                    }
                    ;
                    resolve(true);
                });
            });
        })
            // 目录不存在的话，就新建一个
            .then((isExist) => {
            if (isExist) {
                return;
            }
            ;
            return new Promise((resolve, reject) => {
                NodeModules.fs.mkdir(folder, {
                    recursive: true
                }, (err) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    ;
                    resolve(null);
                });
            });
        })
            // 正式写入文件
            .then(() => {
            return new Promise((resolve, reject) => {
                NodeModules.fs.writeFile(STORAGE_PATH, txt, (err) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    ;
                    resolve({
                        isSuccessed: true
                    });
                });
            });
        })
            // 有任何异常，视为执行失败
            .catch((err) => {
            console.log(`存档失败`, err);
            return Promise.resolve({
                isSuccessed: false
            });
        });
    }
    get() {
        return new Promise((resolve) => {
            NodeModules.fs.readFile(STORAGE_PATH, (err, data) => {
                if (err) {
                    resolve({
                        isSuccessed: false,
                        txt: null
                    });
                    return;
                }
                ;
                resolve({
                    isSuccessed: true,
                    txt: data.toString()
                });
            });
        });
    }
}
export default MgrSdkCoreElectron;

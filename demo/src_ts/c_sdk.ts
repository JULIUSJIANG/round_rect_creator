import c_sdk_core from "./c_sdk_core.js";
import c_sdk_core_electron from "./c_sdk_core_electron.js";

/**
 * 针对不同运行环境做兼容处理
 */
class c_sdk {

    /**
     * 当前策略
     */
    core: c_sdk_core;

    /**
     * 初始化
     */
    f_init () {
        this.core = new c_sdk_core_electron ();
        return Promise.resolve ();
    }
}

namespace c_sdk {
    /**
     * 全局实例
     */
    export const inst = new c_sdk ();
}

export default c_sdk;
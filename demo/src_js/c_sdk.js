import c_sdk_core_electron from "./c_sdk_core_electron.js";
/**
 * 针对不同运行环境做兼容处理
 */
class c_sdk {
    /**
     * 初始化
     */
    f_init() {
        this.core = new c_sdk_core_electron();
        return Promise.resolve();
    }
}
(function (c_sdk) {
    /**
     * 全局实例
     */
    c_sdk.inst = new c_sdk();
})(c_sdk || (c_sdk = {}));
export default c_sdk;

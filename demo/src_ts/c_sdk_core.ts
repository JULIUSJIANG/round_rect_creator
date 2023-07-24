import c_sdk_ctx_get from "./c_sdk_ctx_get.js";
import c_sdk_ctx_set from "./c_sdk_ctx_set.js";

/**
 * 针对不同运行环境做兼容处理 - 策略
 */
export default abstract class c_sdk_core {
    /**
     * 存档
     * @param txt 
     */
    abstract set (txt: string): Promise <c_sdk_ctx_set>;
    /**
     * 取档
     */
    abstract get (): Promise <c_sdk_ctx_get>;
}
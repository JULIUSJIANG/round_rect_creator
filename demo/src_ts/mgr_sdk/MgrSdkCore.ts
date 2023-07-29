import MgrSdkCtxGet from "./MgrSdkCtxGet.js";
import MgrSdkCtxSet from "./MgrSdkCtxSet.js";

/**
 * 针对不同运行环境做兼容处理 - 策略
 */
abstract class MgrSdkCore {
    /**
     * 存档
     * @param txt 
     */
    abstract set (txt: string): Promise <MgrSdkCtxSet>;
    /**
     * 取档
     */
    abstract get (): Promise <MgrSdkCtxGet>;
}

export default MgrSdkCore;
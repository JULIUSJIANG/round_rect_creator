/**
 * c_sdk_core.get 执行结果
 */
interface _c_sdk_ctx_get {
    /**
     * 执行成功
     */
    is_successed: boolean;
    /**
     * 得到的文本
     */
    txt: string;
}

exports.c_sdk_ctx_get = _c_sdk_ctx_get;
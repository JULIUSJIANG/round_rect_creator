/**
 * 异步请求
 */
class c_request {
    constructor(args) {
        this.code = args.code;
        this.analyse = args.analyse;
        c_request.map_code_to_request.set(this.code, this);
    }
}
(function (c_request) {
    ;
    /**
     * 服务端监听的事件名
     */
    c_request.EVT_NAME_SERVER_ACTIVE = `EVT_NAME_SERVER_ACTIVE`;
    /**
     * 客户端监听的事件名
     */
    c_request.EVT_NAME_CLIENT_ACTIVE = `EVT_NAME_CLIENT_ACTIVE`;
    /**
     * 代号到具体策略的映射
     */
    c_request.map_code_to_request = new Map();
    ;
    ;
    /**
     * 客户端通知 - 打印日志
     */
    c_request.client_fetch_log = new c_request({
        code: 1002,
        analyse: null
    });
    ;
    ;
    c_request.client_fetch_save = new c_request({
        code: 1003,
        analyse: null
    });
})(c_request || (c_request = {}));
export default c_request;

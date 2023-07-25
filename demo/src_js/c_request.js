// import c_index_server from "./c_index_server.js";
import c_data from "./data/c_data.js";
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
     * 客户端通知 - 已就绪
     */
    c_request.client_fetch_ready = new c_request({
        code: 1001,
        analyse: (i) => {
            // c_index_server.ctrl_ready.resolve (null);
            return Promise.resolve({});
        }
    });
    ;
    ;
    /**
     * 服务端通知 - 即将关闭
     */
    c_request.server_fetch_will_close = new c_request({
        code: 2001,
        analyse: (i) => {
            return Promise.resolve()
                // 关闭前保存一次
                .then(() => {
                return c_data.inst.f_save();
            })
                .then(() => {
                return {};
            });
        }
    });
})(c_request || (c_request = {}));
export default c_request;

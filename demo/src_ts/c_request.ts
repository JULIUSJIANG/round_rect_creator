// import c_index_server from "./c_index_server.js";
const {c_data} = require (`./data/c_data.js`);

/**
 * 异步请求
 */
class _c_request<c_i, c_o> {
    /**
     * 代号
     */
    code: number;
    /**
     * 处理器
     */
    analyse: (i: c_i) => Promise <c_o>;

    constructor (args: {
        code: number,
        analyse: (i: c_i) => Promise <c_o>
    })
    {
        this.code = args.code;
        this.analyse = args.analyse;

        c_request.map_code_to_request.set (this.code, this);
    }
}

namespace _c_request {
    /**
     * 请求体
     */
    export interface c_ctx {
        /**
         * 策略代号
         */
        code: number;
        /**
         * 策略需要的数据
         */
        data: any;
    };

    /**
     * 服务端监听的事件名
     */
    export const EVT_NAME_SERVER_ACTIVE = `EVT_NAME_SERVER_ACTIVE`;
    /**
     * 客户端监听的事件名
     */
    export const EVT_NAME_CLIENT_ACTIVE = `EVT_NAME_CLIENT_ACTIVE`;

    /**
     * 代号到具体策略的映射
     */
    export const map_code_to_request: Map <number, _c_request <unknown, unknown>> = new Map ();

    export interface client_fetch_ready_i {

    };
    export interface client_fetch_ready_o {

    };
    /**
     * 客户端通知 - 已就绪
     */
    export const client_fetch_ready = new _c_request <client_fetch_ready_i, client_fetch_ready_o> ({
        code: 1001,
        analyse: (i) => {
            // c_index_server.ctrl_ready.resolve (null);
            return Promise.resolve ({

            });
        }
    });

    export interface server_fetch_will_close_i {

    };
    export interface server_fetch_will_close_o {

    };
    /**
     * 服务端通知 - 即将关闭
     */
    export const server_fetch_will_close = new _c_request <server_fetch_will_close_i, server_fetch_will_close_o> ({
        code: 2001,
        analyse: (i) => {
            return Promise.resolve ()
                // 关闭前保存一次
                .then (() => {
                    return c_data.inst.f_save ();
                })  
                .then (() => {
                    return {};
                });
        }
    });
}

exports.c_request = _c_request;
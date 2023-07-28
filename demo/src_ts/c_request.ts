import c_data from "./data/c_data.js";

/**
 * 异步请求
 */
class c_request<c_i, c_o> {
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

namespace c_request {
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
    export const map_code_to_request: Map <number, c_request <unknown, unknown>> = new Map ();

    export interface client_fetch_log_i {
        txt: string
    };
    export interface client_fetch_log_o {

    };
    /**
     * 客户端通知 - 打印日志
     */
    export const client_fetch_log = new c_request <client_fetch_log_i, client_fetch_log_o> ({
        code: 1002,
        analyse: null
    });

    export interface client_fetch_save_i {
        /**
         * 文件名
         */
        file_name: string;
        /**
         * 文件数据
         */
        file_url: string;
    };
    export interface client_fetch_save_o {

    };
    export const client_fetch_save = new c_request <client_fetch_save_i, client_fetch_save_o> ({
        code: 1003,
        analyse: null
    });
}

export default c_request;
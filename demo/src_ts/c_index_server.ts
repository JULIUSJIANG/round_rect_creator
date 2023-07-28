const _electron = require (`electron`);
const {app, BrowserWindow, dialog} = _electron;
const path = require (`path`);

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
        analyse: (ctx) => {
            console.log (ctx.txt);
            return Promise.resolve ({});
        }
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
        analyse: (ctx) => {
            let filters = [
                {
                    name: `全部文件`,
                    extensions: [
                        `*`
                    ]
                }
            ];
            let ext = path.extname (ctx.file_name);
            if (ext && ext !== `.`) {
                const name = ext.slice (1, ext.length);
                if (name) {
                    filters.unshift ({
                        name: ``,
                        extensions: [
                            name
                        ]
                    });
                };
            };

            return Promise.resolve ()
                .then (() => {
                    return dialog.showSaveDialog (
                        win,
                        {
                            title: `另存为`,
                            filters,
                            defaultPath: ctx.file_name
                        }
                    );
                })
                .then ((result) => {
                    file_path = result.filePath;
                    if (file_path) {
                        win.webContents.downloadURL (ctx.file_url);
                    };
                    return {};
                });
        }
    });
}

let win;
let file_path: string;
const createWindow = () => {
    win = new BrowserWindow ({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    win.maximize();
    win.loadFile (`./src_js/c_index_client.html`);
    win.webContents.openDevTools ();

    win.webContents.session.on (
        'will-download', 
        (event, item, webContents) => {
        if (!file_path) {
            return;
        };
        //设置下载项的保存文件路径
        item.setSavePath(file_path);
    });
}

Promise.resolve ()
    // 等待环境就绪
    .then (() => {
        return app.whenReady ();
    })
    .then (() => {
        createWindow ();
        app.on('activate', () => {
            if (BrowserWindow.getAllWindows().length === 0) {
                createWindow();
            };
        });
        app.on (`window-all-closed`, () => {
            if (process.platform !== `darwin`) {
                Promise.resolve ()
                    // 正式退出
                    .then (() => {
                        app.quit ();
                    });
            };
        });
    });

_electron.ipcMain.on (
    c_request.EVT_NAME_CLIENT_ACTIVE,
    (
        evt,
        args
    ) =>
    {
        // 解析得到具体策略
        let action = c_request.map_code_to_request.get (args.code);
        // 让策略处理
        action.analyse (args.data)
            .then ((resp) => {
                // 返回最终结果
                win.webContents.send (c_request.EVT_NAME_CLIENT_ACTIVE, resp);
    });
    }
);

class c_index_server {
    
}

namespace c_index_server {
    /**
     * 告知客户端
     * @param action 
     * @param i 
     * @returns 
     */
    export function f_fetch <c_i, c_o> (
        action,
        i: c_i
    ) 
    {
        let msg = {
            code: action.code,
            data: i
        };
        win.webContents.send (c_request.EVT_NAME_SERVER_ACTIVE, msg);
        return new Promise <c_o> ((resolve) => {
            _electron.ipcMain.once (
                c_request.EVT_NAME_SERVER_ACTIVE,
                (
                    evt,
                    resp: c_o
                ) =>
                {
                    resolve (resp);
                }
            );
        });
    }
};
const _electron = require(`electron`);
const { app, BrowserWindow } = _electron;
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
        analyse: (ctx) => {
            console.log(ctx.txt);
            return Promise.resolve({});
        }
    });
})(c_request || (c_request = {}));
let win;
const createWindow = () => {
    win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    win.maximize();
    win.loadFile(`./src_js/c_index_client.html`);
    win.webContents.openDevTools();
};
Promise.resolve()
    // 等待环境就绪
    .then(() => {
    return app.whenReady();
})
    .then(() => {
    createWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
        ;
    });
    app.on(`window-all-closed`, () => {
        if (process.platform !== `darwin`) {
            Promise.resolve()
                // 正式退出
                .then(() => {
                app.quit();
            });
        }
        ;
    });
});
_electron.ipcMain.on(c_request.EVT_NAME_CLIENT_ACTIVE, (evt, args) => {
    // 解析得到具体策略
    let action = c_request.map_code_to_request.get(args.code);
    // 让策略处理
    action.analyse(args.data)
        .then((resp) => {
        // 返回最终结果
        win.webContents.send(c_request.EVT_NAME_CLIENT_ACTIVE, resp);
    });
});
class c_index_server {
}
(function (c_index_server) {
    /**
     * 告知客户端
     * @param action
     * @param i
     * @returns
     */
    function f_fetch(action, i) {
        let msg = {
            code: action.code,
            data: i
        };
        win.webContents.send(c_request.EVT_NAME_SERVER_ACTIVE, msg);
        return new Promise((resolve) => {
            _electron.ipcMain.once(c_request.EVT_NAME_SERVER_ACTIVE, (evt, resp) => {
                resolve(resp);
            });
        });
    }
    c_index_server.f_fetch = f_fetch;
})(c_index_server || (c_index_server = {}));
;

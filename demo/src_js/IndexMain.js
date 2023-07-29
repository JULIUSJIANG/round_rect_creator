const _electron = require(`electron`);
const { app, BrowserWindow, dialog } = _electron;
const path = require(`path`);
/**
 * 异步请求
 */
class ActionRequest {
    constructor(args) {
        this.code = args.code;
        this.analyse = args.analyse;
        ActionRequest.mapCodeToRequest.set(this.code, this);
    }
}
(function (ActionRequest) {
    ;
    /**
     * 服务端监听的事件名
     */
    ActionRequest.EVT_NAME_SERVER_ACTIVE = `EVT_NAME_SERVER_ACTIVE`;
    /**
     * 客户端监听的事件名
     */
    ActionRequest.EVT_NAME_CLIENT_ACTIVE = `EVT_NAME_CLIENT_ACTIVE`;
    /**
     * 代号到具体策略的映射
     */
    ActionRequest.mapCodeToRequest = new Map();
    ;
    ;
    /**
     * 客户端通知 - 打印日志
     */
    ActionRequest.CLIENT_FETCH_LOG = new ActionRequest({
        code: 1002,
        analyse: (ctx) => {
            console.log(ctx.txt);
            return Promise.resolve({});
        }
    });
    ;
    ;
    ActionRequest.client_fetch_save = new ActionRequest({
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
            let ext = path.extname(ctx.fileName);
            if (ext && ext !== `.`) {
                const name = ext.slice(1, ext.length);
                if (name) {
                    filters.unshift({
                        name: ``,
                        extensions: [
                            name
                        ]
                    });
                }
                ;
            }
            ;
            return Promise.resolve()
                .then(() => {
                return dialog.showSaveDialog(win, {
                    title: `另存为`,
                    filters,
                    defaultPath: ctx.fileName
                });
            })
                .then((result) => {
                filePath = result.filePath;
                if (filePath) {
                    win.webContents.downloadURL(ctx.fileUrl);
                }
                ;
                return {};
            });
        }
    });
})(ActionRequest || (ActionRequest = {}));
let win;
let filePath;
const createWindow = () => {
    win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    win.maximize();
    win.loadFile(`./src_js/IndexWindow.html`);
    win.webContents.openDevTools();
    win.webContents.session.on('will-download', (event, item, webContents) => {
        if (!filePath) {
            return;
        }
        ;
        //设置下载项的保存文件路径
        item.setSavePath(filePath);
    });
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
_electron.ipcMain.on(ActionRequest.EVT_NAME_CLIENT_ACTIVE, (evt, args) => {
    // 解析得到具体策略
    let action = ActionRequest.mapCodeToRequest.get(args.code);
    // 让策略处理
    action.analyse(args.data)
        .then((resp) => {
        // 返回最终结果
        win.webContents.send(ActionRequest.EVT_NAME_CLIENT_ACTIVE, resp);
    });
});
class IndexMain {
}
(function (IndexMain) {
    /**
     * 告知客户端
     * @param action
     * @param i
     * @returns
     */
    function fetch(action, i) {
        let msg = {
            code: action.code,
            data: i
        };
        win.webContents.send(ActionRequest.EVT_NAME_SERVER_ACTIVE, msg);
        return new Promise((resolve) => {
            _electron.ipcMain.once(ActionRequest.EVT_NAME_SERVER_ACTIVE, (evt, resp) => {
                resolve(resp);
            });
        });
    }
    IndexMain.fetch = fetch;
})(IndexMain || (IndexMain = {}));
;

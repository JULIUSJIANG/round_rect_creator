const { app, BrowserWindow } = require(`electron`);
const electron = require(`electron`);
const { c_a } = require(`./c_a.js`);
let i_a = new c_a();
console.log(`服务端构造了 c_a...`, i_a.id);
let win;
const createWindow = () => {
    win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    win.maximize();
    win.loadFile(`src_js/c_index_client.html`);
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
})
    .then(() => {
    return new Promise((resolve) => {
        electron.ipcMain.once(`EVT_NAME_CLIENT_ACTIVE`, (evt, resp) => {
            if (resp.code == 1001) {
                resolve(null);
            }
            ;
        });
    });
})
    .then(() => {
    console.log(`客户端就绪...`);
    // app.on (`window-all-closed`, () => {
    //     if (process.platform !== `darwin`) {
    //         Promise.resolve ()
    //             // 告知客户端
    //             .then (() => {
    //                 console.log (`告知客户都安即将关闭...`);
    //                 return c_index_server.f_fetch (
    //                     c_request.server_fetch_will_close, 
    //                     {
    // 
    //                     }
    //                 )
    //             })
    //             // 正式退出
    //             .then (() => {
    //                 app.quit ();
    //             });
    //     };
    // });
});
;

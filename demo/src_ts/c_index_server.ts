const {app, BrowserWindow} = require (`electron`);
const {c_a} = require (`./c_a.js`);
const {c_request} = require (`./c_request.js`);

let i_a = new c_a ();
console.log (`服务端构造了 c_a...`, i_a.id);

let win;
const createWindow = () => {
    win = new BrowserWindow ({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    win.maximize();
    win.loadFile (`src_js/c_index_client.html`);
    win.webContents.openDevTools ();
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
    })
    .then (() => {
        return new Promise ((resolve) => {
            electron.ipcMain.once (
                `EVT_NAME_CLIENT_ACTIVE`,
                (
                    evt,
                    resp: {code: number}
                ) =>
                {
                    if (resp.code == 1001) {
                        resolve (null);
                    };
                }
            );
        })
    })
    .then (() => {
        console.log (`客户端就绪...`);
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

// c_modules.electron.ipcMain.on (
//     c_request.EVT_NAME_CLIENT_ACTIVE,
//     (
//         evt,
//         args: c_request.c_ctx
//     ) =>
//     {
//         // 解析得到具体策略
//         let action = c_request.map_code_to_request.get (args.code);
//         // 让策略处理
//         action.analyse (args.data)
//             .then ((resp) => {
//                 // 返回最终结果
//                 c_modules.electron.ipcMain.send (c_request.EVT_NAME_CLIENT_ACTIVE, resp);
//     });
//     }
// );

class _c_index_server {
    
}

namespace _c_index_server {
    // /**
    //  * 告知客户端
    //  * @param action 
    //  * @param i 
    //  * @returns 
    //  */
    // export function f_fetch <c_i, c_o> (
    //     action: c_request <c_i, c_o>,
    //     i: c_i
    // ) 
    // {
    //     let msg: c_request.c_ctx = {
    //         code: action.code,
    //         data: i
    //     };
    //     win.webContents.send (c_request.EVT_NAME_SERVER_ACTIVE, msg);
    //     return new Promise <c_o> ((resolve) => {
    //         c_modules.electron.ipcMain.once (
    //             c_request.EVT_NAME_SERVER_ACTIVE,
    //             (
    //                 evt,
    //                 resp: c_o
    //             ) =>
    //             {
    //                 resolve (resp);
    //             }
    //         );
    //     });
    // }
};

exports.c_index_server = _c_index_server;
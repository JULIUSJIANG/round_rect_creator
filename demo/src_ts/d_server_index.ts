const {app, BrowserWindow} = require (`electron`);

const createWindow = () => {
    const win = new BrowserWindow ({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    win.maximize();
    win.loadFile (`src_js/d_client_index.html`);
    win.webContents.openDevTools ();
}

app.whenReady().then (() => {
    createWindow ();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        };
    });
});

app.on (`window-all-closed`, () => {
    if (process.platform !== `darwin`) {
        app.quit ();
    };
});

console.log (`server_index`);
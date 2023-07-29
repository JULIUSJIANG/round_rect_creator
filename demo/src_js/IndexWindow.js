import MgrData from "./mgr_data/MgrData.js";
import DomRender from "./DomRender.js";
import MgrSdk from "./mgr_sdk/MgrSdk.js";
import NodeModules from "./NodeModules.js";
import MgrDataItem from "./mgr_data/MgrDataItem.js";
import ActionRequest from "./ActionRequest.js";
Promise.resolve()
    // 等待文档加载成功
    .then(() => {
    return new Promise((resolve) => {
        window.addEventListener(`DOMContentLoaded`, resolve);
    });
})
    // 初始化 sdk
    .then(() => {
    console.log(`c_sdk init...`);
    return MgrSdk.inst.init();
})
    // 初始化数据
    .then(() => {
    console.log(`c_data init...`);
    return MgrData.inst.init();
})
    // 初始化渲染器
    .then(() => {
    console.log(`c_render init...`);
    return DomRender.inst.init();
})
    // 告知服务端已就绪
    .then(() => {
    // 跟服务端说，我已经就绪了
    return IndexWindow.fetch(ActionRequest.CLIENT_FETCH_LOG, {
        txt: `客户端就绪...`
    });
})
    // 自动 update
    .then(() => {
    // 没存档的话，新建一个
    if (MgrData.inst.get(MgrDataItem.LIST_RECORD).length == 0) {
        IndexWindow.addRecord();
    }
    ;
    // 关闭窗口时候自动存档一次
    window.addEventListener(`beforeunload`, () => {
        IndexWindow.fetch(ActionRequest.CLIENT_FETCH_LOG, {
            txt: `客户端关闭...`
        });
        MgrData.inst.save();
    });
    // 上一帧数据版本
    let lastDataVersion;
    // 更新
    let update = () => {
        if (lastDataVersion != MgrData.inst.dataVersion) {
            lastDataVersion = MgrData.inst.dataVersion;
            MgrData.inst.save();
            DomRender.inst.refresh();
        }
        ;
    };
    // 自循环装置
    let go = () => {
        update();
        requestAnimationFrame(go);
    };
    requestAnimationFrame(go);
});
NodeModules.electron.ipcRenderer.on(ActionRequest.EVT_NAME_SERVER_ACTIVE, (evt, args) => {
    // 解析得到具体策略
    let action = ActionRequest.mapCodeToRequest.get(args.code);
    // 让策略处理
    action.analyse(args.data)
        .then((resp) => {
        // 返回最终结果
        NodeModules.electron.ipcRenderer.send(ActionRequest.EVT_NAME_SERVER_ACTIVE, resp);
    });
});
class IndexWindow {
}
(function (IndexWindow) {
    /**
     * 新建记录
     */
    function addRecord() {
        let listRecord = MgrData.inst.get(MgrDataItem.LIST_RECORD);
        let recordId = MgrData.inst.get(MgrDataItem.SEED_RECORD) + 1;
        MgrData.inst.set(MgrDataItem.SEED_RECORD, recordId);
        listRecord.push({
            id: recordId,
            name: `圆角矩形【${recordId}】`,
            radiusLT: 50,
            radiusRT: 50,
            radiusLB: 50,
            radiusRB: 50,
            marginTop: 0,
            marginRight: 0,
            marginBottom: 0,
            marginLeft: 0,
            minSizeWidth: 200,
            minSizeHeight: 200,
            color: "888888ff",
            serration: 4,
            currentCode: 0,
            code1LineWidth: 2,
            code2FadeDistance: 25,
            code2SpeedOffset: 0,
            code3FadeDistance: 25,
            code3SpeedOffset: 0
        });
        MgrData.inst.set(MgrDataItem.CURRENT_EDIT_RECORD_ID, recordId);
    }
    IndexWindow.addRecord = addRecord;
    /**
     * 获取当前编辑的存档
     * @returns
     */
    function getCurrentRecord() {
        let listRecord = MgrData.inst.get(MgrDataItem.LIST_RECORD);
        let currentRecord;
        for (let i = 0; i < listRecord.length; i++) {
            let listRecordI = listRecord[i];
            if (listRecordI.id == MgrData.inst.get(MgrDataItem.CURRENT_EDIT_RECORD_ID)) {
                currentRecord = listRecordI;
                break;
            }
            ;
        }
        ;
        return currentRecord;
    }
    IndexWindow.getCurrentRecord = getCurrentRecord;
    /**
     * 告知服务端
     * @param action
     * @param i
     */
    function fetch(action, i) {
        let msg = {
            code: action.code,
            data: i
        };
        NodeModules.electron.ipcRenderer.send(ActionRequest.EVT_NAME_CLIENT_ACTIVE, msg);
        return new Promise((resolve) => {
            NodeModules.electron.ipcRenderer.once(ActionRequest.EVT_NAME_CLIENT_ACTIVE, (evt, resp) => {
                resolve(resp);
            });
        });
    }
    IndexWindow.fetch = fetch;
})(IndexWindow || (IndexWindow = {}));
;
export default IndexWindow;

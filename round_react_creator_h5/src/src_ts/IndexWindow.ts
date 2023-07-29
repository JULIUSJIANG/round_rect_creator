import MgrData from "./mgr_data/MgrData";
import DomRender from "./DomRender";
import MgrSdk from "./mgr_sdk/MgrSdk";
import MgrDataItem from "./mgr_data/MgrDataItem";
import MgrDataItemCtxRecord from "./mgr_data/MgrDataItemCtxRecord";

Promise.resolve ()
    // 等待文档加载成功
    .then (() => {
        return new Promise ((resolve) => {
            window.addEventListener (`DOMContentLoaded`, resolve);
        });
    })
    // 初始化 sdk
    .then (() => {
        console.log (`c_sdk init...`);
        return MgrSdk.inst.init ();
    })
    // 初始化数据
    .then (() => {
        console.log (`c_data init...`);
        return MgrData.inst.init ();
    })
    // 初始化渲染器
    .then (() => {
        console.log (`c_render init...`);
        return DomRender.inst.init ();
    })
    // 告知服务端已就绪
    .then (() => {
        // 跟服务端说，我已经就绪了
        return MgrSdk.inst.core.logToMain (`客户端就绪...`);
    })
    // 自动 update
    .then (() => {
        // 没存档的话，新建一个
        if (MgrData.inst.get (MgrDataItem.LIST_RECORD).length == 0) {
            IndexWindow.addRecord ();
        };

        // 关闭窗口时候自动存档一次
        window.addEventListener (`beforeunload`, () => {
            MgrSdk.inst.core.logToMain (`客户端关闭...`);
            MgrData.inst.save ();
        });

        // 上一帧数据版本
        let lastDataVersion: number;
        // 更新
        let update = () => {
            if (lastDataVersion != MgrData.inst.dataVersion) {
                lastDataVersion = MgrData.inst.dataVersion;
                MgrData.inst.save ();
                DomRender.inst.refresh ();
            };
        };
        // 自循环装置
        let go = () => {
            update ();
            requestAnimationFrame (go);
        };
        requestAnimationFrame (go);
    });

class IndexWindow {
    /**
     * 当前数据
     */
    static dataUrl: string;
}

namespace IndexWindow {
    /**
     * 新建记录
     */
    export function addRecord () {
        let listRecord = MgrData.inst.get (MgrDataItem.LIST_RECORD);
        let recordId = MgrData.inst.get (MgrDataItem.SEED_RECORD) + 1;
        MgrData.inst.set (MgrDataItem.SEED_RECORD, recordId);
        listRecord.push ({
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
        MgrData.inst.set (MgrDataItem.CURRENT_EDIT_RECORD_ID, recordId);
    }

    /**
     * 获取当前编辑的存档
     * @returns 
     */
    export function getCurrentRecord () {
        let listRecord = MgrData.inst.get (MgrDataItem.LIST_RECORD) as any;
        let currentRecord: MgrDataItemCtxRecord;
        for (let i = 0; i < listRecord.length; i++) {
            let listRecordI = listRecord [i];
            if (listRecordI.id == MgrData.inst.get (MgrDataItem.CURRENT_EDIT_RECORD_ID)) {
                currentRecord = listRecordI;
                break;
            };
        };
        return currentRecord;
    }
};

export default IndexWindow;
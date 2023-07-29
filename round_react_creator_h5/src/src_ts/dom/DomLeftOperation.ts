import IndexWindow from "../IndexWindow";
import NodeModules from "../NodeModules";
import MgrData from "../mgr_data/MgrData";
import MgrDataItem from "../mgr_data/MgrDataItem";
import DomDefine from "./DomDefine";
import MgrSdk from "../mgr_sdk/MgrSdk";

/**
 * 左边栏 - 行为按钮组
 */
class DomLeftOperation extends NodeModules.react.Component {

    render () {
        let listChildren = [
            NodeModules.react.createElement (
                NodeModules.antd.Button,
                {
                    onClick: () => {
                        IndexWindow.addRecord ();
                    },
                    style: {
                        margin: DomDefine.CONFIG_TXT_HALF_SPACING
                    }
                },
    
                `新建存档`
            ),
            NodeModules.react.createElement (
                NodeModules.antd.Button,
                {
                    onClick: () => {
                        let listRecord = MgrData.inst.get (MgrDataItem.LIST_RECORD);
                        let editId = MgrData.inst.get (MgrDataItem.CURRENT_EDIT_RECORD_ID);
                        let editIdx: number;
                        for (let i = 0; i < listRecord.length; i++) {
                            let listRecordI = listRecord [i];
                            if (listRecordI.id == editId) {
                                editIdx = i;
                                break;
                            };
                        };
                        listRecord.splice (editIdx, 1);
                        if (listRecord.length == 0) {
                            IndexWindow.addRecord ();
                        }
                        else {
                            editIdx = Math.min (editIdx, listRecord.length - 1);
                            MgrData.inst.set (MgrDataItem.CURRENT_EDIT_RECORD_ID, listRecord [editIdx].id);
                        };
                    },
                    style: {
                        margin: DomDefine.CONFIG_TXT_HALF_SPACING
                    }
                },
    
                `删除存档`
            ),
            NodeModules.react.createElement (
                NodeModules.antd.Button,
                {
                    onClick: () => {
                        let record = IndexWindow.getCurrentRecord ();
                        MgrSdk.inst.core.saveFile (
                            `${record.name}.png`,
                            IndexWindow.dataUrl
                        );
                    },
                    style: {
                        margin: DomDefine.CONFIG_TXT_HALF_SPACING
                    }
                },
    
                `导出 png`
            )
        ];
        // 控制台被管控，如果我不提供入口，那么玩家没法打开
        if (MgrSdk.inst.core.checkIsConsoleCtrl ()) {
            listChildren.push (
                NodeModules.react.createElement (
                    NodeModules.antd.Button,
                    {
                        onClick: () => {
                            MgrSdk.inst.core.openConsole ();
                        },
                        style: {
                            margin: DomDefine.CONFIG_TXT_HALF_SPACING
                        }
                    },
                
                    `调试面板`
                )
            );
        };
        return NodeModules.react.createElement (
            DomDefine.TAG_DIV,
            {
                style: {
                    [DomDefine.STYLE_FLEX_GROW]: 0,
                    [DomDefine.STYLE_PADDING]: DomDefine.CONFIG_TXT_HALF_SPACING,
                    [DomDefine.STYLE_MARGIN]: DomDefine.CONFIG_TXT_HALF_SPACING,
                    [DomDefine.STYLE_BACKGROUND_COLOR]: DomDefine.CONFIG_TXT_BG_COLOR,

                    [DomDefine.STYLE_DISPLAY]: DomDefine.STYLE_DISPLAY_FLEX,
                    [DomDefine.STYLE_FLEX_DIRECTION]: DomDefine.STYLE_FLEX_DIRECTION_COLUMN
                }
            },

            ...listChildren
        );
    }
}

export default DomLeftOperation;
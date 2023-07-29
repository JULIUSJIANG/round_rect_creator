import IndexWindow from "../IndexWindow.js";
import NodeModules from "../NodeModules.js";
import MgrData from "../mgr_data/MgrData.js";
import MgrDataItem from "../mgr_data/MgrDataItem.js";
import DomDefine from "./DomDefine.js";
import ActionRequest from "../ActionRequest.js";

/**
 * 左边栏 - 行为按钮组
 */
class DomLeftOperation extends NodeModules.react.Component {

    render () {
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
    
                `新建`
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
    
                `删除`
            ),
            NodeModules.react.createElement (
                NodeModules.antd.Button,
                {
                    onClick: () => {
                        let record = IndexWindow.getCurrentRecord ();
                        IndexWindow.fetch (
                            ActionRequest.CLIENT_FETCH_SAVE,
                            {
                                fileName: `${record.name}.png`,
                                fileUrl: IndexWindow.dataUrl
                            }
                        );
                    },
                    style: {
                        margin: DomDefine.CONFIG_TXT_HALF_SPACING
                    }
                },
    
                `导出 png`
            ),
        );
    }
}

export default DomLeftOperation;
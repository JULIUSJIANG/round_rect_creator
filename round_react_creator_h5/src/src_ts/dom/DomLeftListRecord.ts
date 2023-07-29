import NodeModules from "../NodeModules";
import MgrData from "../mgr_data/MgrData";
import MgrDataItem from "../mgr_data/MgrDataItem";
import DomTextInput from "./DomTextInput";
import DomDefine from "./DomDefine";

/**
 * 左边栏 - 存档列表
 */
class DomLeftListRecord extends NodeModules.react.Component {

    render () {
        let listChildren: Array <any> = new Array ();
        let listRecord = MgrData.inst.get (MgrDataItem.LIST_RECORD);
        for (let i = 0; i < listRecord.length; i++) {
            let listRecordI = listRecord [i];
            let propsBtn = {
                onClick: () => {
                    MgrData.inst.set (MgrDataItem.CURRENT_EDIT_RECORD_ID, listRecordI.id);
                },
                style: {
                    [DomDefine.STYLE_FLEX]: "100px",
                    [DomDefine.STYLE_FLEX_GROW]: 0
                }
            };
            if (listRecordI.id == MgrData.inst.get (MgrDataItem.CURRENT_EDIT_RECORD_ID)) {
                propsBtn [DomDefine.PROPS_TYPE] = DomDefine.PROPS_TYPE_PRIMARY;
            };
            let propsDiv = {
                style: {
                    [DomDefine.STYLE_DISPLAY]: DomDefine.STYLE_DISPLAY_FLEX,
                }
            };
            // 不是最后一位的话，要保留间距
            if (i != listRecord.length - 1) {
                propsDiv.style [DomDefine.STYLE_MARGIN_BOTTOM] = DomDefine.CONFIG_TXT_SPACING;
            };
            listChildren.push (NodeModules.react.createElement (
                DomDefine.TAG_DIV,
                propsDiv,

                NodeModules.react.createElement (
                    DomTextInput,
                    {
                        value: listRecordI.name,
                        onChange: (e) => {
                            listRecordI.name = e;
                            MgrData.inst.callDataChange ();
                        },
                        style: {
                            [DomDefine.STYLE_WIDTH]: DomDefine.STYLE_WIDTH_PERCENTAGE_0,
                            [DomDefine.STYLE_MARGIN_RIGHT]: DomDefine.CONFIG_TXT_SPACING,
                            [DomDefine.STYLE_FLEX_GROW]: 1
                        }
                    }
                ),
                NodeModules.react.createElement (
                    NodeModules.antd.Button,
                    propsBtn,

                    `选择`
                )
            ))
        };
        // 滚动视图的容器
        return NodeModules.react.createElement (
            DomDefine.TAG_DIV,
            {
                style: {
                    [DomDefine.STYLE_HEIGHT]: DomDefine.STYLE_HEIGHT_PERCENTAGE_0,
                    [DomDefine.STYLE_FLEX_GROW]: 1,
                    [DomDefine.STYLE_MARGIN]: DomDefine.CONFIG_TXT_HALF_SPACING,
                    [DomDefine.STYLE_BACKGROUND_COLOR]: DomDefine.CONFIG_TXT_BG_COLOR,

                    [DomDefine.STYLE_DISPLAY]: DomDefine.STYLE_DISPLAY_FLEX,
                    [DomDefine.STYLE_FLEX_DIRECTION]: DomDefine.STYLE_FLEX_DIRECTION_COLUMN
                }
            },

            // 滚动视图的遮罩
            NodeModules.react.createElement (
                DomDefine.TAG_DIV,
                {
                    style: {
                        [DomDefine.STYLE_HEIGHT]: DomDefine.STYLE_HEIGHT_PERCENTAGE_0,
                        [DomDefine.STYLE_FLEX_GROW]: 1,
                        [DomDefine.STYLE_MARGIN]: DomDefine.CONFIG_TXT_SPACING,

                        [DomDefine.STYLE_OVERFLOW_X]: DomDefine.STYLE_OVERFLOW_X_HIDDEN,
                        [DomDefine.STYLE_OVERFLOW_Y]: DomDefine.STYLE_OVERFLOW_Y_SCROLL
                    }
                },

                // 滚动的列表
                NodeModules.react.createElement (
                    DomDefine.TAG_DIV,
                    {
                        style: {
                            [DomDefine.STYLE_DISPLAY]: DomDefine.STYLE_DISPLAY_FLEX,
                            [DomDefine.STYLE_FLEX_DIRECTION]: DomDefine.STYLE_FLEX_DIRECTION_COLUMN,

                            [DomDefine.STYLE_MARGIN_RIGHT]: DomDefine.CONFIG_TXT_SPACING
                        }
                    },

                    ...listChildren
                )
            )
        );
    }
}

export default DomLeftListRecord;
import IndexWindow from "../IndexWindow.js";
import NodeModules from "../NodeModules.js";
import MgrData from "../mgr_data/MgrData.js";
import DomDefine from "./DomDefine.js";

/**
 * 右边栏 - 最小尺寸、抗锯齿、颜色
 */
class DomRightSizeSerrationColor extends NodeModules.react.Component {

    render () {
        let record = IndexWindow.getCurrentRecord ();
        return NodeModules.react.createElement (
            DomDefine.TAG_DIV,
            {
                style: {
                    [DomDefine.STYLE_PADDING]: DomDefine.CONFIG_TXT_HALF_SPACING,
                    [DomDefine.STYLE_MARGIN]: DomDefine.CONFIG_TXT_HALF_SPACING,
                    [DomDefine.STYLE_BACKGROUND_COLOR]: DomDefine.CONFIG_TXT_BG_COLOR,

                    [DomDefine.STYLE_DISPLAY]: DomDefine.STYLE_DISPLAY_FLEX,
                }
            },
            
            NodeModules.react.createElement (
                DomDefine.TAG_DIV,
                {
                    style: {
                        [DomDefine.STYLE_WIDTH]: DomDefine.STYLE_WIDTH_PERCENTAGE_0,
                        [DomDefine.STYLE_FLEX_GROW]: 1,
                        [DomDefine.STYLE_MARGIN]: DomDefine.CONFIG_TXT_HALF_SPACING,

                        [DomDefine.STYLE_DISPLAY]: DomDefine.STYLE_DISPLAY_FLEX,
                        [DomDefine.STYLE_ALIGN_ITEMS]: DomDefine.STYLE_ALIGN_ITEMS_CENTER,
                        [DomDefine.STYLE_JUSTIFY_CONTENT]: DomDefine.STYLE_JUSTIFY_CONTENT_CENTER,
                    }
                },

                NodeModules.react.createElement (
                    DomDefine.TAG_SPAN,
                    {
                        style: {
                            [DomDefine.STYLE_FONT_SIZE]: DomDefine.STYLE_FONT_SIZE_14,
                            [DomDefine.STYLE_MARGIN_LEFT]: DomDefine.CONFIG_TXT_SPACING,
                            [DomDefine.STYLE_MARGIN_RIGHT]: DomDefine.CONFIG_TXT_SPACING
                        }
                    },
                    "矩形最小宽度",
                ),
                NodeModules.react.createElement (
                    NodeModules.antd.InputNumber,
                    {
                        min: 1,
                        style: {
                            [DomDefine.STYLE_WIDTH]: DomDefine.STYLE_WIDTH_PERCENTAGE_0,
                            [DomDefine.STYLE_FLEX_GROW]: 1
                        },

                        [DomDefine.PROPS_VALUE]: record.minSizeWidth,
                        [DomDefine.PROPS_ON_CHANGE]: (val) => {
                            record.minSizeWidth = val;
                            MgrData.inst.callDataChange ();
                        }
                    }
                )
            ),
            NodeModules.react.createElement (
                DomDefine.TAG_DIV,
                {
                    style: {
                        [DomDefine.STYLE_WIDTH]: DomDefine.STYLE_WIDTH_PERCENTAGE_0,
                        [DomDefine.STYLE_FLEX_GROW]: 1,
                        [DomDefine.STYLE_MARGIN]: DomDefine.CONFIG_TXT_HALF_SPACING,

                        [DomDefine.STYLE_DISPLAY]: DomDefine.STYLE_DISPLAY_FLEX,
                        [DomDefine.STYLE_ALIGN_ITEMS]: DomDefine.STYLE_ALIGN_ITEMS_CENTER,
                        [DomDefine.STYLE_JUSTIFY_CONTENT]: DomDefine.STYLE_JUSTIFY_CONTENT_CENTER,
                    }
                },

                NodeModules.react.createElement (
                    DomDefine.TAG_SPAN,
                    {
                        style: {
                            [DomDefine.STYLE_FONT_SIZE]: DomDefine.STYLE_FONT_SIZE_14,
                            [DomDefine.STYLE_MARGIN_LEFT]: DomDefine.CONFIG_TXT_SPACING,
                            [DomDefine.STYLE_MARGIN_RIGHT]: DomDefine.CONFIG_TXT_SPACING
                        }
                    },
                    "矩形最小高度",
                ),
                NodeModules.react.createElement (
                    NodeModules.antd.InputNumber,
                    {
                        min: 1,
                        style: {
                            [DomDefine.STYLE_WIDTH]: DomDefine.STYLE_WIDTH_PERCENTAGE_0,
                            [DomDefine.STYLE_FLEX_GROW]: 1
                        },

                        [DomDefine.PROPS_VALUE]: record.minSizeHeight,
                        [DomDefine.PROPS_ON_CHANGE]: (val) => {
                            record.minSizeHeight = val;
                            MgrData.inst.callDataChange ();
                        }
                    }
                )
            ),
            NodeModules.react.createElement (
                DomDefine.TAG_DIV,
                {
                    style: {
                        [DomDefine.STYLE_WIDTH]: DomDefine.STYLE_WIDTH_PERCENTAGE_0,
                        [DomDefine.STYLE_FLEX_GROW]: 1,
                        [DomDefine.STYLE_MARGIN]: DomDefine.CONFIG_TXT_HALF_SPACING,
                        // [c_dom_define.s_background_color]: c_dom_define.d_bg_color,

                        [DomDefine.STYLE_DISPLAY]: DomDefine.STYLE_DISPLAY_FLEX,
                        [DomDefine.STYLE_ALIGN_ITEMS]: DomDefine.STYLE_ALIGN_ITEMS_CENTER,
                        [DomDefine.STYLE_JUSTIFY_CONTENT]: DomDefine.STYLE_JUSTIFY_CONTENT_CENTER,
                    }
                },

                NodeModules.react.createElement (
                    DomDefine.TAG_SPAN,
                    {
                        style: {
                            [DomDefine.STYLE_FONT_SIZE]: DomDefine.STYLE_FONT_SIZE_14,
                            [DomDefine.STYLE_MARGIN_LEFT]: DomDefine.CONFIG_TXT_SPACING,
                            [DomDefine.STYLE_MARGIN_RIGHT]: DomDefine.CONFIG_TXT_SPACING
                        }
                    },
                    "颜色",
                ),
                NodeModules.react.createElement (
                    NodeModules.antd.ColorPicker,
                    {
                        showText: true,
                        style: {
                            [DomDefine.STYLE_WIDTH]: DomDefine.STYLE_WIDTH_PERCENTAGE_0,
                            [DomDefine.STYLE_FLEX_GROW]: 1
                        },

                        [DomDefine.PROPS_VALUE]: record.color,
                        [DomDefine.PROPS_ON_CHANGE]: (val) => {
                            record.color = val.toHex();
                            MgrData.inst.callDataChange ();
                        }
                    }
                ),
            ),
            NodeModules.react.createElement (
                DomDefine.TAG_DIV,
                {
                    style: {
                        [DomDefine.STYLE_WIDTH]: DomDefine.STYLE_WIDTH_PERCENTAGE_0,
                        [DomDefine.STYLE_FLEX_GROW]: 1,
                        [DomDefine.STYLE_MARGIN]: DomDefine.CONFIG_TXT_HALF_SPACING,

                        [DomDefine.STYLE_DISPLAY]: DomDefine.STYLE_DISPLAY_FLEX,
                        [DomDefine.STYLE_ALIGN_ITEMS]: DomDefine.STYLE_ALIGN_ITEMS_CENTER,
                        [DomDefine.STYLE_JUSTIFY_CONTENT]: DomDefine.STYLE_JUSTIFY_CONTENT_CENTER,
                    }
                },

                NodeModules.react.createElement (
                    DomDefine.TAG_SPAN,
                    {
                        style: {
                            [DomDefine.STYLE_FONT_SIZE]: DomDefine.STYLE_FONT_SIZE_14,
                            [DomDefine.STYLE_MARGIN_LEFT]: DomDefine.CONFIG_TXT_SPACING,
                            [DomDefine.STYLE_MARGIN_RIGHT]: DomDefine.CONFIG_TXT_DOUBLE_SPACING,
                        }
                    },
                    "抗锯齿",
                ),
                NodeModules.react.createElement (
                    NodeModules.antd.Slider,
                    {
                        min: 1,
                        max: 4,
                        step: 1,
                        style: {
                            [DomDefine.STYLE_WIDTH]: DomDefine.STYLE_WIDTH_PERCENTAGE_0,
                            [DomDefine.STYLE_FLEX_GROW]: 1,
                            [DomDefine.STYLE_MARGIN_RIGHT]: DomDefine.CONFIG_TXT_DOUBLE_SPACING,
                        },

                        [DomDefine.PROPS_VALUE]: record.serration,
                        [DomDefine.PROPS_ON_CHANGE]: (val) => {
                            record.serration = Number.parseInt (val);
                            MgrData.inst.callDataChange ();
                        }
                    }
                ),
                NodeModules.react.createElement (
                    NodeModules.antd.InputNumber,
                    {
                        min: 1,
                        max: 10,
                        style: {

                        },

                        [DomDefine.PROPS_VALUE]: record.serration,
                        [DomDefine.PROPS_ON_CHANGE]: (val) => {
                            record.serration = val;
                            MgrData.inst.callDataChange ();
                        }
                    }
                ),
            ),
        )
    }
}

export default DomRightSizeSerrationColor;
import IndexWindow from "../IndexWindow.js";
import NodeModules from "../NodeModules.js";
import MgrData from "../mgr_data/MgrData.js";
import DomDefine from "./DomDefine.js";

/**
 * 右边栏 - 半径、边距
 */
class DomRightRadiusMargin extends NodeModules.react.Component {

    render () {
        let record = IndexWindow.getCurrentRecord ();
        // 三横数据的容器
        return NodeModules.react.createElement (
            DomDefine.TAG_DIV,
            {
                style: {
                    [DomDefine.STYLE_MARGIN]: DomDefine.CONFIG_TXT_HALF_SPACING,
                    [DomDefine.STYLE_PADDING]: DomDefine.CONFIG_TXT_HALF_SPACING,
                    [DomDefine.STYLE_BACKGROUND_COLOR]: DomDefine.CONFIG_TXT_BG_COLOR,

                    [DomDefine.STYLE_DISPLAY]: DomDefine.STYLE_DISPLAY_FLEX,
                    [DomDefine.STYLE_FLEX_DIRECTION]: DomDefine.STYLE_FLEX_DIRECTION_COLUMN,
                }
            },

            // 第一横
            NodeModules.react.createElement (
                DomDefine.TAG_DIV,
                {
                    style: {
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
                        "左上半径",
                    ),
                    NodeModules.react.createElement (
                        NodeModules.antd.InputNumber,
                        {
                            min: 0,
                            style: {
                                [DomDefine.STYLE_WIDTH]: DomDefine.STYLE_WIDTH_PERCENTAGE_0,
                                [DomDefine.STYLE_FLEX_GROW]: 1
                            },

                            [DomDefine.PROPS_VALUE]: record.radiusLT,
                            [DomDefine.PROPS_ON_CHANGE]: (val) => {
                                record.radiusLT = val;
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
                        "上外边距",
                    ),
                    NodeModules.react.createElement (
                        NodeModules.antd.InputNumber,
                        {
                            min: 0,
                            style: {
                                [DomDefine.STYLE_WIDTH]: DomDefine.STYLE_WIDTH_PERCENTAGE_0,
                                [DomDefine.STYLE_FLEX_GROW]: 1
                            },

                            [DomDefine.PROPS_VALUE]: record.marginTop,
                            [DomDefine.PROPS_ON_CHANGE]: (val) => {
                                record.marginTop = val;
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
                        "右上半径",
                    ),
                    NodeModules.react.createElement (
                        NodeModules.antd.InputNumber,
                        {
                            min: 0,
                            style: {
                                [DomDefine.STYLE_WIDTH]: DomDefine.STYLE_WIDTH_PERCENTAGE_0,
                                [DomDefine.STYLE_FLEX_GROW]: 1
                            },

                            [DomDefine.PROPS_VALUE]: record.radiusRT,
                            [DomDefine.PROPS_ON_CHANGE]: (val) => {
                                record.radiusRT = val;
                                MgrData.inst.callDataChange ();
                            }
                        }
                    )
                ),
            ),
            // 第一横
            NodeModules.react.createElement (
                DomDefine.TAG_DIV,
                {
                    style: {
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
                        "左外边距",
                    ),
                    NodeModules.react.createElement (
                        NodeModules.antd.InputNumber,
                        {
                            min: 0,
                            style: {
                                [DomDefine.STYLE_WIDTH]: DomDefine.STYLE_WIDTH_PERCENTAGE_0,
                                [DomDefine.STYLE_FLEX_GROW]: 1
                            },

                            [DomDefine.PROPS_VALUE]: record.marginLeft,
                            [DomDefine.PROPS_ON_CHANGE]: (val) => {
                                record.marginLeft = val;
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
                            [DomDefine.STYLE_MARGIN]: DomDefine.CONFIG_TXT_HALF_SPACING
                        }
                    },

                    NodeModules.react.createElement (
                        NodeModules.antd.Input,
                        {
                            style: {
                                [DomDefine.STYLE_DISPLAY]: DomDefine.STYLE_DISPLAY_NONE
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
                        "右外边距",
                    ),
                    NodeModules.react.createElement (
                        NodeModules.antd.InputNumber,
                        {
                            min: 0,
                            style: {
                                [DomDefine.STYLE_WIDTH]: DomDefine.STYLE_WIDTH_PERCENTAGE_0,
                                [DomDefine.STYLE_FLEX_GROW]: 1
                            },

                            [DomDefine.PROPS_VALUE]: record.marginRight,
                            [DomDefine.PROPS_ON_CHANGE]: (val) => {
                                record.marginRight = val;
                                MgrData.inst.callDataChange ();
                            }
                        }
                    )
                ),
            ),
            // 第一横
            NodeModules.react.createElement (
                DomDefine.TAG_DIV,
                {
                    style: {
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
                        "左下半径",
                    ),
                    NodeModules.react.createElement (
                        NodeModules.antd.InputNumber,
                        {
                            min: 0,
                            style: {
                                [DomDefine.STYLE_WIDTH]: DomDefine.STYLE_WIDTH_PERCENTAGE_0,
                                [DomDefine.STYLE_FLEX_GROW]: 1
                            },

                            [DomDefine.PROPS_VALUE]: record.radiusLB,
                            [DomDefine.PROPS_ON_CHANGE]: (val) => {
                                record.radiusLB = val;
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
                        "下外边距",
                    ),
                    NodeModules.react.createElement (
                        NodeModules.antd.InputNumber,
                        {
                            min: 0,
                            style: {
                                [DomDefine.STYLE_WIDTH]: DomDefine.STYLE_WIDTH_PERCENTAGE_0,
                                [DomDefine.STYLE_FLEX_GROW]: 1
                            },

                            [DomDefine.PROPS_VALUE]: record.marginBottom,
                            [DomDefine.PROPS_ON_CHANGE]: (val) => {
                                record.marginBottom = val;
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
                        "右下半径",
                    ),
                    NodeModules.react.createElement (
                        NodeModules.antd.InputNumber,
                        {
                            min: 0,
                            style: {
                                [DomDefine.STYLE_WIDTH]: DomDefine.STYLE_WIDTH_PERCENTAGE_0,
                                [DomDefine.STYLE_FLEX_GROW]: 1
                            },

                            [DomDefine.PROPS_VALUE]: record.radiusRB,
                            [DomDefine.PROPS_ON_CHANGE]: (val) => {
                                record.radiusRB = val;
                                MgrData.inst.callDataChange ();
                            }
                        }
                    )
                ),
            )
        );
    }
}

export default DomRightRadiusMargin;
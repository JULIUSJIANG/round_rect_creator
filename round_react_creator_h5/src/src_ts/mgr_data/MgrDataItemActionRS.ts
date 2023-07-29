import IndexWindow from "../IndexWindow";
import NodeModules from "../NodeModules";
import DomDefine from "../dom/DomDefine";
import MgrData from "./MgrData";

class MgrDataItemActionRS {
    /**
     * 代号
     */
    code: number;
    /**
     * 名称
     */
    name: string;
    /**
     * 详情获取器
     */
    detail: () => Array <any>

    constructor (args: {
        code: number,
        name: string,
        filter: () => Array <any>
    })
    {
        this.code = args.code;
        this.name = args.name;
        this.detail = args.filter;

        MgrDataItemActionRS.mapCodeToRS.set (this.code, this);
        MgrDataItemActionRS.listRS.push (this);
    }
}

namespace MgrDataItemActionRS {
    /**
     * 代号到具体策略的映射
     */
    export const mapCodeToRS: Map <number, MgrDataItemActionRS> = new Map ();
    /**
     * 策略的集合
     */
    export const listRS: Array <MgrDataItemActionRS> = new Array ();

    /**
     * 纯色模式
     */
    export const pure = new MgrDataItemActionRS ({
        code: 0,
        name: "纯色模式",
        filter: () => {
            return [];
        }
    });
    /**
     * 线框模式
     */
    export const frame = new MgrDataItemActionRS ({
        code: 1,
        name: "线框模式",
        filter: () => {
            let record = IndexWindow.getCurrentRecord ();
            return [
                NodeModules.react.createElement (
                    DomDefine.TAG_DIV,
                    {
                        style: {
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
                        "线宽",
                    ),
                    NodeModules.react.createElement (
                        NodeModules.antd.InputNumber,
                        {
                            min: 0,
                            style: {
                                [DomDefine.STYLE_WIDTH]: DomDefine.STYLE_WIDTH_PERCENTAGE_0,
                                [DomDefine.STYLE_FLEX_GROW]: 1
                            },

                            [DomDefine.PROPS_VALUE]: record.code1LineWidth,
                            [DomDefine.PROPS_ON_CHANGE]: (val) => {
                                record.code1LineWidth = val as any;
                                MgrData.inst.callDataChange ();
                            },
                        }
                    )
                )
            ];
        }
    });
    /**
     * 向内淡出
     */
    export const fadeOut = new MgrDataItemActionRS ({
        code: 2,
        name: "向内淡出",
        filter: () => {
            let record = IndexWindow.getCurrentRecord ();
            return [
                NodeModules.react.createElement (
                    DomDefine.TAG_DIV,
                    {
                        style: {
                            [DomDefine.STYLE_DISPLAY]: DomDefine.STYLE_DISPLAY_FLEX,
                            [DomDefine.STYLE_ALIGN_ITEMS]: DomDefine.STYLE_ALIGN_ITEMS_CENTER,
                            [DomDefine.STYLE_JUSTIFY_CONTENT]: DomDefine.STYLE_JUSTIFY_CONTENT_CENTER,
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
                            "淡出距离",
                        ),
                        NodeModules.react.createElement (
                            NodeModules.antd.InputNumber,
                            {
                                min: 0,
                                style: {
                                    [DomDefine.STYLE_WIDTH]: DomDefine.STYLE_WIDTH_PERCENTAGE_0,
                                    [DomDefine.STYLE_FLEX_GROW]: 1
                                },
        
                                [DomDefine.PROPS_VALUE]: record.code2FadeDistance,
                                [DomDefine.PROPS_ON_CHANGE]: (val) => {
                                    record.code2FadeDistance = val as any;
                                    MgrData.inst.callDataChange ();
                                },
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
                                    [DomDefine.STYLE_MARGIN_RIGHT]: DomDefine.CONFIG_TXT_DOUBLE_SPACING,
                                }
                            },
                            "淡出变速",
                        ),
                        NodeModules.react.createElement (
                            NodeModules.antd.Slider,
                            {
                                min: -4,
                                max: 4,
                                step: 0.01,
                                style: {
                                    [DomDefine.STYLE_WIDTH]: DomDefine.STYLE_WIDTH_PERCENTAGE_0,
                                    [DomDefine.STYLE_FLEX_GROW]: 1,
                                    [DomDefine.STYLE_MARGIN_RIGHT]: DomDefine.CONFIG_TXT_DOUBLE_SPACING,
                                },
        
                                [DomDefine.PROPS_VALUE]: record.code2SpeedOffset,
                                [DomDefine.PROPS_ON_CHANGE]: (val) => {
                                    record.code2SpeedOffset = val;
                                    MgrData.inst.callDataChange ();
                                }
                            }
                        ),
                        NodeModules.react.createElement (
                            NodeModules.antd.InputNumber,
                            {
                                min: -4,
                                max: 4,
                                style: {
        
                                },
        
                                [DomDefine.PROPS_VALUE]: record.code2SpeedOffset,
                                [DomDefine.PROPS_ON_CHANGE]: (val) => {
                                    record.code2SpeedOffset = val as any;
                                    MgrData.inst.callDataChange ();
                                }
                            }
                        ),
                    ),
                )
            ];
        }
    });
    /**
     * 向内淡入
     */
    export const fadeIn = new MgrDataItemActionRS ({
        code: 3,
        name: "向内淡入",
        filter: () => {
            let record = IndexWindow.getCurrentRecord ();
            return [
                NodeModules.react.createElement (
                    DomDefine.TAG_DIV,
                    {
                        style: {
                            [DomDefine.STYLE_DISPLAY]: DomDefine.STYLE_DISPLAY_FLEX,
                            [DomDefine.STYLE_ALIGN_ITEMS]: DomDefine.STYLE_ALIGN_ITEMS_CENTER,
                            [DomDefine.STYLE_JUSTIFY_CONTENT]: DomDefine.STYLE_JUSTIFY_CONTENT_CENTER,
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
                            "淡入距离",
                        ),
                        NodeModules.react.createElement (
                            NodeModules.antd.InputNumber,
                            {
                                min: 0,
                                style: {
                                    [DomDefine.STYLE_WIDTH]: DomDefine.STYLE_WIDTH_PERCENTAGE_0,
                                    [DomDefine.STYLE_FLEX_GROW]: 1
                                },
        
                                [DomDefine.PROPS_VALUE]: record.code3FadeDistance,
                                [DomDefine.PROPS_ON_CHANGE]: (val) => {
                                    record.code3FadeDistance = val as any;
                                    MgrData.inst.callDataChange ();
                                },
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
                                    [DomDefine.STYLE_MARGIN_RIGHT]: DomDefine.CONFIG_TXT_DOUBLE_SPACING,
                                }
                            },
                            "淡入变速",
                        ),
                        NodeModules.react.createElement (
                            NodeModules.antd.Slider,
                            {
                                min: -4,
                                max: 4,
                                step: 0.01,
                                style: {
                                    [DomDefine.STYLE_WIDTH]: DomDefine.STYLE_WIDTH_PERCENTAGE_0,
                                    [DomDefine.STYLE_FLEX_GROW]: 1,
                                    [DomDefine.STYLE_MARGIN_RIGHT]: DomDefine.CONFIG_TXT_DOUBLE_SPACING,
                                },
        
                                [DomDefine.PROPS_VALUE]: record.code3SpeedOffset,
                                [DomDefine.PROPS_ON_CHANGE]: (val) => {
                                    record.code3SpeedOffset = val;
                                    MgrData.inst.callDataChange ();
                                }
                            }
                        ),
                        NodeModules.react.createElement (
                            NodeModules.antd.InputNumber,
                            {
                                min: -4,
                                max: 4,
                                style: {
        
                                },
        
                                [DomDefine.PROPS_VALUE]: record.code3SpeedOffset,
                                [DomDefine.PROPS_ON_CHANGE]: (val) => {
                                    record.code3SpeedOffset = val as any;
                                    MgrData.inst.callDataChange ();
                                }
                            }
                        ),
                    ),
                )
            ];
        }
    });
}

export default MgrDataItemActionRS;
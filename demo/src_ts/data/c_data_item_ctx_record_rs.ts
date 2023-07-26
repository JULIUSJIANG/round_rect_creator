import c_index_client from "../c_index_client.js";
import c_modules from "../c_modules.js";
import c_dom_define from "../dom/c_dom_define.js";
import c_data from "./c_data.js";

class c_data_item_ctx_record_rs {
    /**
     * 代号
     */
    p_code: number;
    /**
     * 名称
     */
    p_name: string;
    /**
     * 详情获取器
     */
    f_detail: () => Array <any>

    constructor (args: {
        code: number,
        name: string,
        filter: () => Array <any>
    })
    {
        this.p_code = args.code;
        this.p_name = args.name;
        this.f_detail = args.filter;

        c_data_item_ctx_record_rs.map_code_to_rs.set (this.p_code, this);
        c_data_item_ctx_record_rs.list_rs.push (this);
    }
}

namespace c_data_item_ctx_record_rs {
    /**
     * 代号到具体策略的映射
     */
    export const map_code_to_rs: Map <number, c_data_item_ctx_record_rs> = new Map ();
    /**
     * 策略的集合
     */
    export const list_rs: Array <c_data_item_ctx_record_rs> = new Array ();

    /**
     * 纯色模式
     */
    export const i_pure = new c_data_item_ctx_record_rs ({
        code: 0,
        name: "纯色模式",
        filter: () => {
            return [];
        }
    });
    /**
     * 线框模式
     */
    export const i_frame = new c_data_item_ctx_record_rs ({
        code: 1,
        name: "线框模式",
        filter: () => {
            let record = c_index_client.f_get_current_record ();
            return [
                c_modules.react.createElement (
                    c_dom_define.t_div,
                    {
                        style: {
                            [c_dom_define.s_margin]: c_dom_define.d_spacing_half,
    
                            [c_dom_define.s_display]: c_dom_define.s_display_flex,
                            [c_dom_define.s_align_items]: c_dom_define.s_align_items_center,
                            [c_dom_define.s_justify_content]: c_dom_define.s_justify_content_center,
                        }
                    },
    
                    c_modules.react.createElement (
                        c_dom_define.t_span,
                        {
                            style: {
                                [c_dom_define.s_font_size]: c_dom_define.s_font_size_14,
                                [c_dom_define.s_margin_left]: c_dom_define.d_spacing,
                                [c_dom_define.s_margin_right]: c_dom_define.d_spacing
                            }
                        },
                        "线宽",
                    ),
                    c_modules.react.createElement (
                        c_modules.antd.InputNumber,
                        {
                            min: 0,
                            style: {
                                [c_dom_define.s_width]: c_dom_define.s_width_percentage_0,
                                [c_dom_define.s_flex_grow]: 1
                            },

                            [c_dom_define.p_value]: record.code_1_line_width,
                            [c_dom_define.p_on_change]: (val) => {
                                record.code_1_line_width = val;
                                c_data.inst.f_call_data_change ();
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
    export const i_fade_out = new c_data_item_ctx_record_rs ({
        code: 2,
        name: "向内淡出",
        filter: () => {
            let record = c_index_client.f_get_current_record ();
            return [
                c_modules.react.createElement (
                    c_dom_define.t_div,
                    {
                        style: {
                            [c_dom_define.s_margin]: c_dom_define.d_spacing_half,
    
                            [c_dom_define.s_display]: c_dom_define.s_display_flex,
                            [c_dom_define.s_align_items]: c_dom_define.s_align_items_center,
                            [c_dom_define.s_justify_content]: c_dom_define.s_justify_content_center,
                        }
                    },
    
                    c_modules.react.createElement (
                        c_dom_define.t_span,
                        {
                            style: {
                                [c_dom_define.s_font_size]: c_dom_define.s_font_size_14,
                                [c_dom_define.s_margin_left]: c_dom_define.d_spacing,
                                [c_dom_define.s_margin_right]: c_dom_define.d_spacing
                            }
                        },
                        "淡出距离",
                    ),
                    c_modules.react.createElement (
                        c_modules.antd.InputNumber,
                        {
                            min: 0,
                            style: {
                                [c_dom_define.s_width]: c_dom_define.s_width_percentage_0,
                                [c_dom_define.s_flex_grow]: 1
                            },

                            [c_dom_define.p_value]: record.code_2_fade_distance,
                            [c_dom_define.p_on_change]: (val) => {
                                record.code_2_fade_distance = val;
                                c_data.inst.f_call_data_change ();
                            },
                        }
                    )
                )
            ];
        }
    });
    /**
     * 向内淡入
     */
    export const i_fade_in = new c_data_item_ctx_record_rs ({
        code: 3,
        name: "向内淡入",
        filter: () => {
            let record = c_index_client.f_get_current_record ();
            return [
                c_modules.react.createElement (
                    c_dom_define.t_div,
                    {
                        style: {
                            [c_dom_define.s_margin]: c_dom_define.d_spacing_half,
    
                            [c_dom_define.s_display]: c_dom_define.s_display_flex,
                            [c_dom_define.s_align_items]: c_dom_define.s_align_items_center,
                            [c_dom_define.s_justify_content]: c_dom_define.s_justify_content_center,
                        }
                    },
    
                    c_modules.react.createElement (
                        c_dom_define.t_span,
                        {
                            style: {
                                [c_dom_define.s_font_size]: c_dom_define.s_font_size_14,
                                [c_dom_define.s_margin_left]: c_dom_define.d_spacing,
                                [c_dom_define.s_margin_right]: c_dom_define.d_spacing
                            }
                        },
                        "淡入距离",
                    ),
                    c_modules.react.createElement (
                        c_modules.antd.InputNumber,
                        {
                            min: 0,
                            style: {
                                [c_dom_define.s_width]: c_dom_define.s_width_percentage_0,
                                [c_dom_define.s_flex_grow]: 1
                            },

                            [c_dom_define.p_value]: record.code_3_fade_distance,
                            [c_dom_define.p_on_change]: (val) => {
                                record.code_3_fade_distance = val;
                                c_data.inst.f_call_data_change ();
                            },
                        }
                    )
                )
            ];
        }
    });
}

export default c_data_item_ctx_record_rs;
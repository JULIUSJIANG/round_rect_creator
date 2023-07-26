import c_index_client from "../c_index_client.js";
import c_modules from "../c_modules.js";
import c_data from "../data/c_data.js";
import c_dom_define from "./c_dom_define.js";
class c_dom_right_radius_padding extends c_modules.react.Component {
    render() {
        let record = c_index_client.f_get_current_record();
        // 三横数据的容器
        return c_modules.react.createElement(c_dom_define.t_div, {
            style: {
                [c_dom_define.s_margin]: c_dom_define.d_spacing_half,
                [c_dom_define.s_padding]: c_dom_define.d_spacing_half,
                [c_dom_define.s_background_color]: c_dom_define.d_bg_color,
                [c_dom_define.s_display]: c_dom_define.s_display_flex,
                [c_dom_define.s_flex_direction]: c_dom_define.s_flex_direction_column,
            }
        }, 
        // 第一横
        c_modules.react.createElement(c_dom_define.t_div, {
            style: {
                [c_dom_define.s_display]: c_dom_define.s_display_flex,
            }
        }, c_modules.react.createElement(c_dom_define.t_div, {
            style: {
                [c_dom_define.s_width]: c_dom_define.s_width_percentage_0,
                [c_dom_define.s_flex_grow]: 1,
                [c_dom_define.s_margin]: c_dom_define.d_spacing_half,
                [c_dom_define.s_display]: c_dom_define.s_display_flex,
                [c_dom_define.s_align_items]: c_dom_define.s_align_items_center,
                [c_dom_define.s_justify_content]: c_dom_define.s_justify_content_center,
            }
        }, c_modules.react.createElement(c_dom_define.t_span, {
            style: {
                [c_dom_define.s_font_size]: c_dom_define.s_font_size_14,
                [c_dom_define.s_margin_left]: c_dom_define.d_spacing,
                [c_dom_define.s_margin_right]: c_dom_define.d_spacing
            }
        }, "左上半径"), c_modules.react.createElement(c_modules.antd.InputNumber, {
            min: 0,
            style: {
                [c_dom_define.s_width]: c_dom_define.s_width_percentage_0,
                [c_dom_define.s_flex_grow]: 1
            },
            [c_dom_define.p_value]: record.radius_lt,
            [c_dom_define.p_on_change]: (val) => {
                record.radius_lt = val;
                c_data.inst.f_call_data_change();
            }
        })), c_modules.react.createElement(c_dom_define.t_div, {
            style: {
                [c_dom_define.s_width]: c_dom_define.s_width_percentage_0,
                [c_dom_define.s_flex_grow]: 1,
                [c_dom_define.s_margin]: c_dom_define.d_spacing_half,
                [c_dom_define.s_display]: c_dom_define.s_display_flex,
                [c_dom_define.s_align_items]: c_dom_define.s_align_items_center,
                [c_dom_define.s_justify_content]: c_dom_define.s_justify_content_center,
            }
        }, c_modules.react.createElement(c_dom_define.t_span, {
            style: {
                [c_dom_define.s_font_size]: c_dom_define.s_font_size_14,
                [c_dom_define.s_margin_left]: c_dom_define.d_spacing,
                [c_dom_define.s_margin_right]: c_dom_define.d_spacing
            }
        }, "上外边距"), c_modules.react.createElement(c_modules.antd.InputNumber, {
            min: 0,
            style: {
                [c_dom_define.s_width]: c_dom_define.s_width_percentage_0,
                [c_dom_define.s_flex_grow]: 1
            },
            [c_dom_define.p_value]: record.margin_top,
            [c_dom_define.p_on_change]: (val) => {
                record.margin_top = val;
                c_data.inst.f_call_data_change();
            }
        })), c_modules.react.createElement(c_dom_define.t_div, {
            style: {
                [c_dom_define.s_width]: c_dom_define.s_width_percentage_0,
                [c_dom_define.s_flex_grow]: 1,
                [c_dom_define.s_margin]: c_dom_define.d_spacing_half,
                [c_dom_define.s_display]: c_dom_define.s_display_flex,
                [c_dom_define.s_align_items]: c_dom_define.s_align_items_center,
                [c_dom_define.s_justify_content]: c_dom_define.s_justify_content_center,
            }
        }, c_modules.react.createElement(c_dom_define.t_span, {
            style: {
                [c_dom_define.s_font_size]: c_dom_define.s_font_size_14,
                [c_dom_define.s_margin_left]: c_dom_define.d_spacing,
                [c_dom_define.s_margin_right]: c_dom_define.d_spacing
            }
        }, "右上半径"), c_modules.react.createElement(c_modules.antd.InputNumber, {
            min: 0,
            style: {
                [c_dom_define.s_width]: c_dom_define.s_width_percentage_0,
                [c_dom_define.s_flex_grow]: 1
            },
            [c_dom_define.p_value]: record.radius_rt,
            [c_dom_define.p_on_change]: (val) => {
                record.radius_rt = val;
                c_data.inst.f_call_data_change();
            }
        }))), 
        // 第一横
        c_modules.react.createElement(c_dom_define.t_div, {
            style: {
                [c_dom_define.s_display]: c_dom_define.s_display_flex,
            }
        }, c_modules.react.createElement(c_dom_define.t_div, {
            style: {
                [c_dom_define.s_width]: c_dom_define.s_width_percentage_0,
                [c_dom_define.s_flex_grow]: 1,
                [c_dom_define.s_margin]: c_dom_define.d_spacing_half,
                [c_dom_define.s_display]: c_dom_define.s_display_flex,
                [c_dom_define.s_align_items]: c_dom_define.s_align_items_center,
                [c_dom_define.s_justify_content]: c_dom_define.s_justify_content_center,
            }
        }, c_modules.react.createElement(c_dom_define.t_span, {
            style: {
                [c_dom_define.s_font_size]: c_dom_define.s_font_size_14,
                [c_dom_define.s_margin_left]: c_dom_define.d_spacing,
                [c_dom_define.s_margin_right]: c_dom_define.d_spacing
            }
        }, "左外边距"), c_modules.react.createElement(c_modules.antd.InputNumber, {
            min: 0,
            style: {
                [c_dom_define.s_width]: c_dom_define.s_width_percentage_0,
                [c_dom_define.s_flex_grow]: 1
            },
            [c_dom_define.p_value]: record.margin_left,
            [c_dom_define.p_on_change]: (val) => {
                record.margin_left = val;
                c_data.inst.f_call_data_change();
            }
        })), c_modules.react.createElement(c_dom_define.t_div, {
            style: {
                [c_dom_define.s_width]: c_dom_define.s_width_percentage_0,
                [c_dom_define.s_flex_grow]: 1,
                [c_dom_define.s_margin]: c_dom_define.d_spacing_half
            }
        }, c_modules.react.createElement(c_modules.antd.Input, {
            style: {
                [c_dom_define.s_display]: c_dom_define.s_display_none
            }
        })), c_modules.react.createElement(c_dom_define.t_div, {
            style: {
                [c_dom_define.s_width]: c_dom_define.s_width_percentage_0,
                [c_dom_define.s_flex_grow]: 1,
                [c_dom_define.s_margin]: c_dom_define.d_spacing_half,
                [c_dom_define.s_display]: c_dom_define.s_display_flex,
                [c_dom_define.s_align_items]: c_dom_define.s_align_items_center,
                [c_dom_define.s_justify_content]: c_dom_define.s_justify_content_center,
            }
        }, c_modules.react.createElement(c_dom_define.t_span, {
            style: {
                [c_dom_define.s_font_size]: c_dom_define.s_font_size_14,
                [c_dom_define.s_margin_left]: c_dom_define.d_spacing,
                [c_dom_define.s_margin_right]: c_dom_define.d_spacing
            }
        }, "右外边距"), c_modules.react.createElement(c_modules.antd.InputNumber, {
            min: 0,
            style: {
                [c_dom_define.s_width]: c_dom_define.s_width_percentage_0,
                [c_dom_define.s_flex_grow]: 1
            },
            [c_dom_define.p_value]: record.margin_right,
            [c_dom_define.p_on_change]: (val) => {
                record.margin_right = val;
                c_data.inst.f_call_data_change();
            }
        }))), 
        // 第一横
        c_modules.react.createElement(c_dom_define.t_div, {
            style: {
                [c_dom_define.s_display]: c_dom_define.s_display_flex,
            }
        }, c_modules.react.createElement(c_dom_define.t_div, {
            style: {
                [c_dom_define.s_width]: c_dom_define.s_width_percentage_0,
                [c_dom_define.s_flex_grow]: 1,
                [c_dom_define.s_margin]: c_dom_define.d_spacing_half,
                [c_dom_define.s_display]: c_dom_define.s_display_flex,
                [c_dom_define.s_align_items]: c_dom_define.s_align_items_center,
                [c_dom_define.s_justify_content]: c_dom_define.s_justify_content_center,
            }
        }, c_modules.react.createElement(c_dom_define.t_span, {
            style: {
                [c_dom_define.s_font_size]: c_dom_define.s_font_size_14,
                [c_dom_define.s_margin_left]: c_dom_define.d_spacing,
                [c_dom_define.s_margin_right]: c_dom_define.d_spacing
            }
        }, "左下半径"), c_modules.react.createElement(c_modules.antd.InputNumber, {
            min: 0,
            style: {
                [c_dom_define.s_width]: c_dom_define.s_width_percentage_0,
                [c_dom_define.s_flex_grow]: 1
            },
            [c_dom_define.p_value]: record.radius_lb,
            [c_dom_define.p_on_change]: (val) => {
                record.radius_lb = val;
                c_data.inst.f_call_data_change();
            }
        })), c_modules.react.createElement(c_dom_define.t_div, {
            style: {
                [c_dom_define.s_width]: c_dom_define.s_width_percentage_0,
                [c_dom_define.s_flex_grow]: 1,
                [c_dom_define.s_margin]: c_dom_define.d_spacing_half,
                [c_dom_define.s_display]: c_dom_define.s_display_flex,
                [c_dom_define.s_align_items]: c_dom_define.s_align_items_center,
                [c_dom_define.s_justify_content]: c_dom_define.s_justify_content_center,
            }
        }, c_modules.react.createElement(c_dom_define.t_span, {
            style: {
                [c_dom_define.s_font_size]: c_dom_define.s_font_size_14,
                [c_dom_define.s_margin_left]: c_dom_define.d_spacing,
                [c_dom_define.s_margin_right]: c_dom_define.d_spacing
            }
        }, "下外边距"), c_modules.react.createElement(c_modules.antd.InputNumber, {
            min: 0,
            style: {
                [c_dom_define.s_width]: c_dom_define.s_width_percentage_0,
                [c_dom_define.s_flex_grow]: 1
            },
            [c_dom_define.p_value]: record.margin_bottom,
            [c_dom_define.p_on_change]: (val) => {
                record.margin_bottom = val;
                c_data.inst.f_call_data_change();
            }
        })), c_modules.react.createElement(c_dom_define.t_div, {
            style: {
                [c_dom_define.s_width]: c_dom_define.s_width_percentage_0,
                [c_dom_define.s_flex_grow]: 1,
                [c_dom_define.s_margin]: c_dom_define.d_spacing_half,
                [c_dom_define.s_display]: c_dom_define.s_display_flex,
                [c_dom_define.s_align_items]: c_dom_define.s_align_items_center,
                [c_dom_define.s_justify_content]: c_dom_define.s_justify_content_center,
            }
        }, c_modules.react.createElement(c_dom_define.t_span, {
            style: {
                [c_dom_define.s_font_size]: c_dom_define.s_font_size_14,
                [c_dom_define.s_margin_left]: c_dom_define.d_spacing,
                [c_dom_define.s_margin_right]: c_dom_define.d_spacing
            }
        }, "右下半径"), c_modules.react.createElement(c_modules.antd.InputNumber, {
            min: 0,
            style: {
                [c_dom_define.s_width]: c_dom_define.s_width_percentage_0,
                [c_dom_define.s_flex_grow]: 1
            },
            [c_dom_define.p_value]: record.radius_rb,
            [c_dom_define.p_on_change]: (val) => {
                record.radius_rb = val;
                c_data.inst.f_call_data_change();
            }
        }))));
    }
}
export default c_dom_right_radius_padding;

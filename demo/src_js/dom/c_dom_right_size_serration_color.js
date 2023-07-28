import c_index_client from "../c_index_client.js";
import c_modules from "../c_modules.js";
import c_data from "../data/c_data.js";
import c_dom_define from "./c_dom_define.js";
class c_dom_right_size_serration_color extends c_modules.react.Component {
    render() {
        let record = c_index_client.f_get_current_record();
        return c_modules.react.createElement(c_dom_define.t_div, {
            style: {
                [c_dom_define.s_padding]: c_dom_define.d_spacing_half,
                [c_dom_define.s_margin]: c_dom_define.d_spacing_half,
                [c_dom_define.s_background_color]: c_dom_define.d_bg_color,
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
        }, "矩形最小宽度"), c_modules.react.createElement(c_modules.antd.InputNumber, {
            min: 1,
            style: {
                [c_dom_define.s_width]: c_dom_define.s_width_percentage_0,
                [c_dom_define.s_flex_grow]: 1
            },
            [c_dom_define.p_value]: record.min_size_width,
            [c_dom_define.p_on_change]: (val) => {
                record.min_size_width = val;
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
        }, "矩形最小高度"), c_modules.react.createElement(c_modules.antd.InputNumber, {
            min: 1,
            style: {
                [c_dom_define.s_width]: c_dom_define.s_width_percentage_0,
                [c_dom_define.s_flex_grow]: 1
            },
            [c_dom_define.p_value]: record.min_size_height,
            [c_dom_define.p_on_change]: (val) => {
                record.min_size_height = val;
                c_data.inst.f_call_data_change();
            }
        })), c_modules.react.createElement(c_dom_define.t_div, {
            style: {
                [c_dom_define.s_width]: c_dom_define.s_width_percentage_0,
                [c_dom_define.s_flex_grow]: 1,
                [c_dom_define.s_margin]: c_dom_define.d_spacing_half,
                // [c_dom_define.s_background_color]: c_dom_define.d_bg_color,
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
        }, "颜色"), c_modules.react.createElement(c_modules.antd.ColorPicker, {
            showText: true,
            style: {
                [c_dom_define.s_width]: c_dom_define.s_width_percentage_0,
                [c_dom_define.s_flex_grow]: 1
            },
            [c_dom_define.p_value]: record.color,
            [c_dom_define.p_on_change]: (val) => {
                record.color = val.toHex();
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
                [c_dom_define.s_margin_right]: c_dom_define.d_spacing_double,
            }
        }, "抗锯齿"), c_modules.react.createElement(c_modules.antd.Slider, {
            min: 1,
            max: 4,
            step: 1,
            style: {
                [c_dom_define.s_width]: c_dom_define.s_width_percentage_0,
                [c_dom_define.s_flex_grow]: 1,
                [c_dom_define.s_margin_right]: c_dom_define.d_spacing_double,
            },
            [c_dom_define.p_value]: record.serration,
            [c_dom_define.p_on_change]: (val) => {
                record.serration = Number.parseInt(val);
                c_data.inst.f_call_data_change();
            }
        }), c_modules.react.createElement(c_modules.antd.InputNumber, {
            min: 1,
            max: 10,
            style: {},
            [c_dom_define.p_value]: record.serration,
            [c_dom_define.p_on_change]: (val) => {
                record.serration = val;
                c_data.inst.f_call_data_change();
            }
        })));
    }
}
export default c_dom_right_size_serration_color;

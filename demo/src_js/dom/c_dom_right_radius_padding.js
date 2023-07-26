import c_modules from "../c_modules.js";
import c_dom_define from "./c_dom_define.js";
class c_dom_right_radius_padding extends c_modules.react.Component {
    render() {
        // 三横数据的容器
        return c_modules.react.createElement(c_dom_define.t_div, {
            style: {
                [c_dom_define.s_margin]: c_dom_define.d_spacing,
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
        }, c_modules.react.createElement(c_modules.antd.Input, {
            addonBefore: "左上半径",
            onChange: (com) => {
            },
            style: {
                [c_dom_define.s_width]: c_dom_define.s_width_percentage_0,
                [c_dom_define.s_flex_grow]: 1,
                [c_dom_define.s_margin]: c_dom_define.d_spacing_half
            }
        }), c_modules.react.createElement(c_modules.antd.Input, {
            addonBefore: "上外边距",
            onChange: (com) => {
            },
            style: {
                [c_dom_define.s_width]: c_dom_define.s_width_percentage_0,
                [c_dom_define.s_flex_grow]: 1,
                [c_dom_define.s_margin]: c_dom_define.d_spacing_half
            }
        }), c_modules.react.createElement(c_modules.antd.Input, {
            addonBefore: "右上半径",
            onChange: (com) => {
            },
            style: {
                [c_dom_define.s_width]: c_dom_define.s_width_percentage_0,
                [c_dom_define.s_flex_grow]: 1,
                [c_dom_define.s_margin]: c_dom_define.d_spacing_half
            }
        })), 
        // 第一横
        c_modules.react.createElement(c_dom_define.t_div, {
            style: {
                [c_dom_define.s_display]: c_dom_define.s_display_flex,
            }
        }, c_modules.react.createElement(c_modules.antd.Input, {
            addonBefore: "左外边距",
            onChange: (com) => {
            },
            style: {
                [c_dom_define.s_width]: c_dom_define.s_width_percentage_0,
                [c_dom_define.s_flex_grow]: 1,
                [c_dom_define.s_margin]: c_dom_define.d_spacing_half
            }
        }), c_modules.react.createElement(c_dom_define.t_div, {
            style: {
                [c_dom_define.s_width]: c_dom_define.s_width_percentage_0,
                [c_dom_define.s_flex_grow]: 1,
                [c_dom_define.s_margin]: c_dom_define.d_spacing_half
            }
        }), c_modules.react.createElement(c_modules.antd.Input, {
            addonBefore: "右外边距",
            onChange: (com) => {
            },
            style: {
                [c_dom_define.s_width]: c_dom_define.s_width_percentage_0,
                [c_dom_define.s_flex_grow]: 1,
                [c_dom_define.s_margin]: c_dom_define.d_spacing_half
            }
        })), 
        // 第一横
        c_modules.react.createElement(c_dom_define.t_div, {
            style: {
                [c_dom_define.s_display]: c_dom_define.s_display_flex,
            }
        }, c_modules.react.createElement(c_modules.antd.Input, {
            addonBefore: "左下半径",
            onChange: (com) => {
            },
            style: {
                [c_dom_define.s_width]: c_dom_define.s_width_percentage_0,
                [c_dom_define.s_flex_grow]: 1,
                [c_dom_define.s_margin]: c_dom_define.d_spacing_half
            }
        }), c_modules.react.createElement(c_modules.antd.Input, {
            addonBefore: "下外边距",
            onChange: (com) => {
            },
            style: {
                [c_dom_define.s_width]: c_dom_define.s_width_percentage_0,
                [c_dom_define.s_flex_grow]: 1,
                [c_dom_define.s_margin]: c_dom_define.d_spacing_half
            }
        }), c_modules.react.createElement(c_modules.antd.Input, {
            addonBefore: "右下半径",
            onChange: (com) => {
            },
            style: {
                [c_dom_define.s_width]: c_dom_define.s_width_percentage_0,
                [c_dom_define.s_flex_grow]: 1,
                [c_dom_define.s_margin]: c_dom_define.d_spacing_half
            }
        })));
    }
}
export default c_dom_right_radius_padding;

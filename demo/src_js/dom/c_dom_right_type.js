import c_modules from "../c_modules.js";
import c_dom_define from "./c_dom_define.js";
class c_dom_right_type extends c_modules.react.Component {
    render() {
        return c_modules.react.createElement(c_dom_define.t_div, {
            style: {
                [c_dom_define.s_margin]: c_dom_define.d_spacing,
                [c_dom_define.s_margin_top]: 0,
                [c_dom_define.s_padding]: c_dom_define.d_spacing_half,
                [c_dom_define.s_background_color]: c_dom_define.d_bg_color,
                [c_dom_define.s_display]: c_dom_define.s_display_flex
            }
        }, c_modules.react.createElement(c_modules.antd.Button, {
            onClick: () => {
            },
            style: {
                [c_dom_define.s_width]: c_dom_define.s_width_percentage_0,
                [c_dom_define.s_flex_grow]: 1,
                [c_dom_define.s_margin]: c_dom_define.d_spacing_half,
            }
        }, "纯色"), c_modules.react.createElement(c_modules.antd.Button, {
            onClick: (com) => {
            },
            style: {
                [c_dom_define.s_width]: c_dom_define.s_width_percentage_0,
                [c_dom_define.s_flex_grow]: 1,
                [c_dom_define.s_margin]: c_dom_define.d_spacing_half,
            }
        }, "描线"), c_modules.react.createElement(c_modules.antd.Button, {
            onClick: (com) => {
            },
            style: {
                [c_dom_define.s_width]: c_dom_define.s_width_percentage_0,
                [c_dom_define.s_flex_grow]: 1,
                [c_dom_define.s_margin]: c_dom_define.d_spacing_half,
            }
        }, "阴影"), c_modules.react.createElement(c_modules.antd.Button, {
            onClick: (com) => {
            },
            style: {
                [c_dom_define.s_width]: c_dom_define.s_width_percentage_0,
                [c_dom_define.s_flex_grow]: 1,
                [c_dom_define.s_margin]: c_dom_define.d_spacing_half,
            }
        }, "模糊"));
    }
}
export default c_dom_right_type;

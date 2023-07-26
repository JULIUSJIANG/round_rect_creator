import c_modules from "../c_modules.js";
import c_dom_define from "./c_dom_define.js";
import c_dom_left_action from "./c_dom_left_action.js";
import c_dom_left_list_record from "./c_dom_left_list_record.js";
/**
 * 左边栏
 */
class c_dom_left extends c_modules.react.Component {
    render() {
        return c_modules.react.createElement(c_dom_define.t_div, {
            style: {
                [c_dom_define.s_flex]: "400px",
                [c_dom_define.s_flex_grow]: 0,
                [c_dom_define.s_margin]: c_dom_define.d_spacing,
                [c_dom_define.s_background_color]: c_dom_define.d_bg_color,
                [c_dom_define.s_display]: c_dom_define.s_display_flex,
                [c_dom_define.s_flex_direction]: c_dom_define.s_flex_direction_column
            }
        }, c_modules.react.createElement(c_dom_left_action), c_modules.react.createElement(c_dom_left_list_record));
    }
}
export default c_dom_left;

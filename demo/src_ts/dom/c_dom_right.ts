import c_modules from "../c_modules.js";
import c_dom_right_preview from "./c_dom_right_preview.js";
import c_dom_define from "./c_dom_define.js";
import c_dom_right_radius_padding from "./c_dom_right_radius_padding.js";
import c_dom_right_type from "./c_dom_right_type.js";
import c_index_client from "../c_index_client.js";

/**
 * 右边栏
 */
class c_dom_right extends c_modules.react.Component {
    render () {
        // 没有存档，啥都不显示
        let current_record = c_index_client.f_get_current_record ();
        if (!current_record) {
            return null;
        };

        return c_modules.react.createElement (
            c_dom_define.t_div,
            {
                style: {
                    [c_dom_define.s_width]: c_dom_define.s_width_percentage_0,
                    [c_dom_define.s_flex_grow]: 1,
                    [c_dom_define.s_margin]: c_dom_define.d_spacing,
                    [c_dom_define.s_margin_left]: 0,
                    [c_dom_define.s_background_color]: c_dom_define.d_bg_color,

                    [c_dom_define.s_display]: c_dom_define.s_display_flex,
                    [c_dom_define.s_flex_direction]: c_dom_define.s_flex_direction_column
                }
            },

            c_modules.react.createElement (c_dom_right_radius_padding),
            c_modules.react.createElement (c_dom_right_type),
            c_modules.react.createElement (c_dom_right_preview)
        );
    }
}

export default c_dom_right;
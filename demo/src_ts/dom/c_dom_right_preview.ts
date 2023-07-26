import c_modules from "../c_modules.js";
import c_dom_define from "./c_dom_define.js";

/**
 * 右边图片预览
 */
class c_dom_right_preview extends c_modules.react.Component {

    render () {
        // 滚动视图的容器
        return c_modules.react.createElement (
            c_dom_define.t_div,
            {
                style: {
                    [c_dom_define.s_height]: c_dom_define.s_height_percentage_0,
                    [c_dom_define.s_flex_grow]: 1,
                    [c_dom_define.s_margin]: c_dom_define.d_spacing,
                    [c_dom_define.s_margin_top]: 0,
                    [c_dom_define.s_background_color]: c_dom_define.d_bg_color,

                    [c_dom_define.s_display]: c_dom_define.s_display_flex,
                    [c_dom_define.s_flex_direction]: c_dom_define.s_flex_direction_column
                }
            },

            // 滚动视图的遮罩
            c_modules.react.createElement (
                c_dom_define.t_div,
                {
                    style: {
                        [c_dom_define.s_height]: c_dom_define.s_height_percentage_0,
                        [c_dom_define.s_flex_grow]: 1,
                        [c_dom_define.s_margin]: c_dom_define.d_spacing,

                        [c_dom_define.s_overflow_x]: c_dom_define.s_overflow_x_scroll,
                        [c_dom_define.s_overflow_y]: c_dom_define.s_overflow_y_scroll
                    }
                },

                // 滚动的实体
                c_modules.react.createElement (
                    c_dom_define.t_canvas,
                    {
                        style: {
                            width: 2000,
                            height: 2000,
                            [c_dom_define.s_background_color]: c_dom_define.d_bg_color,
                            [c_dom_define.s_display]: c_dom_define.s_display_block
                        }
                    }
                )
            )
        );
    }
}

export default c_dom_right_preview;
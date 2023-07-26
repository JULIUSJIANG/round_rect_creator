import c_modules from "../c_modules.js";
import c_dom_left from "./c_dom_left.js";
import c_dom_right from "./c_dom_right.js";
import c_dom_define from "./c_dom_define.js";

/**
 * 根
 */
class c_dom_root extends c_modules.react.Component {

    constructor (...args) {
        super (...args);
    }

    /**
     * 组件被挂载
     */
    componentDidMount () {

    }

    /**
     * 组件更新完成
     */
    componentDidUpdate () {

    }

    /**
     * 组件要被卸载
     */
    componentWillUnmount () {

    }

    render () {
        // 把容器转为 flex 排版
        return c_modules.react.createElement (
            c_dom_define.t_div,
            {
                style: {
                    [c_dom_define.s_width]: c_dom_define.s_width_percentage_100,
                    [c_dom_define.s_height]: c_dom_define.s_height_percentage_100,

                    [c_dom_define.s_display]: c_dom_define.s_display_flex,
                    [c_dom_define.s_flex_direction]: c_dom_define.s_flex_direction_column
                }
            },

            // 最外层背景
            c_modules.react.createElement (
                c_dom_define.t_div,
                {
                    style: {
                        [c_dom_define.s_height]: c_dom_define.s_height_percentage_0,
                        [c_dom_define.s_flex_grow]: 1,
                        [c_dom_define.s_margin]: c_dom_define.d_spacing,
                        [c_dom_define.s_background_color]: c_dom_define.d_bg_color,

                        [c_dom_define.s_display]: c_dom_define.s_display_flex
                    }
                },

                c_modules.react.createElement (c_dom_left),
                c_modules.react.createElement (c_dom_right)
            )
        );
    }
}

export default c_dom_root;
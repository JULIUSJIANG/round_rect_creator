import c_modules from "../c_modules.js";
import c_data from "../data/c_data.js";
import c_data_item from "../data/c_data_item.js";
import c_dom_left_list_record_input from "./c_dom_left_list_record_input.js";
import c_dom_define from "./c_dom_define.js";

/**
 * 根 - 存档列表
 */
class c_dom_left_list_record extends c_modules.react.Component {

    render () {
        let list_children: Array <any> = new Array ();
        let list_record = c_data.inst.f_get (c_data_item.list_reccord);
        for (let i = 0; i < list_record.length; i++) {
            let list_record_i = list_record [i];
            let props_btn = {
                onClick: () => {
                    c_data.inst.f_set (c_data_item.current_edit_record_id, list_record_i.id);
                },
                style: {
                    [c_dom_define.s_flex]: "100px",
                    [c_dom_define.s_flex_grow]: 0
                }
            };
            if (list_record_i.id == c_data.inst.f_get (c_data_item.current_edit_record_id)) {
                props_btn ["type"] = "primary";
            };
            let props_div = {
                style: {
                    [c_dom_define.s_display]: c_dom_define.s_display_flex,
                }
            };
            // 不是最后一位的话，要保留间距
            if (i != list_record.length - 1) {
                props_div.style [c_dom_define.s_margin_bottom] = c_dom_define.d_spacing;
            };
            list_children.push (c_modules.react.createElement (
                c_dom_define.t_div,
                props_div,

                c_modules.react.createElement (
                    c_dom_left_list_record_input,
                    {
                        value: list_record_i.name,
                        onChange: (e) => {
                            list_record_i.name = e;
                            c_data.inst.f_call_data_change ();
                        },
                        style: {
                            [c_dom_define.s_width]: c_dom_define.s_width_percentage_0,
                            [c_dom_define.s_margin_right]: c_dom_define.d_spacing,
                            [c_dom_define.s_flex_grow]: 1
                        }
                    }
                ),
                c_modules.react.createElement (
                    c_modules.antd.Button,
                    props_btn,

                    `选择`
                )
            ))
        };
        // 滚动视图的容器
        return c_modules.react.createElement (
            c_dom_define.t_div,
            {
                style: {
                    [c_dom_define.s_height]: c_dom_define.s_height_percentage_0,
                    [c_dom_define.s_flex_grow]: 1,
                    [c_dom_define.s_margin]: c_dom_define.d_spacing_half,
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

                        [c_dom_define.s_overflow_x]: c_dom_define.s_overflow_x_hidden,
                        [c_dom_define.s_overflow_y]: c_dom_define.s_overflow_y_scroll
                    }
                },

                // 滚动的列表
                c_modules.react.createElement (
                    c_dom_define.t_div,
                    {
                        style: {
                            [c_dom_define.s_display]: c_dom_define.s_display_flex,
                            [c_dom_define.s_flex_direction]: c_dom_define.s_flex_direction_column,

                            [c_dom_define.s_margin_right]: c_dom_define.d_spacing
                        }
                    },

                    ...list_children
                )
            )
        );
    }
}

export default c_dom_left_list_record;
import c_index_client from "../c_index_client.js";
import c_modules from "../c_modules.js";
import c_data from "../data/c_data.js";
import c_data_item_ctx_record_rs from "../data/c_data_item_ctx_record_rs.js";
import c_dom_define from "./c_dom_define.js";

class c_dom_right_type extends c_modules.react.Component {

    render () {
        let current_record = c_index_client.f_get_current_record ();
        // 关乎策略的按钮集合
        let list_children_rs = [];
        for (let i = 0; i < c_data_item_ctx_record_rs.list_rs.length; i++) {
            let list_rs_i = c_data_item_ctx_record_rs.list_rs [i];
            let props = {
                onClick: () => {
                    current_record.current_code = list_rs_i.p_code;
                    c_data.inst.f_call_data_change ();
                },
                style: {
                    [c_dom_define.s_width]: c_dom_define.s_width_percentage_0,
                    [c_dom_define.s_flex_grow]: 1,
                    [c_dom_define.s_margin]: c_dom_define.d_spacing_half,
                }
            };
            // 选中的模式得到高亮
            if (current_record.current_code == list_rs_i.p_code) {
                props ["type"] = "primary";
            };
            list_children_rs.push (c_modules.react.createElement (
                c_modules.antd.Button,
                props,

                list_rs_i.p_name
            ));
        };
        let code_rs = c_data_item_ctx_record_rs.map_code_to_rs.get (current_record.current_code);
        let detail = code_rs.f_detail ();
        // 最外层容器
        return c_modules.react.createElement (
            c_dom_define.t_div,
            {
                style: {
                    [c_dom_define.s_padding]: c_dom_define.d_spacing_half,
                    [c_dom_define.s_margin]: c_dom_define.d_spacing_half,
                    [c_dom_define.s_background_color]: c_dom_define.d_bg_color,

                    [c_dom_define.s_display]: c_dom_define.s_display_flex,
                    [c_dom_define.s_flex_direction]: c_dom_define.s_flex_direction_column
                }
            },

            // 第一行，类型选择
            c_modules.react.createElement (
                c_dom_define.t_div,
                {
                    style: {
                        [c_dom_define.s_display]: c_dom_define.s_display_flex
                    }
                },

                ...list_children_rs
            ),

            ...detail
        );
    }
}

export default c_dom_right_type;
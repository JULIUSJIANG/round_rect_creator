import c_index_client from "../c_index_client.js";
import c_modules from "../c_modules.js";
import c_data from "../data/c_data.js";
import c_data_item from "../data/c_data_item.js";
import c_dom_define from "./c_dom_define.js";
import c_request from "../c_request.js";
/**
 * 根 - 行为导航栏
 */
class c_dom_left_action extends c_modules.react.Component {
    render() {
        return c_modules.react.createElement(c_dom_define.t_div, {
            style: {
                [c_dom_define.s_flex_grow]: 0,
                [c_dom_define.s_padding]: c_dom_define.d_spacing_half,
                [c_dom_define.s_margin]: c_dom_define.d_spacing_half,
                [c_dom_define.s_background_color]: c_dom_define.d_bg_color,
                [c_dom_define.s_display]: c_dom_define.s_display_flex,
                [c_dom_define.s_flex_direction]: c_dom_define.s_flex_direction_column
            }
        }, c_modules.react.createElement(c_modules.antd.Button, {
            onClick: () => {
                c_index_client.f_add_record();
            },
            style: {
                margin: c_dom_define.d_spacing_half
            }
        }, `新建`), c_modules.react.createElement(c_modules.antd.Button, {
            onClick: () => {
                let list_record = c_data.inst.f_get(c_data_item.list_reccord);
                let edit_id = c_data.inst.f_get(c_data_item.current_edit_record_id);
                let edit_idx;
                for (let i = 0; i < list_record.length; i++) {
                    let list_record_i = list_record[i];
                    if (list_record_i.id == edit_id) {
                        edit_idx = i;
                        break;
                    }
                    ;
                }
                ;
                list_record.splice(edit_idx, 1);
                if (list_record.length == 0) {
                    c_index_client.f_add_record();
                }
                else {
                    edit_idx = Math.min(edit_idx, list_record.length - 1);
                    c_data.inst.f_set(c_data_item.current_edit_record_id, list_record[edit_idx].id);
                }
                ;
            },
            style: {
                margin: c_dom_define.d_spacing_half
            }
        }, `删除`), c_modules.react.createElement(c_modules.antd.Button, {
            onClick: () => {
                let record = c_index_client.f_get_current_record();
                c_index_client.f_fetch(c_request.client_fetch_save, {
                    file_name: `${record.name}.png`,
                    file_url: c_index_client.data_url
                });
            },
            style: {
                margin: c_dom_define.d_spacing_half
            }
        }, `导出 png`));
    }
}
export default c_dom_left_action;

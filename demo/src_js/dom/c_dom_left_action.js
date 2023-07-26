import c_modules from "../c_modules.js";
import c_data from "../data/c_data.js";
import c_data_item from "../data/c_data_item.js";
import c_config from "../c_config.js";
/**
 * 根 - 行为导航栏
 */
class c_dom_left_action extends c_modules.react.Component {
    render() {
        return c_modules.react.createElement("div", {
            style: {
                padding: c_config.SPACING_HALF
            }
        }, c_modules.react.createElement("div", {
            style: {
                display: "flex"
            }
        }, c_modules.react.createElement(c_modules.antd.Button, {
            onClick: () => {
                let list_record = c_data.inst.f_get(c_data_item.list_reccord);
                let record_id = c_data.inst.f_get(c_data_item.seed_record) + 1;
                c_data.inst.f_set(c_data_item.seed_record, record_id);
                list_record.push({
                    id: record_id,
                    name: `圆角矩形【${record_id}】`
                });
                c_data.inst.f_set(c_data_item.current_edit_record_id, record_id);
            },
            block: true,
            style: {
                margin: c_config.SPACING_HALF
            }
        }, `新建`)), c_modules.react.createElement("div", {
            style: {
                display: "flex"
            }
        }, c_modules.react.createElement(c_modules.antd.Button, {
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
                    c_data.inst.f_set(c_data_item.current_edit_record_id, null);
                }
                else {
                    edit_idx = Math.min(edit_idx, list_record.length - 1);
                    c_data.inst.f_set(c_data_item.current_edit_record_id, list_record[edit_idx].id);
                }
                ;
            },
            block: true,
            style: {
                margin: c_config.SPACING_HALF
            }
        }, `删除`)));
    }
}
export default c_dom_left_action;

import c_modules from "../c_modules.js";
import c_data from "../data/c_data.js";
import c_data_item from "../data/c_data_item.js";
import c_config from "../c_config.js";
/**
 * 根 - 存档列表
 */
class c_dom_left_list_record extends c_modules.react.Component {
    render() {
        let list_children = new Array();
        let list_record = c_data.inst.f_get(c_data_item.list_reccord);
        for (let i = 0; i < list_record.length; i++) {
            let list_record_i = list_record[i];
            let props_btn = {
                onClick: () => {
                    c_data.inst.f_set(c_data_item.current_edit_record_id, list_record_i.id);
                },
                block: true
            };
            if (list_record_i.id == c_data.inst.f_get(c_data_item.current_edit_record_id)) {
                props_btn["type"] = "primary";
            }
            ;
            list_children.push(c_modules.react.createElement(c_modules.antd.Row, {
                style: {},
                gutter: [
                    c_config.SPACING_NUMBER,
                    0
                ]
            }, c_modules.react.createElement(c_modules.antd.Col, {
                flex: "auto",
            }, c_modules.react.createElement(c_modules.antd.Input, {
                defaultValue: list_record_i.name,
                onChange: (e) => {
                    console.log(`onChange`, e.target.value);
                }
            })), c_modules.react.createElement(c_modules.antd.Col, {
                flex: "100px",
            }, c_modules.react.createElement(c_modules.antd.Button, props_btn, `编辑`))));
        }
        ;
        return c_modules.react.createElement("div", {
            style: {
                flexGrow: 1,
                overflowY: "auto",
                overflowX: "hidden",
                padding: c_config.SPACING,
                border: c_config.BLOCK_BORDER,
                display: "flex",
                flexDirection: "column"
            }
        }, c_modules.react.createElement(c_modules.antd.Space, {
            direction: "vertical",
            style: {
                width: "100%",
                flexGrow: 1,
                overflowY: "auto",
                overflowX: "hidden",
            }
        }, ...list_children));
    }
}
export default c_dom_left_list_record;

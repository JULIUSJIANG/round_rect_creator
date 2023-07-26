import c_config from "../c_config.js";
import c_modules from "../c_modules.js";
import c_dom_left_action from "./c_dom_left_action.js";
import c_dom_left_list_record from "./c_dom_left_list_record.js";
/**
 * 左边栏
 */
class c_dom_left extends c_modules.react.Component {
    render() {
        return c_modules.react.createElement(c_modules.antd.Col, {
            flex: "400px",
            style: {
                height: "100%",
                display: "flex",
                flexDirection: "column",
                paddingTop: c_config.SPACING,
                paddingBottom: c_config.SPACING
            }
        }, c_modules.react.createElement("div", {
            style: {
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                height: "100%",
                border: c_config.BLOCK_BORDER,
                backgroundColor: c_config.BLOCK_BG_COLOR
            }
        }, c_modules.react.createElement(c_dom_left_action, {}), c_modules.react.createElement(c_dom_left_list_record, {}), c_modules.react.createElement("div", {
            style: {
                paddingTop: c_config.SPACING
            }
        })));
    }
}
export default c_dom_left;

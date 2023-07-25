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
                padding: c_config.SPACING
            }
        }, c_modules.react.createElement(c_dom_left_action, {}), c_modules.react.createElement("div", {
            style: {
                padding: c_config.SPACING_HALF
            }
        }), c_modules.react.createElement(c_dom_left_list_record, {}));
    }
}
export default c_dom_left;
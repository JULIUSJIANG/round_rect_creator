import c_config from "../c_config.js";
import c_modules from "../c_modules.js";
import c_data from "../data/c_data.js";
import c_data_item from "../data/c_data_item.js";
import c_dom_right_setting from "./c_dom_right_setting.js";

/**
 * 右边栏
 */
class _c_dom_right extends c_modules.react.Component {
    render () {
        return c_modules.react.createElement (
            c_modules.antd.Col,
            {
                flex: "auto",
                style: {
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    padding: c_config.SPACING,
                    paddingLeft: "0"
                }
            },

            c_modules.react.createElement (
                c_dom_right_setting,
                {

                }
            )
        );
    }
}

exports.c_dom_right = _c_dom_right;
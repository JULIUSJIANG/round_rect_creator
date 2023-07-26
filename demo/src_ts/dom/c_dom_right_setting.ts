import c_modules from "../c_modules.js";
import c_config from "../c_config.js";
import c_index_client from "../c_index_client.js";
import c_dom_right_setting_radius_padding from "./c_dom_right_setting_radius_padding.js";
import c_dom_right_type from "./c_dom_right_setting_type.js";

class c_dom_right_setting extends c_modules.react.Component {

    render () {
        let current_record = c_index_client.f_get_current_record ();
        if (current_record == null) {
            return null
        };

        return c_modules.react.createElement (
            c_modules.antd.Space,
            {
                direction: "vertical",
                style: {
                    padding: c_config.SPACING,
                    border: c_config.BLOCK_BORDER,
                    backgroundColor: c_config.BLOCK_BG_COLOR
                }
            },

            
            c_modules.react.createElement (
                c_dom_right_setting_radius_padding,
                {

                }
            ),
            c_modules.react.createElement (
                c_dom_right_type,
                {

                }
            ),
            c_modules.react.createElement (
                c_dom_right_type,
                {

                }
            )
        );
    }
}

export default c_dom_right_setting;
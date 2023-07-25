import c_modules from "../c_modules.js";
import c_data from "../data/c_data.js";
import c_data_item from "../data/c_data_item.js";
import c_render from "../c_render.js"
import c_config from "../c_config.js";
import c_input_machine from "../util/c_input_machine.js";
import c_index_client from "../c_index_client.js";

class _c_dom_right_setting extends c_modules.react.Component {

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
                    border: c_config.BLOCK_BORDER
                }
            },

            
            c_modules.react.createElement (
                c_modules.antd.Row,
                {
                    gutter: [
                        c_config.SPACING_NUMBER,
                        0
                    ]
                },

                c_modules.react.createElement (
                    c_modules.antd.Col,
                    {
                        span: 6
                    },

                    c_modules.react.createElement (
                        c_modules.antd.Input,
                        {
                            addonBefore: "样式昵称",
                            onChange: (com) => {

                            }
                        }
                    )
                ),
                c_modules.react.createElement (
                    c_modules.antd.Col,
                    {
                        span: 6
                    },

                    c_modules.react.createElement (
                        c_modules.antd.Input,
                        {
                            addonBefore: "样式昵称",
                            onChange: (com) => {

                            }
                        }
                    )
                ),
                c_modules.react.createElement (
                    c_modules.antd.Col,
                    {
                        span: 6
                    },

                    c_modules.react.createElement (
                        c_modules.antd.Input,
                        {
                            addonBefore: "样式昵称",
                            onChange: (com) => {

                            }
                        }
                    )
                ),
                c_modules.react.createElement (
                    c_modules.antd.Col,
                    {
                        span: 6
                    },

                    c_modules.react.createElement (
                        c_modules.antd.Input,
                        {
                            addonBefore: "样式昵称",
                            onChange: (com) => {

                            }
                        }
                    )
                )
            )
        );
    }
}

exports.c_dom_right_setting = _c_dom_right_setting;
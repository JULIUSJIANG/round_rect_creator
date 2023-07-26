import c_modules from "../c_modules.js";
import c_config from "../c_config.js";
import c_index_client from "../c_index_client.js";

class c_dom_right_setting_radius_padding extends c_modules.react.Component {

    render () {
        let current_record = c_index_client.f_get_current_record ();
        if (current_record == null) {
            return null
        };

        return c_modules.react.createElement (
            "div",
            {
                style: {
                    padding: c_config.SPACING_HALF,
                    border: c_config.BLOCK_BORDER,
                    backgroundColor: c_config.BLOCK_BG_COLOR
                }
            },

            c_modules.react.createElement (
                "div",
                {
                    style: {
                        display: "flex",
                    }
                },
    
                c_modules.react.createElement (
                    c_modules.antd.Input,
                    {
                        addonBefore: "左上半径",
                        onChange: (com) => {
    
                        },
                        style: {
                            flex: "auto",
                            flexGrow: 1,
                            padding: c_config.SPACING_HALF
                        }
                    }
                ),
                c_modules.react.createElement (
                    c_modules.antd.Input,
                    {
                        addonBefore: "上内边距",
                        onChange: (com) => {
    
                        },
                        style: {
                            flex: "auto",
                            flexGrow: 1,
                            padding: c_config.SPACING_HALF
                        }
                    }
                ),
                c_modules.react.createElement (
                    c_modules.antd.Input,
                    {
                        addonBefore: "右上半径",
                        onChange: (com) => {
    
                        },
                        style: {
                            flex: "auto",
                            flexGrow: 1,
                            padding: c_config.SPACING_HALF
                        }
                    }
                )
            ),
            c_modules.react.createElement (
                "div",
                {
                    style: {
                        display: "flex"
                    }
                },
    
                c_modules.react.createElement (
                    c_modules.antd.Input,
                    {
                        addonBefore: "左内边距",
                        onChange: (com) => {
    
                        },
                        style: {
                            flex: "auto",
                            flexGrow: 1,
                            padding: c_config.SPACING_HALF
                        }
                    }
                ),
                c_modules.react.createElement (
                    "div",
                    {
                        style: {
                            width: "100%",
                            flex: "auto",
                            flexGrow: 1,
                            padding: c_config.SPACING_HALF
                        }
                    }
                ),
                c_modules.react.createElement (
                    c_modules.antd.Input,
                    {
                        addonBefore: "右内边距",
                        onChange: (com) => {
    
                        },
                        style: {
                            flex: "auto",
                            flexGrow: 1,
                            padding: c_config.SPACING_HALF
                        }
                    }
                )
            ),
            c_modules.react.createElement (
                "div",
                {
                    style: {
                        display: "flex"
                    }
                },
    
                c_modules.react.createElement (
                    c_modules.antd.Input,
                    {
                        addonBefore: "左下半径",
                        onChange: (com) => {
    
                        },
                        style: {
                            flex: "auto",
                            flexGrow: 1,
                            padding: c_config.SPACING_HALF
                        }
                    }
                ),
                c_modules.react.createElement (
                    c_modules.antd.Input,
                    {
                        addonBefore: "下内边距",
                        onChange: (com) => {
    
                        },
                        style: {
                            flex: "auto",
                            flexGrow: 1,
                            padding: c_config.SPACING_HALF
                        }
                    }
                ),
                c_modules.react.createElement (
                    c_modules.antd.Input,
                    {
                        addonBefore: "右下半径",
                        onChange: (com) => {
    
                        },
                        style: {
                            flex: "auto",
                            flexGrow: 1,
                            padding: c_config.SPACING_HALF
                        }
                    }
                )
            )
        )
    }
}

export default c_dom_right_setting_radius_padding;
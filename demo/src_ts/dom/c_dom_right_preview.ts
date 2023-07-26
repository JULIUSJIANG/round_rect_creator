import c_config from "../c_config.js";
import c_modules from "../c_modules.js";

/**
 * 右边图片预览
 */
class c_dom_right_preview extends c_modules.react.Component {

    render () {
        return c_modules.react.createElement (
            "div",
            {
                style: {
                    flex: "anto",
                    height: "100%",
                    flexDirection: "Column",
                    overflow: "auto",
                    backgroundColor: c_config.BLOCK_BG_COLOR
                }
            },

            c_modules.react.createElement (
                "canvas",
                {
                    style: {
                        width: 2000,
                        height: 2000,
                        backgroundColor: "black"
                    }
                }
            )
        )
    }
}

export default c_dom_right_preview;
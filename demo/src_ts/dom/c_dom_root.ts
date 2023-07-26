import c_config from "../c_config.js";
import c_modules from "../c_modules.js";
import c_dom_left from "./c_dom_left.js";
import c_dom_right from "./c_dom_right.js";

/**
 * 根
 */
class c_dom_root extends c_modules.react.Component {

    constructor (...args) {
        super (...args);
    }

    /**
     * 组件被挂载
     */
    componentDidMount () {

    }

    /**
     * 组件更新完成
     */
    componentDidUpdate () {

    }

    /**
     * 组件要被卸载
     */
    componentWillUnmount () {

    }

    render () {
        return c_modules.react.createElement (
            c_modules.antd.Row, 
            {
                style: {
                    height: `100%`
                },
                gutter: [
                    0,
                    0
                ]
            },

            c_modules.react.createElement (
                "div",
                {
                    height: "100%",
                    style: {
                        paddingLeft: c_config.SPACING
                    }
                }
            ),
            c_modules.react.createElement (
                c_dom_left,
                {

                }
            ),
            c_modules.react.createElement (
                "div",
                {
                    height: "100%",
                    style: {
                        paddingLeft: c_config.SPACING
                    }
                }
            ),
            c_modules.react.createElement (
                c_dom_right,
                {

                }
            ),
            c_modules.react.createElement (
                "div",
                {
                    height: "100%",
                    style: {
                        paddingleft: c_config.SPACING
                    }
                }
            ),
        );
    }
}

export default c_dom_root;
/*
<Radio.Group onChange={onChange} defaultValue="a">
  <Radio.Button value="a">Hangzhou</Radio.Button>
  <Radio.Button value="b">Shanghai</Radio.Button>
  <Radio.Button value="c">Beijing</Radio.Button>
  <Radio.Button value="d">Chengdu</Radio.Button>
</Radio.Group>
*/
import c_modules from "../c_modules.js";
import c_config from "../c_config.js";
class c_dom_right_setting_type extends c_modules.react.Component {
    render() {
        return c_modules.react.createElement("div", {
            style: {
                padding: c_config.SPACING_HALF,
                border: c_config.BLOCK_BORDER,
                backgroundColor: c_config.BLOCK_BG_COLOR,
                display: "flex",
            }
        }, c_modules.react.createElement(c_modules.antd.Button, {
            onClick: () => {
            },
            style: {
                flex: "auto",
                flexGrow: 1,
                width: "100%",
                margin: c_config.SPACING_HALF
            }
        }, "纯色"), c_modules.react.createElement(c_modules.antd.Button, {
            onClick: (com) => {
            },
            style: {
                flex: "auto",
                flexGrow: 1,
                width: "100%",
                margin: c_config.SPACING_HALF
            }
        }, "描线"), c_modules.react.createElement(c_modules.antd.Button, {
            onClick: (com) => {
            },
            style: {
                flex: "auto",
                flexGrow: 1,
                width: "100%",
                margin: c_config.SPACING_HALF
            }
        }, "阴影"), c_modules.react.createElement(c_modules.antd.Button, {
            onClick: (com) => {
            },
            style: {
                flex: "auto",
                flexGrow: 1,
                width: "100%",
                margin: c_config.SPACING_HALF
            }
        }, "模糊"));
    }
}
export default c_dom_right_setting_type;

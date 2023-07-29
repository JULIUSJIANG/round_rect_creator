import NodeModules from "../NodeModules.js";
import DomLeft from "./DomLeft.js";
import DomRight from "./DomRight.js";
import DomDefine from "./DomDefine.js";
/**
 * 根
 */
class DomRoot extends NodeModules.react.Component {
    constructor(...args) {
        super(...args);
        /**
         * 实体的引用
         */
        this.inputRef = NodeModules.react.createRef();
    }
    /**
     * 组件被挂载
     */
    componentDidMount() {
        this.tagInput = this.inputRef.current;
        this.tagInput.focus();
    }
    /**
     * 组件更新完成
     */
    componentDidUpdate() {
    }
    /**
     * 组件要被卸载
     */
    componentWillUnmount() {
    }
    render() {
        // 把容器转为 flex 排版
        return NodeModules.react.createElement(DomDefine.TAG_DIV, {
            style: {
                [DomDefine.STYLE_WIDTH]: DomDefine.STYLE_WIDTH_PERCENTAGE_100,
                [DomDefine.STYLE_HEIGHT]: DomDefine.STYLE_HEIGHT_PERCENTAGE_100,
                [DomDefine.STYLE_DISPLAY]: DomDefine.STYLE_DISPLAY_FLEX,
                [DomDefine.STYLE_FLEX_DIRECTION]: DomDefine.STYLE_FLEX_DIRECTION_COLUMN
            }
        }, 
        // 有了这个文本输入框先获得输入焦点，其他文本输入框就正常了
        NodeModules.react.createElement(DomDefine.TAG_INPUT, {
            ref: this.inputRef,
            style: {
                width: 0,
                height: 0,
                padding: 0,
                border: 0,
                margin: 0,
            }
        }), 
        // 最外层背景
        NodeModules.react.createElement(DomDefine.TAG_DIV, {
            style: {
                [DomDefine.STYLE_HEIGHT]: DomDefine.STYLE_HEIGHT_PERCENTAGE_0,
                [DomDefine.STYLE_FLEX_GROW]: 1,
                [DomDefine.STYLE_MARGIN]: DomDefine.CONFIG_TXT_SPACING,
                [DomDefine.STYLE_PADDING]: DomDefine.CONFIG_TXT_HALF_SPACING,
                [DomDefine.STYLE_BACKGROUND_COLOR]: DomDefine.CONFIG_TXT_BG_COLOR,
                [DomDefine.STYLE_DISPLAY]: DomDefine.STYLE_DISPLAY_FLEX
            }
        }, NodeModules.react.createElement(DomLeft), NodeModules.react.createElement(DomRight)));
    }
}
export default DomRoot;

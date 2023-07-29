import NodeModules from "../NodeModules.js";
import DomDefine from "./DomDefine.js";

/**
 * 文本输入框
 * （直接用 input 回传值然后刷新的话，一大堆问题）
 */
class DomTextInput extends NodeModules.react.Component {

    /**
     * 实体的引用
     */
    inputRef = NodeModules.react.createRef();

    /**
     * 智能提示中
     */
    isOnComposition = false;

    componentDidMount () {
        this.setInputValue();
        this.inputRef.current.onkeydown = this.onKeyDown;
    }

    componentDidUpdate () {
        this.setInputValue();
    }

    setInputValue = () => {
        let val = this.props.value || '';
        this.inputRef.current.value = val;
    };

    handleComposition = evt => {
        if (evt.type === 'compositionend') {
            this.isOnComposition = false;
            if (navigator.userAgent.indexOf('Chrome') > -1) {
                this.onChange(evt);
            };
            return;
        };

        this.isOnComposition = true;
    };

    onChange = evt => {
        if (!this.isOnComposition) {
            this.props.onChange(evt.target.value);
        };
    };

    render() {
        const commonProps = {
            onCompositionStart: this.handleComposition,
            onCompositionUpdate: this.handleComposition,
            onCompositionEnd: this.handleComposition,

            onChange: this.onChange,
        };
        return NodeModules.react.createElement (
            DomDefine.TAG_INPUT,
            {
                className: "ant-input css-dev-only-do-not-override-1jr9qlj",
                ref: this.inputRef,
                type: "text",
                ...commonProps,
                style: {
                    ...this.props.style
                }
            }
        );
    }
}

export default DomTextInput;
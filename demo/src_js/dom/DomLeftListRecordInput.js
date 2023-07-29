import NodeModules from "../NodeModules.js";
/**
 * 左边栏 - 存档列表 - 输入框
 */
export default class DomLeftListRecordInput extends NodeModules.react.Component {
    constructor() {
        super(...arguments);
        this.inputRef = NodeModules.react.createRef();
        this.isOnComposition = false;
        this.setInputValue = () => {
            let val = this.props.value || '';
            this.inputRef.current.value = val;
        };
        this.handleComposition = evt => {
            if (evt.type === 'compositionend') {
                this.isOnComposition = false;
                if (navigator.userAgent.indexOf('Chrome') > -1) {
                    this.onChange(evt);
                }
                ;
                return;
            }
            ;
            this.isOnComposition = true;
        };
        this.onChange = evt => {
            if (!this.isOnComposition) {
                this.props.onChange(evt.target.value);
            }
            ;
        };
    }
    componentDidMount() {
        this.setInputValue();
    }
    componentDidUpdate() {
        this.setInputValue();
    }
    render() {
        const commonProps = {
            onChange: this.onChange,
            onCompositionStart: this.handleComposition,
            onCompositionUpdate: this.handleComposition,
            onCompositionEnd: this.handleComposition,
        };
        return NodeModules.react.createElement("input", {
            className: "ant-input css-dev-only-do-not-override-1jr9qlj",
            ref: this.inputRef,
            type: "text",
            ...commonProps,
            style: {
                ...this.props.style
            }
        });
    }
}

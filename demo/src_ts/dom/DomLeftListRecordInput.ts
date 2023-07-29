import NodeModules from "../NodeModules.js";

/**
 * 左边栏 - 存档列表 - 输入框
 */
export default class DomLeftListRecordInput extends NodeModules.react.Component {

    inputRef = NodeModules.react.createRef();

    isOnComposition = false;
    
    componentDidMount() {
        this.setInputValue();
    }

    componentDidUpdate() {
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
            onChange: this.onChange,
            onCompositionStart: this.handleComposition,
            onCompositionUpdate: this.handleComposition,
            onCompositionEnd: this.handleComposition,
        };
        return NodeModules.react.createElement (
            "input",
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
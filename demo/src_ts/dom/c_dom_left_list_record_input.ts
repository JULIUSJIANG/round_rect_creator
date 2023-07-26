import c_modules from "../c_modules.js";

/**
 * 通用的输入框，解决中文输入的问题
 */
export default class c_dom_left_list_record_input extends c_modules.react.Component {

    inputRef = c_modules.react.createRef();

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
        return c_modules.react.createElement (
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
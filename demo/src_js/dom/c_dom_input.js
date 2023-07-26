import c_modules from "../c_modules.js";
/**
 * 通用的输入框，解决中文输入的问题
 */
export default class c_dom_input extends c_modules.react.Component {
    constructor() {
        super(...arguments);
        this.inputRef = c_modules.react.createRef();
        this.isOnComposition = false;
        this.setInputValue = () => {
            this.inputRef.current.value = this.props.value || '';
        };
        this.handleComposition = evt => {
            console.log(`handleComposition`, evt.type);
            if (evt.type === 'compositionend') {
                this.isOnComposition = false;
                if (navigator.userAgent.indexOf('Chrome') > -1) {
                    this.onChange(evt);
                }
                return;
            }
            ;
            this.isOnComposition = true;
        };
        this.onChange = evt => {
            console.log(`onChange`);
            if (!this.isOnComposition) {
                this.props.onChange(evt.target.value);
            }
            ;
        };
    }
    componentDidMount() {
        console.log(`componentDidMount`);
        this.setInputValue();
    }
    componentDidUpdate() {
        console.log(`componentDidUpdate`);
        this.setInputValue();
    }
    render() {
        const commonProps = {
            onChange: this.onChange,
            onCompositionStart: this.handleComposition,
            onCompositionUpdate: this.handleComposition,
            onCompositionEnd: this.handleComposition,
        };
        return c_modules.react.createElement("input", {
            ref: this.inputRef,
            type: "text",
            ...commonProps
        });
    }
}

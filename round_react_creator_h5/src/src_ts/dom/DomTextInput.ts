import NodeModules from "../NodeModules";
import DomDefine from "./DomDefine";
import DomTextInputStatus from "./DomTextInputStatus";
import DomTextInputStatusIdle from "./DomTextInputStatusIdle";
import DomTextInputStatusEditing from "./DomTextInputStatusEditing";

/**
 * 文本输入框
 * （直接用 input 回传值然后刷新的话，一大堆问题）
 */
class DomTextInput extends NodeModules.react.Component {

    constructor (props) {
        super (props);

        this.statusIdle = new DomTextInputStatusIdle (this);
        this.statusEditing = new DomTextInputStatusEditing (this);
        this.enterStatus (this.statusIdle);
    }

    /**
     * 状态 - 待机
     */
    statusIdle: DomTextInputStatusIdle;
    /**
     * 状态 - 中文智能提示中
     */
    statusEditing: DomTextInputStatusEditing;

    /**
     * 当前状态
     */
    currStatus: DomTextInputStatus;
    /**
     * 进入状态
     * @param status 
     */
    enterStatus (status: DomTextInputStatus) {
        let rec = this.currStatus;
        this.currStatus = status;
        if (rec) {
            rec.onExit ();
        };
        this.currStatus.onEnter ();
    }

    /**
     * 实体的引用
     */
    inputRef = NodeModules.react.createRef();

    componentDidMount () {
        this.componentDidUpdate ();
    }

    componentDidUpdate () {
        this.currStatus.onDidUpdate ();
    }

    render() {
        const commonProps = {
            onChange: () => {
                this.currStatus.onChange ();
            },

            onCompositionStart: () => {
                this.currStatus.onCompositionStart ();
            },
            onCompositionUpdate: () => {
                this.currStatus.onCompositionUpdate ();
            },
            onCompositionEnd: () => {
                this.currStatus.onCompositionEnd ();
            },
        };
        return NodeModules.react.createElement (
            DomDefine.TAG_INPUT,
            {
                className: "ant-input-number-input",
                ref: this.inputRef,
                type: "text",
                ...commonProps,
                style: {
                    [DomDefine.STYLE_PADDING_LEFT]: DomDefine.CONFIG_TXT_SPACING,
                    ...(this.props["style"] as any)
                }
            }
        );
    }
}

export default DomTextInput;
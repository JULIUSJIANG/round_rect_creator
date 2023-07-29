import DomTextInputStatus from "./DomTextInputStatus.js";

/**
 * 文本输入框 - 状态 - 待机
 */
class DomTextInputStatusIdle extends DomTextInputStatus {
    /**
     * 这里被触发，只有 2 个理由
     * 1. 英文符号输入
     * 2. 中文输入完毕
     * @param val 
     */
    onChange (): void {
        // 派发 onChange 事件
        this.relMachine.props.onChange (this.relMachine.inputRef.current.value);
    }

    onDidUpdate(): void {
        // 及时把外部的 value 同步到 input
        this.relMachine.inputRef.current.value = this.relMachine.props.value || '';
    }

    onCompositionStart(): void {
        // 转移状态到 “智能提示中”
        this.relMachine.enterStatus (this.relMachine.statusEditing);
    }
}

export default DomTextInputStatusIdle;
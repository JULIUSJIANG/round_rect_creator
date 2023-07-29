/**
 * 文本输入框 - 状态
 */
class DomTextInputStatus {
    constructor(domTextInput) {
        this.relMachine = domTextInput;
    }
    /**
     * 事件派发 - 进入状态
     */
    onEnter() {
    }
    /**
     * 事件派发 - 离开状态
     */
    onExit() {
    }
    /**
     * 值发生变化
     */
    onChange() {
    }
    /**
     * 画面需要刷新的时候
     */
    onDidUpdate() {
    }
    /**
     * 事件派发 - 智能提示开始
     */
    onCompositionStart() {
    }
    /**
     * 事件派发 - 智能提示更新
     */
    onCompositionUpdate() {
    }
    /**
     * 事件派发 - 智能提示结束
     */
    onCompositionEnd() {
    }
}
export default DomTextInputStatus;

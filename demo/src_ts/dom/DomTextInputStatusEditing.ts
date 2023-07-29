import DomTextInputStatus from "./DomTextInputStatus.js";

/**
 * 文本输入框 - 状态 - 中文智能提示中
 * （此状态纯粹等待返回待机状态，此外不引起任何变化，也不接受任何变化）
 */
class DomTextInputStatusEditing extends DomTextInputStatus {

    onCompositionEnd (): void {
        // 回到待机状态
        this.relMachine.enterStatus (this.relMachine.statusIdle);

        // 谷歌浏览器下，onCompositionEnd 在 onChange 后，手动补一次 onChange
        if (navigator.userAgent.indexOf('Chrome') > -1) {
            this.relMachine.currStatus.onChange ();
        };
    }
}

export default DomTextInputStatusEditing;
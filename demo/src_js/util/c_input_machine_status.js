/**
 * 中文输入处理 - 状态
 */
class c_input_machine_status {
    constructor(p_rel_machine) {
        this.p_rel_machine = p_rel_machine;
    }
    /**
     * 事件派发 - 进入状态
     */
    f_on_enter() {
    }
    /**
     * 事件派发 - 离开状态
     */
    f_on_exit() {
    }
    /**
     * 事件派发 - 中文编辑开始
     */
    f_on_composition_start() {
    }
    /**
     * 事件派发 - 中文编辑更新
     */
    f_on_composition_update() {
    }
    /**
     * 事件派发 - 编辑值变化
     */
    f_on_change() {
    }
    /**
     * 是否该刷新值
     * @returns
     */
    f_is_refresh_able() {
        return true;
    }
}
export default c_input_machine_status;

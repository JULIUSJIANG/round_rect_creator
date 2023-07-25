import c_input_machine_status from "./c_input_machine_status.js";
/**
 * 中文输入处理 - 状态 - 刷新
 */
class c_input_machine_status_update extends c_input_machine_status {
    f_on_change() {
        this.p_rel_machine.f_enter(this.p_rel_machine.p_status_idle);
    }
    f_is_refresh_able() {
        return false;
    }
}
export default c_input_machine_status_update;

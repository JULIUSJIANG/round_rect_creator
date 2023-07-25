import c_input_machine_status from "./c_input_machine_status.js";
/**
 * 中文输入处理 - 状态 - 开始
 */
class c_input_machine_status_start extends c_input_machine_status {
    f_on_composition_update() {
        this.p_rel_machine.f_enter(this.p_rel_machine.p_status_update);
    }
    f_is_refresh_able() {
        return false;
    }
}
export default c_input_machine_status_start;

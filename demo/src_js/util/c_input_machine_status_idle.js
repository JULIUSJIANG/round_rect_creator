import c_input_machine_status from "./c_input_machine_status.js";
/**
 * 中文输入处理 - 状态 - 待机
 */
class c_input_machine_status_idle extends c_input_machine_status {
    f_on_composition_start() {
        this.p_rel_machine.f_enter(this.p_rel_machine.p_status_start);
    }
}
export default c_input_machine_status_idle;

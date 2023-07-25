import c_input_machine_status_idle from "./c_input_machine_status_idle.js";
import c_input_machine_status_start from "./c_input_machine_status_start.js";
import c_input_machine_status_update from "./c_input_machine_status_update.js";
/**
 * 中文输入处理
 */
class c_input_machine {
    constructor() {
        this.p_status_idle = new c_input_machine_status_idle(this);
        this.p_status_start = new c_input_machine_status_start(this);
        this.p_status_update = new c_input_machine_status_update(this);
        this.f_enter(this.p_status_idle);
    }
    /**
     * 进入状态
     * @param status
     */
    f_enter(status) {
        let rec = this.p_curr_status;
        this.p_curr_status = status;
        if (rec) {
            rec.f_on_exit();
        }
        ;
        this.p_curr_status.f_on_enter();
    }
}
(function (c_input_machine) {
    /**
     * 全局实例
     */
    c_input_machine.inst = new c_input_machine();
})(c_input_machine || (c_input_machine = {}));
export default c_input_machine;

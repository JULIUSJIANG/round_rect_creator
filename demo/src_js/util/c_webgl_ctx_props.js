/**
 * webgl 属性
 */
class c_webgl_ctx_props {
    constructor(name, origin, type) {
        this.name = name;
        this.origin = origin;
        this.type = type;
    }
    /**
     * 获取参数定义
     */
    f_get_txt_define() {
        return `${this.origin.name} ${this.type.name} ${this.name};`;
    }
    /**
     * 初始化
     */
    f_init(webgl_ctx, program) {
        this.webgl_ctx = webgl_ctx;
        this.program = program;
        this.origin.f_init(this);
    }
    /**
     * 填充数据
     */
    f_fill(i_t) {
        this.origin.f_fill(this, i_t);
    }
}
export default c_webgl_ctx_props;

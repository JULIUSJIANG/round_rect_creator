import c_webgl_rs_origin from "./c_webgl_rs_origin";
import c_webgl_rs_type from "./c_webgl_rs_type";

/**
 * webgl 属性
 */
class c_webgl_ctx_props <c_t> {
    /**
     * 服务的上下文
     */
    webgl_ctx: WebGLRenderingContext;
    /**
     * 服务的程序
     */
    program: WebGLProgram

    /**
     * 名称
     */
    name: string;
    /**
     * 数据源
     */
    origin: c_webgl_rs_origin;
    /**
     * 数据类型
     */
    type: c_webgl_rs_type <c_t>;

    constructor (
        name: string,
        origin: c_webgl_rs_origin,
        type: c_webgl_rs_type <c_t>
    )
    {
        this.name = name;
        this.origin = origin;
        this.type = type;
    }

    /**
     * 获取参数定义
     */
    f_get_txt_define () {
        return `${this.origin.name} ${this.type.name} ${this.name};`;
    }

    t_uniform_cache: WebGLUniformLocation;

    /**
     * 初始化
     */
    f_init (webgl_ctx: WebGLRenderingContext, program: WebGLProgram) {
        this.webgl_ctx = webgl_ctx;
        this.program = program;
        this.origin.f_init (this);
    }

    /**
     * 填充数据
     */
    f_fill (i_t: c_t) {
        this.origin.f_fill (this, i_t);
    }
}

export default c_webgl_ctx_props;
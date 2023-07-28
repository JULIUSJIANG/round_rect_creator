/**
 * 着色器属性类型
 */
class c_webgl_rs_type {
    constructor(args) {
        this.name = args.name;
        this.f_uniform_fill = args.f_uniform_fill;
    }
}
(function (c_webgl_rs_type) {
    /**
     * 浮点数
     */
    c_webgl_rs_type.t_float = new c_webgl_rs_type({
        name: `float`,
        f_uniform_fill: (ctx, i_t) => {
            ctx.webgl_ctx.uniform1f(ctx.t_uniform_cache, i_t);
        }
    });
    /**
     * 2 维向量
     */
    c_webgl_rs_type.t_vec2 = new c_webgl_rs_type({
        name: `vec2`,
        f_uniform_fill: (ctx, i_t) => {
            ctx.webgl_ctx.uniform2f(ctx.t_uniform_cache, i_t[0], i_t[1]);
        }
    });
    /**
     * 4 维向量
     */
    c_webgl_rs_type.t_vec4 = new c_webgl_rs_type({
        name: `vec4`,
        f_uniform_fill: (ctx, i_t) => {
            ctx.webgl_ctx.uniform4f(ctx.t_uniform_cache, i_t[0], i_t[1], i_t[2], i_t[3]);
        }
    });
    /**
     * 2d 贴图
     */
    c_webgl_rs_type.t_2d = new c_webgl_rs_type({
        name: `sampler2D`,
        f_uniform_fill: (ctx, i_t) => {
            ctx.webgl_ctx.uniform1i(ctx.t_uniform_cache, i_t);
        },
    });
})(c_webgl_rs_type || (c_webgl_rs_type = {}));
export default c_webgl_rs_type;

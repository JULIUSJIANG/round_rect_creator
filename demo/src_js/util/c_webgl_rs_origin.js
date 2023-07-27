/**
 * 数据源
 */
class c_webgl_rs_origin {
    constructor(args) {
        this.name = args.name;
        this.f_init = args.f_init;
        this.f_fill = args.f_fill;
    }
}
(function (c_webgl_rs_origin) {
    /**
     * 顶点数据
     */
    c_webgl_rs_origin.t_attribute = new c_webgl_rs_origin({
        name: `attribute`,
        f_init: (ctx) => {
        },
        f_fill: (ctx, i_t) => {
        }
    });
    /**
     * 插值数据
     */
    c_webgl_rs_origin.t_varying = new c_webgl_rs_origin({
        name: `varying`,
        f_init: (ctx) => {
        },
        f_fill: (ctx, i_t) => {
        }
    });
    /**
     * 公共数据
     */
    c_webgl_rs_origin.t_uniform = new c_webgl_rs_origin({
        name: `uniform`,
        f_init: (ctx) => {
            ctx.t_uniform_cache = ctx.webgl_ctx.getUniformLocation(ctx.program, ctx.name);
        },
        f_fill: (ctx, i_t) => {
            ctx.type.f_uniform_fill(ctx, i_t);
        }
    });
})(c_webgl_rs_origin || (c_webgl_rs_origin = {}));
export default c_webgl_rs_origin;

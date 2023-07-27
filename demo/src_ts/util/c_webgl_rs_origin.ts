import c_webgl_ctx_props from "./c_webgl_ctx_props";

/**
 * 数据源
 */
class c_webgl_rs_origin {
    /**
     * 名称
     */
    name: string;

    /**
     * 初始化
     */
    f_init: (ctx: c_webgl_ctx_props <unknown>) => void;

    /**
     * 填充
     */
    f_fill: (ctx: c_webgl_ctx_props <unknown>, i_t: unknown) => void;

    constructor (args: {
        name: string,
        f_init: (ctx: c_webgl_ctx_props <unknown>) => void,
        f_fill: (ctx: c_webgl_ctx_props <unknown>, i_t: unknown) => void
    })
    {
        this.name = args.name;
        this.f_init = args.f_init;
        this.f_fill = args.f_fill;
    }
}

namespace c_webgl_rs_origin {
    /**
     * 顶点数据
     */
    export const t_attribute = new c_webgl_rs_origin ({
        name: `attribute`,
        f_init: (ctx) => {

        },
        f_fill: (ctx, i_t) => {

        }
    });
    /**
     * 插值数据
     */
    export const t_varying = new c_webgl_rs_origin ({
        name: `varying`,
        f_init: (ctx) => {

        },
        f_fill: (ctx, i_t) => {
            
        }
    });
    /**
     * 公共数据
     */
    export const t_uniform = new c_webgl_rs_origin ({
        name: `uniform`,
        f_init: (ctx) => {
            ctx.t_uniform_cache = ctx.webgl_ctx.getUniformLocation (ctx.program, ctx.name);
        },
        f_fill: (ctx, i_t) => {
            ctx.type.f_uniform_fill (ctx, i_t);
        }
    });
}

export default c_webgl_rs_origin;
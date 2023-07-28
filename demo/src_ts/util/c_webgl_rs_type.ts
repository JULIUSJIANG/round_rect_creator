import c_webgl_ctx_props from "./c_webgl_ctx_props";

/**
 * 着色器属性类型
 */
class c_webgl_rs_type<c_t> {
    /**
     * 名称
     */
    name: string;

    /**
     * 作为 uniform 填充进去
     */
    f_uniform_fill: (ctx: c_webgl_ctx_props <c_t>, i_t: c_t) => void

    constructor (args: {
        name: string,
        f_uniform_fill: (ctx: c_webgl_ctx_props <c_t>, i_t: c_t) => void
    })
    {
        this.name = args.name;
        this.f_uniform_fill = args.f_uniform_fill;
    }
}

namespace c_webgl_rs_type {
    /**
     * 浮点数
     */
    export const t_float = new c_webgl_rs_type <number> ({
        name: `float`,
        f_uniform_fill: (ctx, i_t) => {
            ctx.webgl_ctx.uniform1f (ctx.t_uniform_cache, i_t);
        }
    });
    /**
     * 2 维向量
     */
    export const t_vec2 = new c_webgl_rs_type <Array <number>> ({
        name: `vec2`,
        f_uniform_fill: (ctx, i_t) => {
            ctx.webgl_ctx.uniform2f (ctx.t_uniform_cache, i_t [0], i_t [1]);
        }
    });
    /**
     * 4 维向量
     */
    export const t_vec4 = new c_webgl_rs_type <Array <number>> ({
        name: `vec4`,
        f_uniform_fill: (ctx, i_t) => {
            ctx.webgl_ctx.uniform4f (ctx.t_uniform_cache, i_t [0], i_t [1], i_t [2], i_t [3]);
        }
    });
    /**
     * 2d 贴图
     */
    export const t_2d = new c_webgl_rs_type <number> ({
        name: `sampler2D`,
        f_uniform_fill: (ctx, i_t) => {
            ctx.webgl_ctx.uniform1i (ctx.t_uniform_cache, i_t);
        },
    })
}

export default c_webgl_rs_type;
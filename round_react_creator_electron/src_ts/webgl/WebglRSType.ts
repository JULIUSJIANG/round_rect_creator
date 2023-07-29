import WebglCtxProps from "./WebglCtxProps";

/**
 * 着色程序属性数据类型
 */
class WebglRSType <T> {
    /**
     * 名称
     */
    name: string;

    /**
     * 作为 uniform 填充进去
     */
    uniformFill: (ctx: WebglCtxProps <T>, t: T) => void

    constructor (args: {
        name: string,
        uniformFill: (ctx: WebglCtxProps <T>, t: T) => void
    })
    {
        this.name = args.name;
        this.uniformFill = args.uniformFill;
    }
}

namespace WebglRSType {
    /**
     * 浮点数
     */
    export const FLOAT = new WebglRSType <number> ({
        name: `float`,
        uniformFill: (ctx, t) => {
            ctx.webglCtx.uniform1f (ctx.uniformCache, t);
        }
    });
    /**
     * 2 维向量
     */
    export const VEC2 = new WebglRSType <Array <number>> ({
        name: `vec2`,
        uniformFill: (ctx, t) => {
            ctx.webglCtx.uniform2f (ctx.uniformCache, t [0], t [1]);
        }
    });
    /**
     * 4 维向量
     */
    export const VEC4 = new WebglRSType <Array <number>> ({
        name: `vec4`,
        uniformFill: (ctx, t) => {
            ctx.webglCtx.uniform4f (ctx.uniformCache, t [0], t [1], t [2], t [3]);
        }
    });
    /**
     * 2d 贴图
     */
    export const SAMPLER2D = new WebglRSType <number> ({
        name: `sampler2D`,
        uniformFill: (ctx, t) => {
            ctx.webglCtx.uniform1i (ctx.uniformCache, t);
        },
    })
}

export default WebglRSType;
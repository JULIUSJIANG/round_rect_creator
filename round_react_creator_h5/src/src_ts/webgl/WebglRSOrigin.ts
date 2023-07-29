import WebglCtxProps from "./WebglCtxProps";

/**
 * 着色程序属性数据源
 */
class WebglRSOrigin {
    /**
     * 名称
     */
    name: string;

    /**
     * 初始化
     */
    init: (ctx: WebglCtxProps <unknown>) => void;

    /**
     * 填充
     */
    fill: (ctx: WebglCtxProps <unknown>, t: unknown) => void;

    constructor (args: {
        name: string,
        init: (ctx: WebglCtxProps <unknown>) => void,
        fill: (ctx: WebglCtxProps <unknown>, t: unknown) => void
    })
    {
        this.name = args.name;
        this.init = args.init;
        this.fill = args.fill;
    }
}

namespace WebglRSOrigin {
    /**
     * 顶点数据
     */
    export const ATTRIBUTE = new WebglRSOrigin ({
        name: `attribute`,
        init: (ctx) => {

        },
        fill: (ctx, t) => {

        }
    });
    /**
     * 插值数据
     */
    export const VARYING = new WebglRSOrigin ({
        name: `varying`,
        init: (ctx) => {

        },
        fill: (ctx, t) => {
            
        }
    });
    /**
     * 公共数据
     */
    export const UNIFORM = new WebglRSOrigin ({
        name: `uniform`,
        init: (ctx) => {
            ctx.uniformCache = ctx.webglCtx.getUniformLocation (ctx.program, ctx.name);
        },
        fill: (ctx, t) => {
            ctx.type.uniformFill (ctx, t);
        }
    });
}

export default WebglRSOrigin;
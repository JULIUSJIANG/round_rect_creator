/**
 * 着色程序属性数据源
 */
class WebglRSOrigin {
    constructor(args) {
        this.name = args.name;
        this.init = args.init;
        this.fill = args.fill;
    }
}
(function (WebglRSOrigin) {
    /**
     * 顶点数据
     */
    WebglRSOrigin.ATTRIBUTE = new WebglRSOrigin({
        name: `attribute`,
        init: (ctx) => {
        },
        fill: (ctx, t) => {
        }
    });
    /**
     * 插值数据
     */
    WebglRSOrigin.VARYING = new WebglRSOrigin({
        name: `varying`,
        init: (ctx) => {
        },
        fill: (ctx, t) => {
        }
    });
    /**
     * 公共数据
     */
    WebglRSOrigin.UNIFORM = new WebglRSOrigin({
        name: `uniform`,
        init: (ctx) => {
            ctx.uniformCache = ctx.webglCtx.getUniformLocation(ctx.program, ctx.name);
        },
        fill: (ctx, t) => {
            ctx.type.uniformFill(ctx, t);
        }
    });
})(WebglRSOrigin || (WebglRSOrigin = {}));
export default WebglRSOrigin;

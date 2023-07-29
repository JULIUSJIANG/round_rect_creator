/**
 * 着色程序属性数据类型
 */
class WebglRSType {
    constructor(args) {
        this.name = args.name;
        this.uniformFill = args.uniformFill;
    }
}
(function (WebglRSType) {
    /**
     * 浮点数
     */
    WebglRSType.FLOAT = new WebglRSType({
        name: `float`,
        uniformFill: (ctx, t) => {
            ctx.webglCtx.uniform1f(ctx.uniformCache, t);
        }
    });
    /**
     * 2 维向量
     */
    WebglRSType.VEC2 = new WebglRSType({
        name: `vec2`,
        uniformFill: (ctx, t) => {
            ctx.webglCtx.uniform2f(ctx.uniformCache, t[0], t[1]);
        }
    });
    /**
     * 4 维向量
     */
    WebglRSType.VEC4 = new WebglRSType({
        name: `vec4`,
        uniformFill: (ctx, t) => {
            ctx.webglCtx.uniform4f(ctx.uniformCache, t[0], t[1], t[2], t[3]);
        }
    });
    /**
     * 2d 贴图
     */
    WebglRSType.SAMPLER2D = new WebglRSType({
        name: `sampler2D`,
        uniformFill: (ctx, t) => {
            ctx.webglCtx.uniform1i(ctx.uniformCache, t);
        },
    });
})(WebglRSType || (WebglRSType = {}));
export default WebglRSType;

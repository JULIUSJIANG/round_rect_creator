import WebglRSOrigin from "./WebglRSOrigin";
import WebglRSType from "./WebglRSType";

/**
 * 着色程序属性记录
 */
class WebglCtxProps <T> {
    /**
     * 服务的上下文
     */
    webglCtx: WebGLRenderingContext;
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
    origin: WebglRSOrigin;
    /**
     * 数据类型
     */
    type: WebglRSType <T>;

    constructor (
        name: string,
        origin: WebglRSOrigin,
        type: WebglRSType <T>
    )
    {
        this.name = name;
        this.origin = origin;
        this.type = type;
    }

    /**
     * 获取参数定义
     */
    getTxtDefine () {
        return `${this.origin.name} ${this.type.name} ${this.name};`;
    }

    uniformCache: WebGLUniformLocation;

    /**
     * 初始化
     */
    Init (webglCtx: WebGLRenderingContext, program: WebGLProgram) {
        this.webglCtx = webglCtx;
        this.program = program;
        this.origin.init (this);
    }

    /**
     * 填充数据
     */
    fill (t: T) {
        this.origin.fill (this, t);
    }
}

export default WebglCtxProps;
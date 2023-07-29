/**
 * 着色程序属性记录
 */
class WebglCtxProps {
    constructor(name, origin, type) {
        this.name = name;
        this.origin = origin;
        this.type = type;
    }
    /**
     * 获取参数定义
     */
    getTxtDefine() {
        return `${this.origin.name} ${this.type.name} ${this.name};`;
    }
    /**
     * 初始化
     */
    Init(webglCtx, program) {
        this.webglCtx = webglCtx;
        this.program = program;
        this.origin.init(this);
    }
    /**
     * 填充数据
     */
    fill(t) {
        this.origin.fill(this, t);
    }
}
export default WebglCtxProps;

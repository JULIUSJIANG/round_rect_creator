import NodeModules from "./NodeModules.js";
import DomRoot from "./dom/DomRoot.js";
/**
 * 渲染管理器
 */
class DomRender {
    constructor() {
        /**
         * 版本
         */
        this.version = 0;
    }
    /**
     * 初始化
     * @returns
     */
    init() {
        this._root = NodeModules.reactDomClient.createRoot(document.getElementById('app'));
        return Promise.resolve();
    }
    /**
     * 刷新画面
     */
    refresh() {
        this.version++;
        // 正式渲染
        this._root.render(NodeModules.react.createElement(DomRoot));
    }
}
(function (DomRender) {
    /**
     * 全局实例
     */
    DomRender.inst = new DomRender();
})(DomRender || (DomRender = {}));
export default DomRender;

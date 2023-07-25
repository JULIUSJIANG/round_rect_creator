import c_modules from "./c_modules.js";
import c_dom_root from "./dom/c_dom_root.js";
/**
 * 渲染管理器
 */
class c_render {
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
    f_init() {
        this._root = c_modules.react_dom_client.createRoot(document.getElementById('app'));
        return Promise.resolve();
    }
    /**
     * 刷新画面
     */
    f_refresh() {
        this.version++;
        console.log(`c_render: 画面刷新[${this.version}]`);
        // 正式渲染
        this._root.render(c_modules.react.createElement(c_dom_root));
    }
}
(function (c_render) {
    /**
     * 全局实例
     */
    c_render.inst = new c_render();
})(c_render || (c_render = {}));
export default c_render;

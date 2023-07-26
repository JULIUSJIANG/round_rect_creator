import c_modules from "./c_modules.js";
import c_dom_root from "./dom/c_dom_root.js";

/**
 * 渲染管理器
 */
class c_render {
    /**
     * 界面的根节点
     */
    private _root;

    /**
     * 初始化
     * @returns 
     */
    f_init () {
        this._root = c_modules.react_dom_client.createRoot (document.getElementById('app'));
        return Promise.resolve ();
    }

    /**
     * 版本
     */
    version = 0;

    /**
     * 刷新画面
     */
    f_refresh () {
        this.version++;
        console.log (`c_render: 画面刷新[${this.version}]`);
        // 正式渲染
        this._root.render(
            c_modules.react.createElement (c_dom_root)
        );
    }
}

namespace c_render {
    /**
     * 全局实例
     */
    export const inst = new c_render ();
}

export default c_render;
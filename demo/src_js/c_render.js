import c_data from "./c_data.js";
import c_data_item from "./c_data_item.js";
import d_modules from "./d_modules.js";
/**
 * 渲染管理器
 */
class c_render {
    /**
     * 初始化
     * @returns
     */
    f_init() {
        this._root = d_modules.react_dom_client.createRoot(document.getElementById('app'));
        this.f_refresh();
        return Promise.resolve();
    }
    /**
     * 刷新画面
     */
    f_refresh() {
        let list_children = [];
        let list_record = c_data.inst.f_get(c_data_item.list_reccord);
        for (let i = 0; i < list_record.length; i++) {
            let list_record_i = list_record[i];
            let props = {
                onClick: () => {
                    // 选择的存档与当前编辑存档一致，忽略
                    if (c_data.inst.f_get(c_data_item.current_edit_record_id) == list_record_i.id) {
                        return;
                    }
                    ;
                    c_data.inst.f_set(c_data_item.current_edit_record_id, list_record_i.id);
                    // 刷新画面
                    c_render.inst.f_refresh();
                    // 存档
                    c_data.inst.f_save();
                }
            };
            // 自己就是当前正在编辑的存档，高亮，且拒绝点击
            if (c_data.inst.f_get(c_data_item.current_edit_record_id) == list_record_i.id) {
                props["type"] = "primary";
            }
            ;
            list_children.push(d_modules.react.createElement(d_modules.antd.Button, props, `圆角矩形${list_record_i.id}`));
        }
        ;
        list_children.push(d_modules.react.createElement(d_modules.antd.Button, {
            type: "dashed",
            onClick: () => {
                let record_id = c_data.inst.f_get(c_data_item.seed_record) + 1;
                c_data.inst.f_set(c_data_item.seed_record, record_id);
                list_record.push({
                    id: record_id
                });
                c_data.inst.f_set(c_data_item.current_edit_record_id, record_id);
                // 刷新画面
                c_render.inst.f_refresh();
                // 存档
                c_data.inst.f_save();
            }
        }, `新建存档`));
        // 正式渲染
        this._root.render(d_modules.react.createElement(d_modules.antd.Space, {
            props: `props`
        }, ...list_children));
    }
}
(function (c_render) {
    /**
     * 全局实例
     */
    c_render.inst = new c_render();
})(c_render || (c_render = {}));
export default c_render;

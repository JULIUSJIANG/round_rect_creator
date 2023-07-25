import c_data_item from "./c_data_item.js";
import c_sdk from "../sdk/c_sdk.js";
/**
 * 数据管理
 */
class c_data {
    constructor() {
        /**
         * 真正的数据，存储在这里
         */
        this._data = {};
        /**
         * 数据版本
         */
        this.data_version = 0;
    }
    /**
     * 初始化
     */
    f_init() {
        return Promise.resolve()
            // 问 sdk 要存档
            .then(() => {
            return c_sdk.inst.core.get();
        })
            // 初始化当前记录
            .then((ctx) => {
            // 对象形式的存档
            let data_object;
            if (ctx.is_successed) {
                data_object = JSON.parse(ctx.txt);
            }
            else {
                data_object = {};
            }
            ;
            for (let i = 0; i < c_data_item.list_item.length; i++) {
                let list_item_i = c_data_item.list_item[i];
                let storaged = data_object[list_item_i.key];
                let val;
                // 没有记录的话，取默认值
                if (storaged == null) {
                    val = list_item_i.def_val;
                }
                // 否则取记录值
                else {
                    val = storaged;
                }
                ;
                this.f_set(list_item_i, val);
            }
            ;
        });
    }
    /**
     * 存记录
     * @param item
     * @param t
     */
    f_set(item, t) {
        this._data[item.key] = t;
        this.f_call_data_change();
    }
    /**
     * 取记录
     * @param item
     * @returns
     */
    f_get(item) {
        return this._data[item.key];
    }
    /**
     * 正式存档
     * @returns
     */
    f_save() {
        return c_sdk.inst.core.set(JSON.stringify(this._data, null, 1));
    }
    /**
     * 通知数据发生变化
     */
    f_call_data_change() {
        ++this.data_version;
    }
}
(function (c_data) {
    /**
     * 全局实例
     */
    c_data.inst = new c_data();
})(c_data || (c_data = {}));
export default c_data;

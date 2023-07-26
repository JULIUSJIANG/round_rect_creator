import c_data_item_ctx_record from "./c_data_item_ctx_record.js";

/**
 * 数据管理 - 具体记录
 */
class c_data_item<T> {

    /**
     * 访问该记录的键
     */
    key: string;

    /**
     * 该记录的默认值
     */
    def_val: T;

    constructor (args: {
        key: string,
        def_val: T
    })
    {
        this.key = args.key;
        this.def_val = args.def_val;

        c_data_item.list_item.push (this);
    }
}

/**
 * 改这个值，整个存档都会重置
 */
const VERSION = 16;

namespace c_data_item {
    /**
     * 所有具体记录
     */
    export const list_item: Array <c_data_item <unknown>> = new Array ();
    /**
     * 用于生成记录的种子
     */
    export const seed_record = new c_data_item ({
        key: `seed_record_${VERSION}`,
        def_val: 0
    });
    /**
     * 所有存档
     */
    export const list_reccord = new c_data_item <Array <c_data_item_ctx_record>> ({
        key: `list_reccord_${VERSION}`,
        def_val: []
    });
    /**
     * 当前正在编辑的存档 id
     */
    export const current_edit_record_id = new c_data_item ({
        key: `current_edit_record_id_${VERSION}`,
        def_val: 0
    });
}

export default c_data_item;
const {c_data_item_ctx_record} = require (`./c_data_item_ctx_record.js`);

/**
 * 数据管理 - 具体记录
 */
class _c_data_item<T> {

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

        _c_data_item.list_item.push (this);
    }
}

/**
 * 改这个值，整个存档都会重置
 */
const VERSION = 11;

namespace _c_data_item {
    /**
     * 所有具体记录
     */
    export const list_item: Array <_c_data_item <unknown>> = new Array ();

    /**
     * 当前数据版本
     */
    export const version = new _c_data_item ({
        key: `version_${VERSION}`,
        def_val: VERSION
    });

    /**
     * 用于生成记录的种子
     */
    export const seed_record = new _c_data_item ({
        key: `seed_record_${VERSION}`,
        def_val: 1
    });
    /**
     * 所有存档
     */
    export const list_reccord = new _c_data_item <Array <any>> ({
        key: `list_reccord_${VERSION}`,
        def_val: [
            {
                id: 1,
                name: `圆角矩形【1】`
            }
        ]
    });
    /**
     * 当前正在编辑的存档 id
     */
    export const current_edit_record_id = new _c_data_item ({
        key: `current_edit_record_id_${VERSION}`,
        def_val: 1
    });
}

exports.c_data_item = _c_data_item;
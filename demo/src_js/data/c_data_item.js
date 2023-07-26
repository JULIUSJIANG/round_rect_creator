/**
 * 数据管理 - 具体记录
 */
class c_data_item {
    constructor(args) {
        this.key = args.key;
        this.def_val = args.def_val;
        c_data_item.list_item.push(this);
    }
}
/**
 * 改这个值，整个存档都会重置
 */
const VERSION = 16;
(function (c_data_item) {
    /**
     * 所有具体记录
     */
    c_data_item.list_item = new Array();
    /**
     * 用于生成记录的种子
     */
    c_data_item.seed_record = new c_data_item({
        key: `seed_record_${VERSION}`,
        def_val: 0
    });
    /**
     * 所有存档
     */
    c_data_item.list_reccord = new c_data_item({
        key: `list_reccord_${VERSION}`,
        def_val: []
    });
    /**
     * 当前正在编辑的存档 id
     */
    c_data_item.current_edit_record_id = new c_data_item({
        key: `current_edit_record_id_${VERSION}`,
        def_val: 0
    });
})(c_data_item || (c_data_item = {}));
export default c_data_item;

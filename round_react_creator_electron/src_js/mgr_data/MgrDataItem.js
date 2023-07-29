/**
 * 数据管理 - 具体记录
 */
class MgrDataItem {
    constructor(args) {
        this.key = args.key;
        this.defVal = args.defVal;
        MgrDataItem.listItem.push(this);
    }
}
/**
 * 改这个值，整个存档都会重置
 */
const VERSION = 19;
(function (MgrDataItem) {
    /**
     * 所有具体记录
     */
    MgrDataItem.listItem = new Array();
    /**
     * 用于生成记录的种子
     */
    MgrDataItem.SEED_RECORD = new MgrDataItem({
        key: `seed_record_${VERSION}`,
        defVal: 0
    });
    /**
     * 所有存档
     */
    MgrDataItem.LIST_RECORD = new MgrDataItem({
        key: `list_reccord_${VERSION}`,
        defVal: []
    });
    /**
     * 当前正在编辑的存档 id
     */
    MgrDataItem.CURRENT_EDIT_RECORD_ID = new MgrDataItem({
        key: `current_edit_record_id_${VERSION}`,
        defVal: 0
    });
})(MgrDataItem || (MgrDataItem = {}));
export default MgrDataItem;

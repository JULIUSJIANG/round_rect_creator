import MgrDataItemCtxRecord from "./MgrDataItemCtxRecord";

/**
 * 数据管理 - 具体记录
 */
class MgrDataItem<T> {

    /**
     * 访问该记录的键
     */
    key: string;

    /**
     * 该记录的默认值
     */
    defVal: T;

    constructor (args: {
        key: string,
        defVal: T
    })
    {
        this.key = args.key;
        this.defVal = args.defVal;

        MgrDataItem.listItem.push (this);
    }
}

/**
 * 改这个值，整个存档都会重置
 */
const VERSION = 19;

namespace MgrDataItem {
    /**
     * 所有具体记录
     */
    export const listItem: Array <MgrDataItem <unknown>> = new Array ();
    /**
     * 用于生成记录的种子
     */
    export const SEED_RECORD = new MgrDataItem ({
        key: `seed_record_${VERSION}`,
        defVal: 0
    });
    /**
     * 所有存档
     */
    export const LIST_RECORD = new MgrDataItem <Array <MgrDataItemCtxRecord>> ({
        key: `list_reccord_${VERSION}`,
        defVal: []
    });
    /**
     * 当前正在编辑的存档 id
     */
    export const CURRENT_EDIT_RECORD_ID = new MgrDataItem ({
        key: `current_edit_record_id_${VERSION}`,
        defVal: 0
    });
}

export default MgrDataItem;
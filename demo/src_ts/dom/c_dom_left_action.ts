import c_modules from "../c_modules.js";
import c_data from "../data/c_data.js";
import c_data_item from "../data/c_data_item.js";
import c_render from "../c_render.js"
import c_config from "../c_config.js";

/**
 * 根 - 行为导航栏
 */
class _c_dom_left_action extends c_modules.react.Component {

    render () {
        return c_modules.react.createElement (
            c_modules.antd.Space, 
            {
                direction: "vertical",
                style: {
                    padding: c_config.SPACING,
                    border: c_config.BLOCK_BORDER
                }
            },


            c_modules.react.createElement (
                c_modules.antd.Button,
                {
                    onClick: () => {
                        let list_record = c_data.inst.f_get (c_data_item.list_reccord);
                        let record_id = c_data.inst.f_get (c_data_item.seed_record) + 1;
                        c_data.inst.f_set (c_data_item.seed_record, record_id);
                        list_record.push ({
                            id: record_id,
                            name: `圆角矩形【${record_id}】`
                        });
                        c_data.inst.f_set (c_data_item.current_edit_record_id, record_id);
                    },
                    block: true
                },
    
                `新建`
            ),
            c_modules.react.createElement (
                c_modules.antd.Button,
                {
                    onClick: () => {
                        let list_record = c_data.inst.f_get (c_data_item.list_reccord);
                        let edit_id = c_data.inst.f_get (c_data_item.current_edit_record_id);
                        let editIdx: number;
                        for (let i = 0; i < list_record.length; i++) {
                            let list_reccord_i = list_record [i];
                            if (list_reccord_i.id == edit_id) {
                                editIdx = i;
                                break;
                            };
                        };
                        // 删除对应索引的存档
                        list_record.splice (editIdx, 1);
                        // 已经没有存档了
                        if (list_record.length == 0) {
                            c_data.inst.f_set (c_data_item.current_edit_record_id, 0);
                        }
                        else {
                            // 在不越界的前提下，尽量保持编辑索引
                            editIdx = Math.min (editIdx, list_record.length - 1);
                            c_data.inst.f_set (c_data_item.current_edit_record_id, list_record [editIdx].id);
                        };
                    },
                    block: true
                },
    
                `删除`
            ),
            c_modules.react.createElement (
                c_modules.antd.Button,
                {
                    onClick: () => {
                        
                    },
                    block: true
                },
    
                `撤销`
            )
        );
    }
}

exports.c_dom_left_action = _c_dom_left_action;
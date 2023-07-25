import c_data from "./data/c_data.js";
import c_render from "./c_render.js";
import c_sdk from "./sdk/c_sdk.js";
import c_modules from "./c_modules.js";
import c_data_item from "./data/c_data_item.js";
import c_data_item_ctx_record from "./data/c_data_item_ctx_record.js";
const {c_request} = require (`./c_request.js`);

const {c_a} = require (`./c_a.js`);

let i_a = new c_a ();
console.log (`客户都安构造了 c_a...`, i_a.id);

Promise.resolve ()
    // 等待文档加载成功
    .then (() => {
        return new Promise ((resolve) => {
            window.addEventListener (`DOMContentLoaded`, resolve);
        });
    })
    // 初始化 sdk
    .then (() => {
        console.log (`c_sdk init...`);
        return c_sdk.inst.f_init ();
    })
    // 初始化数据
    .then (() => {
        console.log (`c_data init...`);
        return c_data.inst.f_init ();
    })
    // 渲染画面
    .then (() => {
        console.log (`c_render init...`);
        return c_render.inst.f_init ();
    })
    .then (() => {
        return c_index_client.f_fetch (
            c_request.client_fetch_ready,
            {
                txt: `client_ready`
            }
        );
    })
    .then (() => {
        // 上一帧数据版本
        let last_data_version: number;
        // 更新
        let update = () => {
            if (last_data_version != c_data.inst.data_version) {
                last_data_version = c_data.inst.data_version;
                c_data.inst.f_save ();
                c_render.inst.f_refresh ();
            };
        };
        // 自循环装置
        let go = () => {
            update ();
            requestAnimationFrame (go);
        };
        requestAnimationFrame (go);
    })

c_modules.electron.ipcRenderer.on (
    c_request.EVT_NAME_SERVER_ACTIVE,
    (
        evt,
        args: c_request.c_ctx
    ) => 
    {
        // 解析得到具体策略
        let action = c_request.map_code_to_request.get (args.code);
        // 让策略处理
        action.analyse (args.data)
            .then ((resp) => {
                // 返回最终结果
                c_modules.electron.ipcRenderer.send (c_request.EVT_NAME_SERVER_ACTIVE, resp);
            });
    }
);

namespace _c_index_client {
    /**
     * 获取当前编辑的存档
     * @returns 
     */
    export function f_get_current_record () {
        let list_record = c_data.inst.f_get (c_data_item.list_reccord);
        let current_record: c_data_item_ctx_record;
        for (let i = 0; i < list_record.length; i++) {
            let list_record_i = list_record [i];
            if (list_record_i.id == c_data.inst.f_get (c_data_item.current_edit_record_id)) {
                current_record = list_record_i;
                break;
            };
        };
        return current_record;
    }

    /**
     * 告知服务端
     * @param action 
     * @param i 
     */
    export function f_fetch <c_i, c_o> (
        action: c_request <c_i, c_o>,
        i: c_i
    ) 
    {
        let msg = {
            code: action.code,
            data: i
        };
        c_modules.electron.ipcRenderer.send (c_request.EVT_NAME_CLIENT_ACTIVE, msg);
        return new Promise <c_o> ((resolve) => {
            c_modules.electron.ipcRenderer.once (
                c_request.EVT_NAME_CLIENT_ACTIVE,
                (
                    evt,
                    resp: c_o
                ) =>
                {
                    resolve (resp);
                }
            );
        });
    }
};

exports.c_index_client = _c_index_client;
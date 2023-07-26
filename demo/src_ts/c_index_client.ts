import c_data from "./data/c_data.js";
import c_render from "./c_render.js";
import c_sdk from "./sdk/c_sdk.js";
import c_modules from "./c_modules.js";
import c_data_item from "./data/c_data_item.js";
import c_data_item_ctx_record from "./data/c_data_item_ctx_record.js";
import c_request from "./c_request.js";

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
    // 初始化渲染器
    .then (() => {
        console.log (`c_render init...`);
        return c_render.inst.f_init ();
    })
    // 告知服务端已就绪
    .then (() => {
        // 跟服务端说，我已经就绪了
        return c_index_client.f_fetch (
            c_request.client_fetch_log,
            {
                txt: `客户端就绪...`
            }
        );
    })
    // 自动 update
    .then (() => {
        // 没存档的话，新建一个
        if (c_data.inst.f_get (c_data_item.list_reccord).length == 0) {
            c_index_client.f_add_record ();
        };

        // 关闭窗口时候自动存档一次
        window.addEventListener (`beforeunload`, () => {
            c_index_client.f_fetch (
                c_request.client_fetch_log,
                {
                    txt: `客户端关闭...`
                }
            );
            c_data.inst.f_save ();
        });

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
        args: any
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

class c_index_client {

}

namespace c_index_client {
    /**
     * 新建记录
     */
    export function f_add_record () {
        let list_record = c_data.inst.f_get (c_data_item.list_reccord);
        let record_id = c_data.inst.f_get (c_data_item.seed_record) + 1;
        c_data.inst.f_set (c_data_item.seed_record, record_id);
        list_record.push ({
            id: record_id,
            name: `圆角矩形【${record_id}】`,

            radius_lt: 50,
            radius_rt: 50,
            radius_lb: 50,
            radius_rb: 50,

            margin_top: 0,
            margin_right: 0,
            margin_bottom: 0,
            margin_left: 0,

            min_size_width: 200,
            min_size_height: 200,

            color: "88888888",
            serration: 10,

            current_code: 0,

            code_1_line_width: 2,
            code_2_fade_distance: 25,
            code_3_fade_distance: 25
        });
        c_data.inst.f_set (c_data_item.current_edit_record_id, record_id);
    }

    /**
     * 获取当前编辑的存档
     * @returns 
     */
    export function f_get_current_record () {
        let list_record = c_data.inst.f_get (c_data_item.list_reccord) as any;
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
        action: any,
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

export default c_index_client;
import c_data from "./c_data.js";
import c_render from "./c_render.js";
import c_sdk from "./c_sdk.js";

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
    });
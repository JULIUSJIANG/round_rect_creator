import c_modules from "../c_modules.js";
import c_dom_define from "./c_dom_define.js";
import c_webgl from "../util/c_webgl.js";
import c_webgl_ctx_props from "../util/c_webgl_ctx_props.js";
import c_webgl_rs_origin from "../util/c_webgl_rs_origin.js";
import c_webgl_rs_type from "../util/c_webgl_rs_type.js";
import c_index_client from "../c_index_client.js";

/**
 * 右边图片预览
 */
class c_dom_right_preview extends c_modules.react.Component {
    /**
     * 实例引用
     */
    canvas_ref = c_modules.react.createRef ();
    /**
     * canvas
     */
    webgl_canvas: HTMLCanvasElement;
    /**
     * webgl
     */
    webgl_ctx: WebGLRenderingContext;
    /**
     * 着色程序
     */
    webgl_program: WebGLProgram;
    /**
     * 大图的 rt
     */
    big_img_rt: WebGLTexture;

    /**
     * 顶点位置
     */
    a_v_position = new c_webgl_ctx_props (
        `a_v_position`,
        c_webgl_rs_origin.t_attribute,
        c_webgl_rs_type.t_vec4
    );
    /**
     * 取样位置
     */
    v_f_position = new c_webgl_ctx_props (
        `v_f_position`,
        c_webgl_rs_origin.t_varying,
        c_webgl_rs_type.t_vec2
    );
    /**
     * 尺寸
     */
    u_f_size = new c_webgl_ctx_props (
        `u_f_size`,
        c_webgl_rs_origin.t_uniform,
        c_webgl_rs_type.t_vec2
    );
    /**
     * 左上半径
     */
    u_radius_lt = new c_webgl_ctx_props (
        `u_radius_lt`,
        c_webgl_rs_origin.t_uniform,
        c_webgl_rs_type.t_float
    );
    /**
     * 右上半径
     */
    u_radius_rt = new c_webgl_ctx_props (
        `u_radius_rt`,
        c_webgl_rs_origin.t_uniform,
        c_webgl_rs_type.t_float
    );
    /**
     * 右下半径
     */
    u_radius_rb = new c_webgl_ctx_props (
        `u_radius_rb`,
        c_webgl_rs_origin.t_uniform,
        c_webgl_rs_type.t_float
    );
    /**
     * 左下半径
     */
    u_radius_lb = new c_webgl_ctx_props (
        `u_radius_lb`,
        c_webgl_rs_origin.t_uniform,
        c_webgl_rs_type.t_float
    );
    /**
     * 着色
     */
    u_color = new c_webgl_ctx_props (
        `u_color`,
        c_webgl_rs_origin.t_uniform,
        c_webgl_rs_type.t_vec4
    );
    /**
     * 当前模式代号
     */
    u_current_code = new c_webgl_ctx_props (
        `u_current_code`,
        c_webgl_rs_origin.t_uniform,
        c_webgl_rs_type.t_float
    );
    /**
     * 线框模式 - 线宽
     */
    u_code_1_line_width = new c_webgl_ctx_props (
        `u_code_1_line_width`,
        c_webgl_rs_origin.t_uniform,
        c_webgl_rs_type.t_float
    );
    /**
     * 向内淡出 - 淡出距离
     */
    u_code_2_fade_distance = new c_webgl_ctx_props (
        `u_code_2_fade_distance`,
        c_webgl_rs_origin.t_uniform,
        c_webgl_rs_type.t_float
    );
    /**
     * 向内淡入 - 淡入距离
     */
    u_code_3_fade_distance = new c_webgl_ctx_props (
        `u_code_3_fade_distance`,
        c_webgl_rs_origin.t_uniform,
        c_webgl_rs_type.t_float
    );

    componentDidMount () {
        this.webgl_canvas = this.canvas_ref.current;
        this.webgl_ctx = this.webgl_canvas.getContext (`webgl`);
        this.webgl_program = c_webgl.f_create_program (
            this.webgl_ctx,
`
precision mediump float;
${this.a_v_position.f_get_txt_define()}
${this.v_f_position.f_get_txt_define()}
${this.u_f_size.f_get_txt_define()}
${this.u_radius_lt.f_get_txt_define()}
${this.u_radius_rt.f_get_txt_define()}
${this.u_radius_rb.f_get_txt_define()}
${this.u_radius_lb.f_get_txt_define()}
${this.u_color.f_get_txt_define()}
${this.u_current_code.f_get_txt_define()}
${this.u_code_1_line_width.f_get_txt_define()}
${this.u_code_2_fade_distance.f_get_txt_define()}
${this.u_code_3_fade_distance.f_get_txt_define()}
void main () {
    gl_Position = ${this.a_v_position.name};
    ${this.v_f_position.name} = (gl_Position.xy * 0.5 + vec2 (0.5)) * ${this.u_f_size.name};
}
`,
`
precision mediump float;
precision mediump sampler2D;
${this.v_f_position.f_get_txt_define()}
${this.u_f_size.f_get_txt_define()}
${this.u_radius_lt.f_get_txt_define()}
${this.u_radius_rt.f_get_txt_define()}
${this.u_radius_rb.f_get_txt_define()}
${this.u_radius_lb.f_get_txt_define()}
${this.u_color.f_get_txt_define()}
${this.u_current_code.f_get_txt_define()}
${this.u_code_1_line_width.f_get_txt_define()}
${this.u_code_2_fade_distance.f_get_txt_define()}
${this.u_code_3_fade_distance.f_get_txt_define()}
float code_0_opacity () {
    return 1.0;
}
float code_1_opacity (float border_distance) {
    return step (border_distance, ${this.u_code_1_line_width.name});
}
float code_2_opacity (float border_distance) {
    return 1.0 - clamp (border_distance / ${this.u_code_2_fade_distance.name}, 0.0, 1.0);
}
float code_3_opacity (float border_distance) {
    return clamp (border_distance / ${this.u_code_3_fade_distance.name}, 0.0, 1.0);
}

// 计算坐标点到边缘的距离
float distance_rel_border (float radius, vec2 center, vec2 pos) {
    vec2 rel = pos - center;
    float distance = sqrt (dot (rel, rel));
    return radius - distance;
}

// 计算距离影响的不透明度
float distance_opacity (float radius, vec2 center, vec2 pos) {
    vec2 rel = pos - center;
    float distance = sqrt (dot (rel, rel));
    // 半径以内的为实体
    return step (distance, radius);
}
void main () {
    // 左上角
    float judge_lt = step (${this.v_f_position.name}.x, ${this.u_radius_lt.name}) * step (${this.u_f_size.name}.y - ${this.u_radius_lt.name}, ${this.v_f_position.name}.y);
    // 右上角
    float judge_rt = step (${this.u_f_size.name}.x - ${this.u_radius_rt.name}, ${this.v_f_position.name}.x) * step (${this.u_f_size.name}.y - ${this.u_radius_rt.name}, ${this.v_f_position.name}.y);
    // 右下角
    float judge_rb = step (${this.u_f_size.name}.x - ${this.u_radius_rb.name}, ${this.v_f_position.name}.x) * step (${this.v_f_position.name}.y, ${this.u_radius_rb.name});
    // 在左下角
    float judge_lb = step (${this.v_f_position.name}.x, ${this.u_radius_lb.name}) * step (${this.v_f_position.name}.y, ${this.u_radius_lb.name});

    // 左上角带来的蒙版
    float judge_lt_opacity = distance_opacity (${this.u_radius_lt.name}, vec2 (${this.u_radius_lt.name}, ${this.u_f_size.name}.y - ${this.u_radius_lt.name}), ${this.v_f_position.name}) * judge_lt + (1.0 - judge_lt);
    // 右上角带来的蒙版
    float judge_rt_opacity = distance_opacity (${this.u_radius_rt.name}, vec2 (${this.u_f_size.name}.x - ${this.u_radius_rt.name}, ${this.u_f_size.name}.y - ${this.u_radius_rt.name}), ${this.v_f_position.name}) * judge_rt + (1.0 - judge_rt);
    // 右下角带来的蒙版
    float judge_rb_opacity = distance_opacity (${this.u_radius_rb.name}, vec2 (${this.u_f_size.name}.x - ${this.u_radius_rb.name}, ${this.u_radius_rb.name}),  ${this.v_f_position.name}) * judge_rb + (1.0 - judge_rb);
    // 左下角带来的蒙版
    float judge_lb_opacity = distance_opacity (${this.u_radius_lb.name}, vec2 (${this.u_radius_lb.name}, ${this.u_radius_lb.name}), ${this.v_f_position.name}) * judge_lb + (1.0 - judge_lb);

    // 核心形状的模板
    float opacity_shape = judge_lt_opacity * judge_rt_opacity * judge_rb_opacity * judge_lb_opacity;

    // 能够产生的最大距离
    float distance_max = max (${this.u_f_size.name}.x, ${this.u_f_size.name}.y);
    // 左上角带来的距离
    float judge_lt_distance = distance_rel_border (${this.u_radius_lt.name}, vec2 (${this.u_radius_lt.name}, ${this.u_f_size.name}.y - ${this.u_radius_lt.name}), ${this.v_f_position.name}) * judge_lt + distance_max * (1.0 - judge_lt);
    // 右上角带来的距离
    float judge_rt_distance = distance_rel_border (${this.u_radius_rt.name}, vec2 (${this.u_f_size.name}.x - ${this.u_radius_rt.name}, ${this.u_f_size.name}.y - ${this.u_radius_rt.name}), ${this.v_f_position.name}) * judge_rt + distance_max * (1.0 - judge_rt);
    // 右下角带来的距离1
    float judge_rb_distance = distance_rel_border (${this.u_radius_rb.name}, vec2 (${this.u_f_size.name}.x - ${this.u_radius_rb.name}, ${this.u_radius_rb.name}),  ${this.v_f_position.name}) * judge_rb + distance_max * (1.0 - judge_rb);
    // 左下角带来的距离
    float judge_lb_distance = distance_rel_border (${this.u_radius_lb.name}, vec2 (${this.u_radius_lb.name}, ${this.u_radius_lb.name}), ${this.v_f_position.name}) * judge_lb + distance_max * (1.0 - judge_lb);

    // 上边距
    float distance_top = ${this.u_f_size.name}.y - ${this.v_f_position.name}.y;
    // 右边距
    float distance_right = ${this.u_f_size.name}.x - ${this.v_f_position.name}.x;
    // 下边距
    float distance_bottom = ${this.v_f_position.name}.y;
    // 左边距
    float distance_left = ${this.v_f_position.name}.x;

    // 到边界的距离
    float border_distance = min (
        min (
            min (
                judge_lt_distance,
                judge_rt_distance
            ),
            min (
                judge_rb_distance,
                judge_lb_distance
            )
        ),
        min (
            min (
                distance_top,
                distance_right
            ),
            min (
                distance_bottom,
                distance_left
            )
        )
    );

    // 模式 0
    float judge_code_0 = step (0.0 - 0.1, ${this.u_current_code.name}) * step (${this.u_current_code.name}, 0.0 + 0.1);
    // 模式 1
    float judge_code_1 = step (1.0 - 0.1, ${this.u_current_code.name}) * step (${this.u_current_code.name}, 1.0 + 0.1);
    // 模式 2
    float judge_code_2 = step (2.0 - 0.1, ${this.u_current_code.name}) * step (${this.u_current_code.name}, 2.0 + 0.1);
    // 模式 3
    float judge_code_3 = step (3.0 - 0.1, ${this.u_current_code.name}) * step (${this.u_current_code.name}, 3.0 + 0.1);

    // 模式 0 带来的模板
    float judge_code_0_opacity = code_0_opacity () * judge_code_0 + (1.0 - judge_code_0);
    // 模式 1 带来的模板
    float judge_code_1_opacity = code_1_opacity (border_distance) * judge_code_1 + (1.0 - judge_code_1);
    // 模式 2 带来的模板
    float judge_code_2_opacity = code_2_opacity (border_distance) * judge_code_2 + (1.0 - judge_code_2);
    // 模式 3 带来的模板
    float judge_code_3_opacity = code_3_opacity (border_distance) * judge_code_3 + (1.0 - judge_code_3);

    // 模式形状的模板
    float opacity_code = judge_code_0_opacity * judge_code_1_opacity * judge_code_2_opacity * judge_code_3_opacity;

    // 最终颜色
    gl_FragColor = ${this.u_color.name} * vec4 (1.0, 1.0, 1.0, opacity_shape * opacity_code);
}
`
        );
        this.webgl_ctx.useProgram (this.webgl_program);

        // 初始化顶点数据
        let vertex_buffer = this.webgl_ctx.createBuffer ();
        this.webgl_ctx.bindBuffer (this.webgl_ctx.ARRAY_BUFFER, vertex_buffer);
        let vertex_data = new Float32Array ([
             1,  1, 0, 1,
             1, -1, 0, 1,
            -1, -1, 0, 1,
            -1,  1, 0, 1
        ]);
        this.webgl_ctx.bufferData (this.webgl_ctx.ARRAY_BUFFER, vertex_data, this.webgl_ctx.STATIC_DRAW);
        let vertex_location = this.webgl_ctx.getAttribLocation (this.webgl_program, this.a_v_position.name);
        this.webgl_ctx.vertexAttribPointer (vertex_location, 4, this.webgl_ctx.FLOAT, false, Float32Array.BYTES_PER_ELEMENT * 4, 0);
        this.webgl_ctx.enableVertexAttribArray (vertex_location);

        // 初始化网格数据
        let mesh_buffer = this.webgl_ctx.createBuffer ();
        this.webgl_ctx.bindBuffer (this.webgl_ctx.ELEMENT_ARRAY_BUFFER, mesh_buffer);
        let mesh_data = new Uint8Array ([
            0, 1, 2,
            0, 2, 3
        ]);
        this.webgl_ctx.bufferData (this.webgl_ctx.ELEMENT_ARRAY_BUFFER, mesh_data, this.webgl_ctx.STATIC_DRAW);

        // 初始化参数
        this.u_f_size.f_init (this.webgl_ctx, this.webgl_program);
        this.u_radius_lt.f_init (this.webgl_ctx, this.webgl_program);
        this.u_radius_rt.f_init (this.webgl_ctx, this.webgl_program);
        this.u_radius_rb.f_init (this.webgl_ctx, this.webgl_program);
        this.u_radius_lb.f_init (this.webgl_ctx, this.webgl_program);
        this.u_color.f_init (this.webgl_ctx, this.webgl_program);
        this.u_current_code.f_init (this.webgl_ctx, this.webgl_program);
        this.u_code_1_line_width.f_init (this.webgl_ctx, this.webgl_program);
        this.u_code_2_fade_distance.f_init (this.webgl_ctx, this.webgl_program);
        this.u_code_3_fade_distance.f_init (this.webgl_ctx, this.webgl_program);
        this.big_img_rt = this.webgl_ctx.createTexture ();
        this.componentDidUpdate ();
    }

    componentDidUpdate () {
        // 清除画面
        this.webgl_ctx.clear (this.webgl_ctx.COLOR_BUFFER_BIT);
        let record = c_index_client.f_get_current_record ();
        // 当前没有可用存档，忽略
        if (!record) {
            return;
        };
        let width = Math.max (record.radius_lt + record.radius_rt, record.radius_lb + record.radius_rb, record.min_size_width);
        let height = Math.max (record.radius_lt + record.radius_lb, record.radius_rt + record.radius_rb, record.min_size_height);
        this.webgl_canvas.width = width;
        this.webgl_canvas.height = height;
        this.webgl_ctx.viewport (0, 0, width, height);

        this.u_f_size.f_fill ([width, height]);
        this.u_radius_lt.f_fill (record.radius_lt);
        this.u_radius_rt.f_fill (record.radius_rt);
        this.u_radius_rb.f_fill (record.radius_rb);
        this.u_radius_lb.f_fill (record.radius_lb);
        let list_color = c_webgl.f_parse_hex_to_rgba (record.color);
        this.u_color.f_fill (list_color);
        this.u_current_code.f_fill (record.current_code);
        this.u_code_1_line_width.f_fill (record.code_1_line_width);
        this.u_code_2_fade_distance.f_fill (record.code_2_fade_distance);
        this.u_code_3_fade_distance.f_fill (record.code_3_fade_distance);
        this.webgl_ctx.blendFunc (this.webgl_ctx.SRC_ALPHA, this.webgl_ctx.ONE_MINUS_SRC_ALPHA);
        this.webgl_ctx.enable (this.webgl_ctx.BLEND);
        
        

        this.webgl_ctx.bindFramebuffer (this.webgl_ctx.FRAMEBUFFER, null);
        this.webgl_ctx.drawElements (this.webgl_ctx.TRIANGLES, 6, this.webgl_ctx.UNSIGNED_BYTE, 0);
        window ["webgl_ctx"] = this.webgl_ctx;
    }

    render () {
        // 滚动视图的容器
        return c_modules.react.createElement (
            c_dom_define.t_div,
            {
                style: {
                    [c_dom_define.s_height]: c_dom_define.s_height_percentage_0,
                    [c_dom_define.s_flex_grow]: 1,
                    [c_dom_define.s_margin]: c_dom_define.d_spacing_half,
                    [c_dom_define.s_background_color]: c_dom_define.d_bg_color,

                    [c_dom_define.s_display]: c_dom_define.s_display_flex,
                    [c_dom_define.s_flex_direction]: c_dom_define.s_flex_direction_column
                }
            },

            // 滚动视图的遮罩
            c_modules.react.createElement (
                c_dom_define.t_div,
                {
                    style: {
                        [c_dom_define.s_height]: c_dom_define.s_height_percentage_0,
                        [c_dom_define.s_flex_grow]: 1,
                        [c_dom_define.s_margin]: c_dom_define.d_spacing,

                        [c_dom_define.s_overflow_x]: c_dom_define.s_overflow_x_scroll,
                        [c_dom_define.s_overflow_y]: c_dom_define.s_overflow_y_scroll
                    }
                },

                // 滚动的实体
                c_modules.react.createElement (
                    c_dom_define.t_canvas,
                    {
                        ref: this.canvas_ref,
                        style: {
                            [c_dom_define.s_background_color]: "black",
                            [c_dom_define.s_display]: c_dom_define.s_display_block
                        }
                    }
                )
            )
        );
    }
}

export default c_dom_right_preview;
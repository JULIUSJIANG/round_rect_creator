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
    webgl_canvas_ref = c_modules.react.createRef ();
    /**
     * canvas
     */
    webgl_canvas: HTMLCanvasElement;
    /**
     * webgl
     */
    webgl_ctx: WebGLRenderingContext;

    /**
     * 2d canvas 引用
     */
    d2_canvas_ref = c_modules.react.createRef ();
    /**
     * 2d canvas 实例
     */
    d2_canvas: HTMLCanvasElement;
    /**
     * 2d 上下文
     */
    d2_ctx: CanvasRenderingContext2D;
    /**
     * 着色程序
     */
    webgl_program_round_rect: WebGLProgram;
    /**
     * webgl 缓冲区
     */
    vertex_buffer: WebGLBuffer;
    /**
     * rt
     */
    big_img_rt: WebGLTexture;
    /**
     * 帧缓冲区
     */
    big_img_fbo: WebGLFramebuffer;
    /**
     * 顶点位置
     */
    rr_a_v_position = new c_webgl_ctx_props (
        `a_v_position`,
        c_webgl_rs_origin.t_attribute,
        c_webgl_rs_type.t_vec4
    );
    /**
     * 取样位置
     */
    rr_v_f_position = new c_webgl_ctx_props (
        `v_f_position`,
        c_webgl_rs_origin.t_varying,
        c_webgl_rs_type.t_vec2
    );
    /**
     * 尺寸
     */
    rr_u_f_size = new c_webgl_ctx_props (
        `u_f_size`,
        c_webgl_rs_origin.t_uniform,
        c_webgl_rs_type.t_vec2
    );
    /**
     * 左上半径
     */
    rr_u_radius_lt = new c_webgl_ctx_props (
        `u_radius_lt`,
        c_webgl_rs_origin.t_uniform,
        c_webgl_rs_type.t_float
    );
    /**
     * 右上半径
     */
    rr_u_radius_rt = new c_webgl_ctx_props (
        `u_radius_rt`,
        c_webgl_rs_origin.t_uniform,
        c_webgl_rs_type.t_float
    );
    /**
     * 右下半径
     */
    rr_u_radius_rb = new c_webgl_ctx_props (
        `u_radius_rb`,
        c_webgl_rs_origin.t_uniform,
        c_webgl_rs_type.t_float
    );
    /**
     * 左下半径
     */
    rr_u_radius_lb = new c_webgl_ctx_props (
        `u_radius_lb`,
        c_webgl_rs_origin.t_uniform,
        c_webgl_rs_type.t_float
    );
    /**
     * 着色
     */
    rr_u_color = new c_webgl_ctx_props (
        `u_color`,
        c_webgl_rs_origin.t_uniform,
        c_webgl_rs_type.t_vec4
    );
    /**
     * 当前模式代号
     */
    rr_u_current_code = new c_webgl_ctx_props (
        `u_current_code`,
        c_webgl_rs_origin.t_uniform,
        c_webgl_rs_type.t_float
    );
    /**
     * 线框模式 - 线宽
     */
    rr_u_code_1_line_width = new c_webgl_ctx_props (
        `u_code_1_line_width`,
        c_webgl_rs_origin.t_uniform,
        c_webgl_rs_type.t_float
    );
    /**
     * 向内淡出 - 淡出距离
     */
    rr_u_code_2_fade_distance = new c_webgl_ctx_props (
        `u_code_2_fade_distance`,
        c_webgl_rs_origin.t_uniform,
        c_webgl_rs_type.t_float
    );
    /**
     * 向内淡出 - 淡出速度
     */
    rr_u_code_2_speed = new c_webgl_ctx_props (
        `u_code_2_speed`,
        c_webgl_rs_origin.t_uniform,
        c_webgl_rs_type.t_float
    );
    /**
     * 向内淡入 - 淡入距离
     */
    rr_u_code_3_fade_distance = new c_webgl_ctx_props (
        `u_code_3_fade_distance`,
        c_webgl_rs_origin.t_uniform,
        c_webgl_rs_type.t_float
    );
    /**
     * 向内淡出 - 淡入速度
     */
    rr_u_code_3_speed = new c_webgl_ctx_props (
        `u_code_3_speed`,
        c_webgl_rs_origin.t_uniform,
        c_webgl_rs_type.t_float
    );
    /**
     * 顶点数据位置
     */
    rr_vertex_location: number;

    /**
     * webgl 程序 - 绘制单一图片
     */
    webgl_program_img: WebGLProgram;
    /**
     * 顶点位置
     */
    img_a_v_position = new c_webgl_ctx_props (
        `a_v_position`,
        c_webgl_rs_origin.t_attribute,
        c_webgl_rs_type.t_vec4
    );
    /**
     * 取样位置
     */
    img_v_f_position = new c_webgl_ctx_props (
        `v_f_position`,
        c_webgl_rs_origin.t_varying,
        c_webgl_rs_type.t_vec2
    );
    /**
     * 最终文件尺寸
     */
    img_u_f_file_size = new c_webgl_ctx_props (
        `u_f_file_size`,
        c_webgl_rs_origin.t_uniform,
        c_webgl_rs_type.t_vec2
    );
    /**
     * 图片位置
     */
    img_u_img_pos = new c_webgl_ctx_props (
        `u_img_pos`,
        c_webgl_rs_origin.t_uniform,
        c_webgl_rs_type.t_vec2
    );
    /**
     * 图片尺寸
     */
    img_u_img_size = new c_webgl_ctx_props (
        `u_img_size`,
        c_webgl_rs_origin.t_uniform,
        c_webgl_rs_type.t_vec2
    );
    /**
     * 纹理
     */
    img_u_img_tex = new c_webgl_ctx_props (
        `u_img_tex`,
        c_webgl_rs_origin.t_uniform,
        c_webgl_rs_type.t_2d
    );
    /**
     * 顶点数据位置
     */
    img_vertex_location: number;

    componentDidMount () {
        this.webgl_canvas = this.webgl_canvas_ref.current;
        this.webgl_ctx = this.webgl_canvas.getContext (`webgl`);

        this.d2_canvas = this.d2_canvas_ref.current;
        this.d2_ctx = this.d2_canvas.getContext (`2d`);

        this.webgl_program_round_rect = c_webgl.f_create_program (
            this.webgl_ctx,
`
precision mediump float;
${this.rr_a_v_position.f_get_txt_define()}
${this.rr_v_f_position.f_get_txt_define()}
${this.rr_u_f_size.f_get_txt_define()}
${this.rr_u_radius_lt.f_get_txt_define()}
${this.rr_u_radius_rt.f_get_txt_define()}
${this.rr_u_radius_rb.f_get_txt_define()}
${this.rr_u_radius_lb.f_get_txt_define()}
${this.rr_u_color.f_get_txt_define()}
${this.rr_u_current_code.f_get_txt_define()}
${this.rr_u_code_1_line_width.f_get_txt_define()}
${this.rr_u_code_2_fade_distance.f_get_txt_define()}
${this.rr_u_code_2_speed.f_get_txt_define()}
${this.rr_u_code_3_fade_distance.f_get_txt_define()}
${this.rr_u_code_3_speed.f_get_txt_define()}
void main () {
    gl_Position = ${this.rr_a_v_position.name};
    ${this.rr_v_f_position.name} = (gl_Position.xy * 0.5 + vec2 (0.5)) * ${this.rr_u_f_size.name};
}
`,
`
precision mediump float;
precision mediump sampler2D;
${this.rr_v_f_position.f_get_txt_define()}
${this.rr_u_f_size.f_get_txt_define()}
${this.rr_u_radius_lt.f_get_txt_define()}
${this.rr_u_radius_rt.f_get_txt_define()}
${this.rr_u_radius_rb.f_get_txt_define()}
${this.rr_u_radius_lb.f_get_txt_define()}
${this.rr_u_color.f_get_txt_define()}
${this.rr_u_current_code.f_get_txt_define()}
${this.rr_u_code_1_line_width.f_get_txt_define()}
${this.rr_u_code_2_fade_distance.f_get_txt_define()}
${this.rr_u_code_2_speed.f_get_txt_define()}
${this.rr_u_code_3_fade_distance.f_get_txt_define()}
${this.rr_u_code_3_speed.f_get_txt_define()}
float code_0_opacity () {
    return 1.0;
}
float code_1_opacity (float border_distance) {
    return step (border_distance, ${this.rr_u_code_1_line_width.name});
}
float code_2_opacity (float border_distance) {
    float opacity = clamp (border_distance / ${this.rr_u_code_2_fade_distance.name}, 0.0, 1.0);
    opacity = pow (opacity, pow (2.0, ${this.rr_u_code_2_speed.name}));
    return 1.0 - opacity;
}
float code_3_opacity (float border_distance) {
    float opacity = clamp (border_distance / ${this.rr_u_code_3_fade_distance.name}, 0.0, 1.0);
    opacity = pow (opacity, pow (2.0, ${this.rr_u_code_3_speed.name}));
    return opacity;
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
    float judge_lt = step (${this.rr_v_f_position.name}.x, ${this.rr_u_radius_lt.name}) * step (${this.rr_u_f_size.name}.y - ${this.rr_u_radius_lt.name}, ${this.rr_v_f_position.name}.y);
    // 右上角
    float judge_rt = step (${this.rr_u_f_size.name}.x - ${this.rr_u_radius_rt.name}, ${this.rr_v_f_position.name}.x) * step (${this.rr_u_f_size.name}.y - ${this.rr_u_radius_rt.name}, ${this.rr_v_f_position.name}.y);
    // 右下角
    float judge_rb = step (${this.rr_u_f_size.name}.x - ${this.rr_u_radius_rb.name}, ${this.rr_v_f_position.name}.x) * step (${this.rr_v_f_position.name}.y, ${this.rr_u_radius_rb.name});
    // 在左下角
    float judge_lb = step (${this.rr_v_f_position.name}.x, ${this.rr_u_radius_lb.name}) * step (${this.rr_v_f_position.name}.y, ${this.rr_u_radius_lb.name});

    // 左上角带来的蒙版
    float judge_lt_opacity = distance_opacity (${this.rr_u_radius_lt.name}, vec2 (${this.rr_u_radius_lt.name}, ${this.rr_u_f_size.name}.y - ${this.rr_u_radius_lt.name}), ${this.rr_v_f_position.name}) * judge_lt + (1.0 - judge_lt);
    // 右上角带来的蒙版
    float judge_rt_opacity = distance_opacity (${this.rr_u_radius_rt.name}, vec2 (${this.rr_u_f_size.name}.x - ${this.rr_u_radius_rt.name}, ${this.rr_u_f_size.name}.y - ${this.rr_u_radius_rt.name}), ${this.rr_v_f_position.name}) * judge_rt + (1.0 - judge_rt);
    // 右下角带来的蒙版
    float judge_rb_opacity = distance_opacity (${this.rr_u_radius_rb.name}, vec2 (${this.rr_u_f_size.name}.x - ${this.rr_u_radius_rb.name}, ${this.rr_u_radius_rb.name}),  ${this.rr_v_f_position.name}) * judge_rb + (1.0 - judge_rb);
    // 左下角带来的蒙版
    float judge_lb_opacity = distance_opacity (${this.rr_u_radius_lb.name}, vec2 (${this.rr_u_radius_lb.name}, ${this.rr_u_radius_lb.name}), ${this.rr_v_f_position.name}) * judge_lb + (1.0 - judge_lb);

    // 核心形状的模板
    float opacity_shape = judge_lt_opacity * judge_rt_opacity * judge_rb_opacity * judge_lb_opacity;

    // 能够产生的最大距离
    float distance_max = max (${this.rr_u_f_size.name}.x, ${this.rr_u_f_size.name}.y);
    // 左上角带来的距离
    float judge_lt_distance = distance_rel_border (${this.rr_u_radius_lt.name}, vec2 (${this.rr_u_radius_lt.name}, ${this.rr_u_f_size.name}.y - ${this.rr_u_radius_lt.name}), ${this.rr_v_f_position.name}) * judge_lt + distance_max * (1.0 - judge_lt);
    // 右上角带来的距离
    float judge_rt_distance = distance_rel_border (${this.rr_u_radius_rt.name}, vec2 (${this.rr_u_f_size.name}.x - ${this.rr_u_radius_rt.name}, ${this.rr_u_f_size.name}.y - ${this.rr_u_radius_rt.name}), ${this.rr_v_f_position.name}) * judge_rt + distance_max * (1.0 - judge_rt);
    // 右下角带来的距离1
    float judge_rb_distance = distance_rel_border (${this.rr_u_radius_rb.name}, vec2 (${this.rr_u_f_size.name}.x - ${this.rr_u_radius_rb.name}, ${this.rr_u_radius_rb.name}),  ${this.rr_v_f_position.name}) * judge_rb + distance_max * (1.0 - judge_rb);
    // 左下角带来的距离
    float judge_lb_distance = distance_rel_border (${this.rr_u_radius_lb.name}, vec2 (${this.rr_u_radius_lb.name}, ${this.rr_u_radius_lb.name}), ${this.rr_v_f_position.name}) * judge_lb + distance_max * (1.0 - judge_lb);

    // 上边距
    float distance_top = ${this.rr_u_f_size.name}.y - ${this.rr_v_f_position.name}.y;
    // 右边距
    float distance_right = ${this.rr_u_f_size.name}.x - ${this.rr_v_f_position.name}.x;
    // 下边距
    float distance_bottom = ${this.rr_v_f_position.name}.y;
    // 左边距
    float distance_left = ${this.rr_v_f_position.name}.x;

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
    float judge_code_0 = step (0.0 - 0.1, ${this.rr_u_current_code.name}) * step (${this.rr_u_current_code.name}, 0.0 + 0.1);
    // 模式 1
    float judge_code_1 = step (1.0 - 0.1, ${this.rr_u_current_code.name}) * step (${this.rr_u_current_code.name}, 1.0 + 0.1);
    // 模式 2
    float judge_code_2 = step (2.0 - 0.1, ${this.rr_u_current_code.name}) * step (${this.rr_u_current_code.name}, 2.0 + 0.1);
    // 模式 3
    float judge_code_3 = step (3.0 - 0.1, ${this.rr_u_current_code.name}) * step (${this.rr_u_current_code.name}, 3.0 + 0.1);

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
    gl_FragColor = ${this.rr_u_color.name} * vec4 (1.0, 1.0, 1.0, opacity_shape * opacity_code);
}
`
        );
        // 初始化参数
        this.rr_u_f_size.f_init (this.webgl_ctx, this.webgl_program_round_rect);
        this.rr_u_radius_lt.f_init (this.webgl_ctx, this.webgl_program_round_rect);
        this.rr_u_radius_rt.f_init (this.webgl_ctx, this.webgl_program_round_rect);
        this.rr_u_radius_rb.f_init (this.webgl_ctx, this.webgl_program_round_rect);
        this.rr_u_radius_lb.f_init (this.webgl_ctx, this.webgl_program_round_rect);
        this.rr_u_color.f_init (this.webgl_ctx, this.webgl_program_round_rect);
        this.rr_u_current_code.f_init (this.webgl_ctx, this.webgl_program_round_rect);
        this.rr_u_code_1_line_width.f_init (this.webgl_ctx, this.webgl_program_round_rect);
        this.rr_u_code_2_fade_distance.f_init (this.webgl_ctx, this.webgl_program_round_rect);
        this.rr_u_code_2_speed.f_init (this.webgl_ctx, this.webgl_program_round_rect);
        this.rr_u_code_3_fade_distance.f_init (this.webgl_ctx, this.webgl_program_round_rect);
        this.rr_u_code_3_speed.f_init (this.webgl_ctx, this.webgl_program_round_rect);
        this.rr_vertex_location = this.webgl_ctx.getAttribLocation (this.webgl_program_round_rect, this.rr_a_v_position.name);

        this.webgl_program_img = c_webgl.f_create_program (
            this.webgl_ctx,
`
precision mediump float;
${this.img_a_v_position.f_get_txt_define()}
${this.img_v_f_position.f_get_txt_define()}
${this.img_u_f_file_size.f_get_txt_define()}
${this.img_u_img_pos.f_get_txt_define()}
${this.img_u_img_size.f_get_txt_define()}
void main () {
    gl_Position = ${this.rr_a_v_position.name};
    ${this.rr_v_f_position.name} = (gl_Position.xy * 0.5 + vec2 (0.5)) * ${this.img_u_f_file_size.name};
}
`,
`
precision mediump float;
precision mediump sampler2D;
${this.img_v_f_position.f_get_txt_define()}
${this.img_u_f_file_size.f_get_txt_define()}
${this.img_u_img_pos.f_get_txt_define()}
${this.img_u_img_size.f_get_txt_define()}
${this.img_u_img_tex.f_get_txt_define()}
void main () {
    vec2 pos = vec2 ((${this.img_v_f_position.name}.x - ${this.img_u_img_pos.name}.x) / ${this.img_u_img_size.name}.x, (${this.img_v_f_position.name}.y - ${this.img_u_img_pos.name}.y) / ${this.img_u_img_size.name}.y);
    vec4 tex_color = texture2D (${this.img_u_img_tex.name}, pos);
    float judge_in_tex = step (${this.img_u_img_pos.name}.x, ${this.img_v_f_position.name}.x) 
        * step (${this.img_v_f_position.name}.x, ${this.img_u_img_pos.name}.x + ${this.img_u_img_size.name}.x)
        * step (${this.img_u_img_pos.name}.y, ${this.img_v_f_position.name}.y) 
        * step (${this.img_v_f_position.name}.y, ${this.img_u_img_pos.name}.y + ${this.img_u_img_size.name}.y);

    // 最终颜色
    gl_FragColor = tex_color * judge_in_tex + vec4 (0.0, 0.0, 0.0, 0.0) * (1.0 - judge_in_tex);
}
`
        );
        this.img_u_f_file_size.f_init (this.webgl_ctx, this.webgl_program_img);
        this.img_u_img_pos.f_init (this.webgl_ctx, this.webgl_program_img);
        this.img_u_img_size.f_init (this.webgl_ctx, this.webgl_program_img);
        this.img_u_img_tex.f_init (this.webgl_ctx, this.webgl_program_img);
        this.img_vertex_location = this.webgl_ctx.getAttribLocation (this.webgl_program_img, this.img_a_v_position.name);

        // 初始化顶点数据
        let vertex_data = new Float32Array ([
            1,  1, 0, 1,
            1, -1, 0, 1,
           -1, -1, 0, 1,
           -1,  1, 0, 1
       ]);
        this.vertex_buffer = this.webgl_ctx.createBuffer ();
        this.webgl_ctx.bindBuffer (this.webgl_ctx.ARRAY_BUFFER, this.vertex_buffer);
        this.webgl_ctx.bufferData (this.webgl_ctx.ARRAY_BUFFER, vertex_data, this.webgl_ctx.STATIC_DRAW);

        // 初始化网格数据
        let mesh_data = new Uint8Array ([
            0, 1, 2,
            0, 2, 3
        ]);
        let mesh_buffer = this.webgl_ctx.createBuffer ();
        this.webgl_ctx.bindBuffer (this.webgl_ctx.ELEMENT_ARRAY_BUFFER, mesh_buffer);
        this.webgl_ctx.bufferData (this.webgl_ctx.ELEMENT_ARRAY_BUFFER, mesh_data, this.webgl_ctx.STATIC_DRAW);

        this.big_img_rt = this.webgl_ctx.createTexture ();
        this.webgl_ctx.activeTexture (this.webgl_ctx.TEXTURE0);
        this.webgl_ctx.bindTexture (this.webgl_ctx.TEXTURE_2D, this.big_img_rt);
        this.webgl_ctx.texParameteri (this.webgl_ctx.TEXTURE_2D, this.webgl_ctx.TEXTURE_MIN_FILTER, this.webgl_ctx.NEAREST);
        this.webgl_ctx.texParameteri (this.webgl_ctx.TEXTURE_2D, this.webgl_ctx.TEXTURE_MAG_FILTER, this.webgl_ctx.NEAREST);
        this.webgl_ctx.texParameteri (this.webgl_ctx.TEXTURE_2D, this.webgl_ctx.TEXTURE_WRAP_S, this.webgl_ctx.CLAMP_TO_EDGE);
        this.webgl_ctx.texParameteri (this.webgl_ctx.TEXTURE_2D, this.webgl_ctx.TEXTURE_WRAP_T, this.webgl_ctx.CLAMP_TO_EDGE);

        this.big_img_fbo = this.webgl_ctx.createFramebuffer ();
        this.webgl_ctx.bindFramebuffer (this.webgl_ctx.FRAMEBUFFER, this.big_img_fbo);
        this.webgl_ctx.framebufferTexture2D (this.webgl_ctx.FRAMEBUFFER, this.webgl_ctx.COLOR_ATTACHMENT0, this.webgl_ctx.TEXTURE_2D, this.big_img_rt, 0);

        this.componentDidUpdate ();
    }

    componentDidUpdate () {
        let record = c_index_client.f_get_current_record ();
        let width = Math.max (record.radius_lt + record.radius_rt, record.radius_lb + record.radius_rb, record.min_size_width);
        let height = Math.max (record.radius_lt + record.radius_lb, record.radius_rt + record.radius_rb, record.min_size_height);
        let serration_width = Math.ceil (width * record.serration);
        let serration_height = Math.ceil (height * record.serration);
        let file_width = Math.ceil (width + record.margin_left + record.margin_right);
        let file_height = Math.ceil (height + record.margin_top + record.margin_bottom);
        let with_margin_width = Math.ceil (file_width * record.serration);
        let with_margin_height = Math.ceil (file_height * record.serration);
        this.webgl_canvas.width = with_margin_width;
        this.webgl_canvas.height = with_margin_height;
        
        // 把圆角矩形绘制到帧缓冲区
        this.webgl_ctx.useProgram (this.webgl_program_round_rect);
        this.rr_u_f_size.f_fill ([width, height]);
        this.rr_u_radius_lt.f_fill (record.radius_lt);
        this.rr_u_radius_rt.f_fill (record.radius_rt);
        this.rr_u_radius_rb.f_fill (record.radius_rb);
        this.rr_u_radius_lb.f_fill (record.radius_lb);
        let list_color = c_webgl.f_parse_hex_to_rgba (record.color);
        this.rr_u_color.f_fill (list_color);
        this.rr_u_current_code.f_fill (record.current_code);
        this.rr_u_code_1_line_width.f_fill (record.code_1_line_width);
        this.rr_u_code_2_fade_distance.f_fill (record.code_2_fade_distance);
        this.rr_u_code_2_speed.f_fill (record.code_2_speed_offset);
        this.rr_u_code_3_fade_distance.f_fill (record.code_3_fade_distance);
        this.rr_u_code_3_speed.f_fill (record.code_3_speed_offset);
        this.webgl_ctx.bindBuffer (this.webgl_ctx.ARRAY_BUFFER, this.vertex_buffer);
        this.webgl_ctx.vertexAttribPointer (this.rr_vertex_location, 4, this.webgl_ctx.FLOAT, false, Float32Array.BYTES_PER_ELEMENT * 4, 0);
        this.webgl_ctx.enableVertexAttribArray (this.rr_vertex_location);

        this.webgl_ctx.activeTexture (this.webgl_ctx.TEXTURE0);
        this.webgl_ctx.bindTexture (this.webgl_ctx.TEXTURE_2D, this.big_img_rt);
        this.webgl_ctx.texImage2D (this.webgl_ctx.TEXTURE_2D, 0, this.webgl_ctx.RGBA, serration_width, serration_height, 0, this.webgl_ctx.RGBA, this.webgl_ctx.getExtension('OES_texture_half_float').HALF_FLOAT_OES, null);

        this.webgl_ctx.bindFramebuffer (this.webgl_ctx.FRAMEBUFFER, this.big_img_fbo);
        this.webgl_ctx.framebufferTexture2D (this.webgl_ctx.FRAMEBUFFER, this.webgl_ctx.COLOR_ATTACHMENT0, this.webgl_ctx.TEXTURE_2D, this.big_img_rt, 0);
        
        this.webgl_ctx.blendFunc (this.webgl_ctx.SRC_ALPHA, this.webgl_ctx.ONE_MINUS_SRC_ALPHA);
        this.webgl_ctx.enable (this.webgl_ctx.BLEND);
        this.webgl_ctx.viewport (0, 0, serration_width, serration_height);
        this.webgl_ctx.clear (this.webgl_ctx.COLOR_BUFFER_BIT);
        this.webgl_ctx.drawElements (this.webgl_ctx.TRIANGLES, 6, this.webgl_ctx.UNSIGNED_BYTE, 0);

        // 把帧缓冲区绘制到屏幕
        let draw = (target: WebGLFramebuffer) => {
            this.webgl_ctx.useProgram (this.webgl_program_img);
            this.img_u_f_file_size.f_fill ([with_margin_width, with_margin_height])
            this.img_u_img_pos.f_fill ([record.margin_left * record.serration, record.margin_bottom * record.serration]);
            this.img_u_img_size.f_fill ([serration_width, serration_height]);
            this.img_u_img_tex.f_fill (0);
            this.webgl_ctx.bindBuffer (this.webgl_ctx.ARRAY_BUFFER, this.vertex_buffer);
            this.webgl_ctx.vertexAttribPointer (this.img_vertex_location, 4, this.webgl_ctx.FLOAT, false, Float32Array.BYTES_PER_ELEMENT * 4, 0);
            this.webgl_ctx.enableVertexAttribArray (this.img_vertex_location);

            this.webgl_ctx.blendFunc (this.webgl_ctx.SRC_ALPHA, this.webgl_ctx.ONE_MINUS_SRC_ALPHA);
            this.webgl_ctx.enable (this.webgl_ctx.BLEND);
            this.webgl_ctx.bindFramebuffer (this.webgl_ctx.FRAMEBUFFER, target);
            this.webgl_ctx.viewport (0, 0, with_margin_width, with_margin_height);
            this.webgl_ctx.clear (this.webgl_ctx.COLOR_BUFFER_BIT);
            this.webgl_ctx.drawElements (this.webgl_ctx.TRIANGLES, 6, this.webgl_ctx.UNSIGNED_BYTE, 0);
        };
        draw (null);

        // 克隆屏幕内容
        let screen_tex = this.webgl_ctx.createTexture ();
        this.webgl_ctx.activeTexture (this.webgl_ctx.TEXTURE1);
        this.webgl_ctx.bindTexture (this.webgl_ctx.TEXTURE_2D, screen_tex);
        this.webgl_ctx.texParameteri (this.webgl_ctx.TEXTURE_2D, this.webgl_ctx.TEXTURE_MIN_FILTER, this.webgl_ctx.NEAREST);
        this.webgl_ctx.texParameteri (this.webgl_ctx.TEXTURE_2D, this.webgl_ctx.TEXTURE_MAG_FILTER, this.webgl_ctx.NEAREST);
        this.webgl_ctx.texParameteri (this.webgl_ctx.TEXTURE_2D, this.webgl_ctx.TEXTURE_WRAP_S, this.webgl_ctx.CLAMP_TO_EDGE);
        this.webgl_ctx.texParameteri (this.webgl_ctx.TEXTURE_2D, this.webgl_ctx.TEXTURE_WRAP_T, this.webgl_ctx.CLAMP_TO_EDGE);
        let fboTextureType = this.webgl_ctx.getExtension ('OES_texture_half_float').HALF_FLOAT_OES;
        this.webgl_ctx.texImage2D (this.webgl_ctx.TEXTURE_2D, 0, this.webgl_ctx.RGBA, with_margin_width, with_margin_height, 0, this.webgl_ctx.RGBA, fboTextureType, null);

        // 帧缓冲区
        let fbo = this.webgl_ctx.createFramebuffer ();
        this.webgl_ctx.bindFramebuffer (this.webgl_ctx.FRAMEBUFFER, fbo);
        this.webgl_ctx.framebufferTexture2D (this.webgl_ctx.FRAMEBUFFER, this.webgl_ctx.COLOR_ATTACHMENT0, this.webgl_ctx.TEXTURE_2D, screen_tex, 0);
        draw (fbo);

        // 保存帧缓冲区的数据
        let fbo_data_float = new Float32Array (serration_width * serration_height * 4);
        this.webgl_ctx.bindFramebuffer (this.webgl_ctx.FRAMEBUFFER, fbo);
        this.webgl_ctx.readPixels (0, 0, serration_width, serration_height, this.webgl_ctx.RGBA, this.webgl_ctx.FLOAT, fbo_data_float);
        let fbo_data_uint = new Uint8Array (file_width * file_height * 4);
        let r: number, g: number, b: number, a: number;
        let serration_volume = record.serration ** 2;
        for (let x = 0; x < file_width; x++) {
            for (let y = 0; y < file_height; y++) {
                r = g = b = a = 0;
                for (let i_x = 0; i_x < record.serration; i_x++) {
                    for (let i_y = 0; i_y < record.serration; i_y++) {
                        let idx_origin = ((y * record.serration + i_y) * with_margin_width + x * record.serration + i_x) * 4;
                        r += fbo_data_float [idx_origin + 0];
                        g += fbo_data_float [idx_origin + 1];
                        b += fbo_data_float [idx_origin + 2];
                        a += fbo_data_float [idx_origin + 3];
                    };
                };
                let idx_target = (y * file_width + x) * 4;
                fbo_data_uint [idx_target + 0] = list_color [0] * 255;
                fbo_data_uint [idx_target + 1] = list_color [1] * 255;
                fbo_data_uint [idx_target + 2] = list_color [2] * 255;
                fbo_data_uint [idx_target + 3] = a / serration_volume * 255;
                // fbo_data_uint [idx_target + 3] = Math.max (a / serration_volume * 255, 1);
            };
        };
        let img_data = this.d2_ctx.createImageData (file_width, file_height);
        img_data.data.set (fbo_data_uint);
        this.d2_canvas.width = file_width;
        this.d2_canvas.height = file_height;
        this.d2_ctx.clearRect (0, 0, file_width, file_height);
        this.d2_ctx.putImageData (img_data, 0, 0);
        c_index_client.data_url = this.d2_canvas.toDataURL ('image/png', 1);
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

                // 源 - 圆角矩形
                c_modules.react.createElement (
                    c_dom_define.t_canvas,
                    {
                        ref: this.webgl_canvas_ref,
                        style: {
                            // [c_dom_define.s_background_color]: "black",
                            [c_dom_define.s_display]: c_dom_define.s_display_none
                        }
                    }
                ),
                // 附上边距后的圆角矩形
                c_modules.react.createElement (
                    c_dom_define.t_canvas,
                    {
                        ref: this.d2_canvas_ref,
                        style: {
                            // [c_dom_define.s_background_color]: "black",
                            [c_dom_define.s_display]: c_dom_define.s_display_block,
                            border: "black 1px dashed"
                        }
                    }
                )
            )
        );
    }
}

export default c_dom_right_preview;
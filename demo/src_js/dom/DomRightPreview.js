import NodeModules from "../NodeModules.js";
import DomDefine from "./DomDefine.js";
import UtilWebgl from "../util/UtilWebgl.js";
import WebglCtxProps from "../util/WebglCtxProps.js";
import WebglRSOrigin from "../util/WebglRSOrigin.js";
import WebglRSType from "../util/WebglRSType.js";
import IndexWindow from "../IndexWindow.js";
/**
 * 右边栏 - 图片预览
 */
class DomRightPreview extends NodeModules.react.Component {
    constructor() {
        super(...arguments);
        /**
         * 实例引用
         */
        this.webglCanvasRef = NodeModules.react.createRef();
        /**
         * 2d canvas 引用
         */
        this.d2CanvasRef = NodeModules.react.createRef();
        /**
         * 顶点位置
         */
        this.rrAPosition = new WebglCtxProps(`a_v_position`, WebglRSOrigin.ATTRIBUTE, WebglRSType.VEC4);
        /**
         * 取样位置
         */
        this.rrVPosition = new WebglCtxProps(`v_f_position`, WebglRSOrigin.VARYING, WebglRSType.VEC2);
        /**
         * 尺寸
         */
        this.rrUSize = new WebglCtxProps(`u_f_size`, WebglRSOrigin.UNIFORM, WebglRSType.VEC2);
        /**
         * 左上半径
         */
        this.rrURadiusLt = new WebglCtxProps(`u_radius_lt`, WebglRSOrigin.UNIFORM, WebglRSType.FLOAT);
        /**
         * 右上半径
         */
        this.rrURadiusRt = new WebglCtxProps(`u_radius_rt`, WebglRSOrigin.UNIFORM, WebglRSType.FLOAT);
        /**
         * 右下半径
         */
        this.rrURradiusRb = new WebglCtxProps(`u_radius_rb`, WebglRSOrigin.UNIFORM, WebglRSType.FLOAT);
        /**
         * 左下半径
         */
        this.rrURadiusLb = new WebglCtxProps(`u_radius_lb`, WebglRSOrigin.UNIFORM, WebglRSType.FLOAT);
        /**
         * 着色
         */
        this.rrUColor = new WebglCtxProps(`u_color`, WebglRSOrigin.UNIFORM, WebglRSType.VEC4);
        /**
         * 当前模式代号
         */
        this.rrUCurrentCode = new WebglCtxProps(`u_current_code`, WebglRSOrigin.UNIFORM, WebglRSType.FLOAT);
        /**
         * 线框模式 - 线宽
         */
        this.rrUCode1LineWidth = new WebglCtxProps(`u_code_1_line_width`, WebglRSOrigin.UNIFORM, WebglRSType.FLOAT);
        /**
         * 向内淡出 - 淡出距离
         */
        this.rrUCode2FadeDistance = new WebglCtxProps(`u_code_2_fade_distance`, WebglRSOrigin.UNIFORM, WebglRSType.FLOAT);
        /**
         * 向内淡出 - 淡出速度
         */
        this.rrUCode2Speed = new WebglCtxProps(`u_code_2_speed`, WebglRSOrigin.UNIFORM, WebglRSType.FLOAT);
        /**
         * 向内淡入 - 淡入距离
         */
        this.rrUCode3FadeDistance = new WebglCtxProps(`u_code_3_fade_distance`, WebglRSOrigin.UNIFORM, WebglRSType.FLOAT);
        /**
         * 向内淡出 - 淡入速度
         */
        this.rrUCode3Speed = new WebglCtxProps(`u_code_3_speed`, WebglRSOrigin.UNIFORM, WebglRSType.FLOAT);
        /**
         * 顶点位置
         */
        this.imgAPosition = new WebglCtxProps(`a_v_position`, WebglRSOrigin.ATTRIBUTE, WebglRSType.VEC4);
        /**
         * 取样位置
         */
        this.imgVPosition = new WebglCtxProps(`v_f_position`, WebglRSOrigin.VARYING, WebglRSType.VEC2);
        /**
         * 最终文件尺寸
         */
        this.imgUFileSize = new WebglCtxProps(`u_f_file_size`, WebglRSOrigin.UNIFORM, WebglRSType.VEC2);
        /**
         * 图片位置
         */
        this.imgUImgPos = new WebglCtxProps(`u_img_pos`, WebglRSOrigin.UNIFORM, WebglRSType.VEC2);
        /**
         * 图片尺寸
         */
        this.imgUImgSize = new WebglCtxProps(`u_img_size`, WebglRSOrigin.UNIFORM, WebglRSType.VEC2);
        /**
         * 纹理
         */
        this.imgUImgTex = new WebglCtxProps(`u_img_tex`, WebglRSOrigin.UNIFORM, WebglRSType.SAMPLER2D);
    }
    componentDidMount() {
        this.webglCanvas = this.webglCanvasRef.current;
        this.webglCtx = this.webglCanvas.getContext(`webgl`);
        this.d2Canvas = this.d2CanvasRef.current;
        this.d2Ctx = this.d2Canvas.getContext(`2d`);
        this.webglProgramRoundRect = UtilWebgl.createProgram(this.webglCtx, `
precision mediump float;
${this.rrAPosition.getTxtDefine()}
${this.rrVPosition.getTxtDefine()}
${this.rrUSize.getTxtDefine()}
${this.rrURadiusLt.getTxtDefine()}
${this.rrURadiusRt.getTxtDefine()}
${this.rrURradiusRb.getTxtDefine()}
${this.rrURadiusLb.getTxtDefine()}
${this.rrUColor.getTxtDefine()}
${this.rrUCurrentCode.getTxtDefine()}
${this.rrUCode1LineWidth.getTxtDefine()}
${this.rrUCode2FadeDistance.getTxtDefine()}
${this.rrUCode2Speed.getTxtDefine()}
${this.rrUCode3FadeDistance.getTxtDefine()}
${this.rrUCode3Speed.getTxtDefine()}
void main () {
    gl_Position = ${this.rrAPosition.name};
    ${this.rrVPosition.name} = (gl_Position.xy * 0.5 + vec2 (0.5)) * ${this.rrUSize.name};
}
`, `
precision mediump float;
precision mediump sampler2D;
${this.rrVPosition.getTxtDefine()}
${this.rrUSize.getTxtDefine()}
${this.rrURadiusLt.getTxtDefine()}
${this.rrURadiusRt.getTxtDefine()}
${this.rrURradiusRb.getTxtDefine()}
${this.rrURadiusLb.getTxtDefine()}
${this.rrUColor.getTxtDefine()}
${this.rrUCurrentCode.getTxtDefine()}
${this.rrUCode1LineWidth.getTxtDefine()}
${this.rrUCode2FadeDistance.getTxtDefine()}
${this.rrUCode2Speed.getTxtDefine()}
${this.rrUCode3FadeDistance.getTxtDefine()}
${this.rrUCode3Speed.getTxtDefine()}
float code_0_opacity () {
    return 1.0;
}
float code_1_opacity (float border_distance) {
    return step (border_distance, ${this.rrUCode1LineWidth.name});
}
float code_2_opacity (float border_distance) {
    float opacity = clamp (border_distance / ${this.rrUCode2FadeDistance.name}, 0.0, 1.0);
    opacity = pow (opacity, pow (2.0, ${this.rrUCode2Speed.name}));
    return 1.0 - opacity;
}
float code_3_opacity (float border_distance) {
    float opacity = clamp (border_distance / ${this.rrUCode3FadeDistance.name}, 0.0, 1.0);
    opacity = pow (opacity, pow (2.0, ${this.rrUCode3Speed.name}));
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
    float judge_lt = step (${this.rrVPosition.name}.x, ${this.rrURadiusLt.name}) * step (${this.rrUSize.name}.y - ${this.rrURadiusLt.name}, ${this.rrVPosition.name}.y);
    // 右上角
    float judge_rt = step (${this.rrUSize.name}.x - ${this.rrURadiusRt.name}, ${this.rrVPosition.name}.x) * step (${this.rrUSize.name}.y - ${this.rrURadiusRt.name}, ${this.rrVPosition.name}.y);
    // 右下角
    float judge_rb = step (${this.rrUSize.name}.x - ${this.rrURradiusRb.name}, ${this.rrVPosition.name}.x) * step (${this.rrVPosition.name}.y, ${this.rrURradiusRb.name});
    // 在左下角
    float judge_lb = step (${this.rrVPosition.name}.x, ${this.rrURadiusLb.name}) * step (${this.rrVPosition.name}.y, ${this.rrURadiusLb.name});

    // 左上角带来的蒙版
    float judge_lt_opacity = distance_opacity (${this.rrURadiusLt.name}, vec2 (${this.rrURadiusLt.name}, ${this.rrUSize.name}.y - ${this.rrURadiusLt.name}), ${this.rrVPosition.name}) * judge_lt + (1.0 - judge_lt);
    // 右上角带来的蒙版
    float judge_rt_opacity = distance_opacity (${this.rrURadiusRt.name}, vec2 (${this.rrUSize.name}.x - ${this.rrURadiusRt.name}, ${this.rrUSize.name}.y - ${this.rrURadiusRt.name}), ${this.rrVPosition.name}) * judge_rt + (1.0 - judge_rt);
    // 右下角带来的蒙版
    float judge_rb_opacity = distance_opacity (${this.rrURradiusRb.name}, vec2 (${this.rrUSize.name}.x - ${this.rrURradiusRb.name}, ${this.rrURradiusRb.name}),  ${this.rrVPosition.name}) * judge_rb + (1.0 - judge_rb);
    // 左下角带来的蒙版
    float judge_lb_opacity = distance_opacity (${this.rrURadiusLb.name}, vec2 (${this.rrURadiusLb.name}, ${this.rrURadiusLb.name}), ${this.rrVPosition.name}) * judge_lb + (1.0 - judge_lb);

    // 核心形状的模板
    float opacity_shape = judge_lt_opacity * judge_rt_opacity * judge_rb_opacity * judge_lb_opacity;

    // 能够产生的最大距离
    float distance_max = max (${this.rrUSize.name}.x, ${this.rrUSize.name}.y);
    // 左上角带来的距离
    float judge_lt_distance = distance_rel_border (${this.rrURadiusLt.name}, vec2 (${this.rrURadiusLt.name}, ${this.rrUSize.name}.y - ${this.rrURadiusLt.name}), ${this.rrVPosition.name}) * judge_lt + distance_max * (1.0 - judge_lt);
    // 右上角带来的距离
    float judge_rt_distance = distance_rel_border (${this.rrURadiusRt.name}, vec2 (${this.rrUSize.name}.x - ${this.rrURadiusRt.name}, ${this.rrUSize.name}.y - ${this.rrURadiusRt.name}), ${this.rrVPosition.name}) * judge_rt + distance_max * (1.0 - judge_rt);
    // 右下角带来的距离1
    float judge_rb_distance = distance_rel_border (${this.rrURradiusRb.name}, vec2 (${this.rrUSize.name}.x - ${this.rrURradiusRb.name}, ${this.rrURradiusRb.name}),  ${this.rrVPosition.name}) * judge_rb + distance_max * (1.0 - judge_rb);
    // 左下角带来的距离
    float judge_lb_distance = distance_rel_border (${this.rrURadiusLb.name}, vec2 (${this.rrURadiusLb.name}, ${this.rrURadiusLb.name}), ${this.rrVPosition.name}) * judge_lb + distance_max * (1.0 - judge_lb);

    // 上边距
    float distance_top = ${this.rrUSize.name}.y - ${this.rrVPosition.name}.y;
    // 右边距
    float distance_right = ${this.rrUSize.name}.x - ${this.rrVPosition.name}.x;
    // 下边距
    float distance_bottom = ${this.rrVPosition.name}.y;
    // 左边距
    float distance_left = ${this.rrVPosition.name}.x;

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
    float judge_code_0 = step (0.0 - 0.1, ${this.rrUCurrentCode.name}) * step (${this.rrUCurrentCode.name}, 0.0 + 0.1);
    // 模式 1
    float judge_code_1 = step (1.0 - 0.1, ${this.rrUCurrentCode.name}) * step (${this.rrUCurrentCode.name}, 1.0 + 0.1);
    // 模式 2
    float judge_code_2 = step (2.0 - 0.1, ${this.rrUCurrentCode.name}) * step (${this.rrUCurrentCode.name}, 2.0 + 0.1);
    // 模式 3
    float judge_code_3 = step (3.0 - 0.1, ${this.rrUCurrentCode.name}) * step (${this.rrUCurrentCode.name}, 3.0 + 0.1);

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
    gl_FragColor = ${this.rrUColor.name} * vec4 (1.0, 1.0, 1.0, opacity_shape * opacity_code);
}
`);
        // 初始化参数
        this.rrUSize.Init(this.webglCtx, this.webglProgramRoundRect);
        this.rrURadiusLt.Init(this.webglCtx, this.webglProgramRoundRect);
        this.rrURadiusRt.Init(this.webglCtx, this.webglProgramRoundRect);
        this.rrURradiusRb.Init(this.webglCtx, this.webglProgramRoundRect);
        this.rrURadiusLb.Init(this.webglCtx, this.webglProgramRoundRect);
        this.rrUColor.Init(this.webglCtx, this.webglProgramRoundRect);
        this.rrUCurrentCode.Init(this.webglCtx, this.webglProgramRoundRect);
        this.rrUCode1LineWidth.Init(this.webglCtx, this.webglProgramRoundRect);
        this.rrUCode2FadeDistance.Init(this.webglCtx, this.webglProgramRoundRect);
        this.rrUCode2Speed.Init(this.webglCtx, this.webglProgramRoundRect);
        this.rrUCode3FadeDistance.Init(this.webglCtx, this.webglProgramRoundRect);
        this.rrUCode3Speed.Init(this.webglCtx, this.webglProgramRoundRect);
        this.rrVertexLocation = this.webglCtx.getAttribLocation(this.webglProgramRoundRect, this.rrAPosition.name);
        this.webglProgramImg = UtilWebgl.createProgram(this.webglCtx, `
precision mediump float;
${this.imgAPosition.getTxtDefine()}
${this.imgVPosition.getTxtDefine()}
${this.imgUFileSize.getTxtDefine()}
${this.imgUImgPos.getTxtDefine()}
${this.imgUImgSize.getTxtDefine()}
void main () {
    gl_Position = ${this.rrAPosition.name};
    ${this.rrVPosition.name} = (gl_Position.xy * 0.5 + vec2 (0.5)) * ${this.imgUFileSize.name};
}
`, `
precision mediump float;
precision mediump sampler2D;
${this.imgVPosition.getTxtDefine()}
${this.imgUFileSize.getTxtDefine()}
${this.imgUImgPos.getTxtDefine()}
${this.imgUImgSize.getTxtDefine()}
${this.imgUImgTex.getTxtDefine()}
void main () {
    vec2 pos = vec2 ((${this.imgVPosition.name}.x - ${this.imgUImgPos.name}.x) / ${this.imgUImgSize.name}.x, (${this.imgVPosition.name}.y - ${this.imgUImgPos.name}.y) / ${this.imgUImgSize.name}.y);
    vec4 tex_color = texture2D (${this.imgUImgTex.name}, pos);
    float judge_in_tex = step (${this.imgUImgPos.name}.x, ${this.imgVPosition.name}.x) 
        * step (${this.imgVPosition.name}.x, ${this.imgUImgPos.name}.x + ${this.imgUImgSize.name}.x)
        * step (${this.imgUImgPos.name}.y, ${this.imgVPosition.name}.y) 
        * step (${this.imgVPosition.name}.y, ${this.imgUImgPos.name}.y + ${this.imgUImgSize.name}.y);

    // 最终颜色
    gl_FragColor = tex_color * judge_in_tex + vec4 (0.0, 0.0, 0.0, 0.0) * (1.0 - judge_in_tex);
}
`);
        this.imgUFileSize.Init(this.webglCtx, this.webglProgramImg);
        this.imgUImgPos.Init(this.webglCtx, this.webglProgramImg);
        this.imgUImgSize.Init(this.webglCtx, this.webglProgramImg);
        this.imgUImgTex.Init(this.webglCtx, this.webglProgramImg);
        this.imgVertexLocation = this.webglCtx.getAttribLocation(this.webglProgramImg, this.imgAPosition.name);
        // 初始化顶点数据
        let vertexData = new Float32Array([
            1, 1, 0, 1,
            1, -1, 0, 1,
            -1, -1, 0, 1,
            -1, 1, 0, 1
        ]);
        this.vertexBuffer = this.webglCtx.createBuffer();
        this.webglCtx.bindBuffer(this.webglCtx.ARRAY_BUFFER, this.vertexBuffer);
        this.webglCtx.bufferData(this.webglCtx.ARRAY_BUFFER, vertexData, this.webglCtx.STATIC_DRAW);
        // 初始化网格数据
        let meshData = new Uint8Array([
            0, 1, 2,
            0, 2, 3
        ]);
        let meshBuffer = this.webglCtx.createBuffer();
        this.webglCtx.bindBuffer(this.webglCtx.ELEMENT_ARRAY_BUFFER, meshBuffer);
        this.webglCtx.bufferData(this.webglCtx.ELEMENT_ARRAY_BUFFER, meshData, this.webglCtx.STATIC_DRAW);
        this.bigImgRt = this.webglCtx.createTexture();
        this.webglCtx.activeTexture(this.webglCtx.TEXTURE0);
        this.webglCtx.bindTexture(this.webglCtx.TEXTURE_2D, this.bigImgRt);
        this.webglCtx.texParameteri(this.webglCtx.TEXTURE_2D, this.webglCtx.TEXTURE_MIN_FILTER, this.webglCtx.NEAREST);
        this.webglCtx.texParameteri(this.webglCtx.TEXTURE_2D, this.webglCtx.TEXTURE_MAG_FILTER, this.webglCtx.NEAREST);
        this.webglCtx.texParameteri(this.webglCtx.TEXTURE_2D, this.webglCtx.TEXTURE_WRAP_S, this.webglCtx.CLAMP_TO_EDGE);
        this.webglCtx.texParameteri(this.webglCtx.TEXTURE_2D, this.webglCtx.TEXTURE_WRAP_T, this.webglCtx.CLAMP_TO_EDGE);
        this.bigImgFbo = this.webglCtx.createFramebuffer();
        this.webglCtx.bindFramebuffer(this.webglCtx.FRAMEBUFFER, this.bigImgFbo);
        this.webglCtx.framebufferTexture2D(this.webglCtx.FRAMEBUFFER, this.webglCtx.COLOR_ATTACHMENT0, this.webglCtx.TEXTURE_2D, this.bigImgRt, 0);
        this.componentDidUpdate();
    }
    componentDidUpdate() {
        let record = IndexWindow.getCurrentRecord();
        let width = Math.max(record.radiusLT + record.radiusRT, record.radiusLB + record.radiusRB, record.minSizeWidth);
        let height = Math.max(record.radiusLT + record.radiusLB, record.radiusRT + record.radiusRB, record.minSizeHeight);
        let serrationWidth = Math.ceil(width * record.serration);
        let serrationHeight = Math.ceil(height * record.serration);
        let fileWidth = Math.ceil(width + record.marginLeft + record.marginRight);
        let fileHeight = Math.ceil(height + record.marginTop + record.marginBottom);
        let withMarginWidth = Math.ceil(fileWidth * record.serration);
        let withMarginHeight = Math.ceil(fileHeight * record.serration);
        this.webglCanvas.width = withMarginWidth;
        this.webglCanvas.height = withMarginHeight;
        // 把圆角矩形绘制到帧缓冲区
        this.webglCtx.useProgram(this.webglProgramRoundRect);
        this.rrUSize.fill([width, height]);
        this.rrURadiusLt.fill(record.radiusLT);
        this.rrURadiusRt.fill(record.radiusRT);
        this.rrURradiusRb.fill(record.radiusRB);
        this.rrURadiusLb.fill(record.radiusLB);
        let listColor = UtilWebgl.parseHexToListNumber(record.color);
        this.rrUColor.fill(listColor);
        this.rrUCurrentCode.fill(record.currentCode);
        this.rrUCode1LineWidth.fill(record.code1LineWidth);
        this.rrUCode2FadeDistance.fill(record.code2FadeDistance);
        this.rrUCode2Speed.fill(record.code2SpeedOffset);
        this.rrUCode3FadeDistance.fill(record.code3FadeDistance);
        this.rrUCode3Speed.fill(record.code3SpeedOffset);
        this.webglCtx.bindBuffer(this.webglCtx.ARRAY_BUFFER, this.vertexBuffer);
        this.webglCtx.vertexAttribPointer(this.rrVertexLocation, 4, this.webglCtx.FLOAT, false, Float32Array.BYTES_PER_ELEMENT * 4, 0);
        this.webglCtx.enableVertexAttribArray(this.rrVertexLocation);
        this.webglCtx.activeTexture(this.webglCtx.TEXTURE0);
        this.webglCtx.bindTexture(this.webglCtx.TEXTURE_2D, this.bigImgRt);
        this.webglCtx.texImage2D(this.webglCtx.TEXTURE_2D, 0, this.webglCtx.RGBA, serrationWidth, serrationHeight, 0, this.webglCtx.RGBA, this.webglCtx.getExtension('OES_texture_half_float').HALF_FLOAT_OES, null);
        this.webglCtx.bindFramebuffer(this.webglCtx.FRAMEBUFFER, this.bigImgFbo);
        this.webglCtx.framebufferTexture2D(this.webglCtx.FRAMEBUFFER, this.webglCtx.COLOR_ATTACHMENT0, this.webglCtx.TEXTURE_2D, this.bigImgRt, 0);
        this.webglCtx.blendFunc(this.webglCtx.SRC_ALPHA, this.webglCtx.ONE_MINUS_SRC_ALPHA);
        this.webglCtx.enable(this.webglCtx.BLEND);
        this.webglCtx.viewport(0, 0, serrationWidth, serrationHeight);
        this.webglCtx.clear(this.webglCtx.COLOR_BUFFER_BIT);
        this.webglCtx.drawElements(this.webglCtx.TRIANGLES, 6, this.webglCtx.UNSIGNED_BYTE, 0);
        // 把帧缓冲区绘制到屏幕
        let draw = (target) => {
            this.webglCtx.useProgram(this.webglProgramImg);
            this.imgUFileSize.fill([withMarginWidth, withMarginHeight]);
            this.imgUImgPos.fill([record.marginLeft * record.serration, record.marginBottom * record.serration]);
            this.imgUImgSize.fill([serrationWidth, serrationHeight]);
            this.imgUImgTex.fill(0);
            this.webglCtx.bindBuffer(this.webglCtx.ARRAY_BUFFER, this.vertexBuffer);
            this.webglCtx.vertexAttribPointer(this.imgVertexLocation, 4, this.webglCtx.FLOAT, false, Float32Array.BYTES_PER_ELEMENT * 4, 0);
            this.webglCtx.enableVertexAttribArray(this.imgVertexLocation);
            this.webglCtx.blendFunc(this.webglCtx.SRC_ALPHA, this.webglCtx.ONE_MINUS_SRC_ALPHA);
            this.webglCtx.enable(this.webglCtx.BLEND);
            this.webglCtx.bindFramebuffer(this.webglCtx.FRAMEBUFFER, target);
            this.webglCtx.viewport(0, 0, withMarginWidth, withMarginHeight);
            this.webglCtx.clear(this.webglCtx.COLOR_BUFFER_BIT);
            this.webglCtx.drawElements(this.webglCtx.TRIANGLES, 6, this.webglCtx.UNSIGNED_BYTE, 0);
        };
        draw(null);
        // 克隆屏幕内容
        let screenTex = this.webglCtx.createTexture();
        this.webglCtx.activeTexture(this.webglCtx.TEXTURE1);
        this.webglCtx.bindTexture(this.webglCtx.TEXTURE_2D, screenTex);
        this.webglCtx.texParameteri(this.webglCtx.TEXTURE_2D, this.webglCtx.TEXTURE_MIN_FILTER, this.webglCtx.NEAREST);
        this.webglCtx.texParameteri(this.webglCtx.TEXTURE_2D, this.webglCtx.TEXTURE_MAG_FILTER, this.webglCtx.NEAREST);
        this.webglCtx.texParameteri(this.webglCtx.TEXTURE_2D, this.webglCtx.TEXTURE_WRAP_S, this.webglCtx.CLAMP_TO_EDGE);
        this.webglCtx.texParameteri(this.webglCtx.TEXTURE_2D, this.webglCtx.TEXTURE_WRAP_T, this.webglCtx.CLAMP_TO_EDGE);
        let fboTextureType = this.webglCtx.getExtension('OES_texture_half_float').HALF_FLOAT_OES;
        this.webglCtx.texImage2D(this.webglCtx.TEXTURE_2D, 0, this.webglCtx.RGBA, withMarginWidth, withMarginHeight, 0, this.webglCtx.RGBA, fboTextureType, null);
        // 帧缓冲区
        let fbo = this.webglCtx.createFramebuffer();
        this.webglCtx.bindFramebuffer(this.webglCtx.FRAMEBUFFER, fbo);
        this.webglCtx.framebufferTexture2D(this.webglCtx.FRAMEBUFFER, this.webglCtx.COLOR_ATTACHMENT0, this.webglCtx.TEXTURE_2D, screenTex, 0);
        draw(fbo);
        // 保存帧缓冲区的数据
        let fboDataFloat = new Float32Array(serrationWidth * serrationHeight * 4);
        this.webglCtx.bindFramebuffer(this.webglCtx.FRAMEBUFFER, fbo);
        this.webglCtx.readPixels(0, 0, serrationWidth, serrationHeight, this.webglCtx.RGBA, this.webglCtx.FLOAT, fboDataFloat);
        let fboDataUint = new Uint8Array(fileWidth * fileHeight * 4);
        let r, g, b, a;
        let serrationVolume = record.serration ** 2;
        for (let x = 0; x < fileWidth; x++) {
            for (let y = 0; y < fileHeight; y++) {
                r = g = b = a = 0;
                for (let iX = 0; iX < record.serration; iX++) {
                    for (let iY = 0; iY < record.serration; iY++) {
                        let idxOrigin = ((y * record.serration + iY) * withMarginWidth + x * record.serration + iX) * 4;
                        r += fboDataFloat[idxOrigin + 0];
                        g += fboDataFloat[idxOrigin + 1];
                        b += fboDataFloat[idxOrigin + 2];
                        a += fboDataFloat[idxOrigin + 3];
                    }
                    ;
                }
                ;
                let idxTarget = (y * fileWidth + x) * 4;
                fboDataUint[idxTarget + 0] = listColor[0] * 255;
                fboDataUint[idxTarget + 1] = listColor[1] * 255;
                fboDataUint[idxTarget + 2] = listColor[2] * 255;
                fboDataUint[idxTarget + 3] = a / serrationVolume * 255;
            }
            ;
        }
        ;
        let imgData = this.d2Ctx.createImageData(fileWidth, fileHeight);
        imgData.data.set(fboDataUint);
        this.d2Canvas.width = fileWidth;
        this.d2Canvas.height = fileHeight;
        this.d2Ctx.clearRect(0, 0, fileWidth, fileHeight);
        this.d2Ctx.putImageData(imgData, 0, 0);
        IndexWindow.dataUrl = this.d2Canvas.toDataURL('image/png', 1);
    }
    render() {
        // 滚动视图的容器
        return NodeModules.react.createElement(DomDefine.TAG_DIV, {
            style: {
                [DomDefine.STYLE_HEIGHT]: DomDefine.STYLE_HEIGHT_PERCENTAGE_0,
                [DomDefine.STYLE_FLEX_GROW]: 1,
                [DomDefine.STYLE_MARGIN]: DomDefine.CONFIG_TXT_HALF_SPACING,
                [DomDefine.STYLE_BACKGROUND_COLOR]: DomDefine.CONFIG_TXT_BG_COLOR,
                [DomDefine.STYLE_DISPLAY]: DomDefine.STYLE_DISPLAY_FLEX,
                [DomDefine.STYLE_FLEX_DIRECTION]: DomDefine.STYLE_FLEX_DIRECTION_COLUMN
            }
        }, 
        // 滚动视图的遮罩
        NodeModules.react.createElement(DomDefine.TAG_DIV, {
            style: {
                [DomDefine.STYLE_HEIGHT]: DomDefine.STYLE_HEIGHT_PERCENTAGE_0,
                [DomDefine.STYLE_FLEX_GROW]: 1,
                [DomDefine.STYLE_MARGIN]: DomDefine.CONFIG_TXT_SPACING,
                [DomDefine.STYLE_OVERFLOW_X]: DomDefine.STYLE_OVERFLOW_X_SCROLL,
                [DomDefine.STYLE_OVERFLOW_Y]: DomDefine.STYLE_OVERFLOW_Y_SCROLL
            }
        }, 
        // 源 - 圆角矩形
        NodeModules.react.createElement(DomDefine.TAG_CANVAS, {
            ref: this.webglCanvasRef,
            style: {
                [DomDefine.STYLE_DISPLAY]: DomDefine.STYLE_DISPLAY_NONE
            }
        }), 
        // 附上边距后的圆角矩形
        NodeModules.react.createElement(DomDefine.TAG_CANVAS, {
            ref: this.d2CanvasRef,
            style: {
                [DomDefine.STYLE_DISPLAY]: DomDefine.STYLE_DISPLAY_BLOCK,
                border: "black 1px dashed"
            }
        })));
    }
}
export default DomRightPreview;

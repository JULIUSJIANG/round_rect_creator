
class c_webgl {

}

namespace c_webgl {
    /**
     * 属于该模块的日志打印
     * @param args 
     */
    export function f_log (...args) {
        console.log (`c_webgl: `, ...args)
    }

    /**
     * 加载着色器
     * @param gl 
     * @param type 
     * @param source 
     * @returns 
     */
    export function f_load_shader (gl: WebGLRenderingContext, type: number, source: string) {
        let shader = gl.createShader (type);
        if (shader == null) {
            f_log (`failed to create shader`);
            return null;
        };
        gl.shaderSource (shader, source);
        gl.compileShader (shader);
        var compiled = gl.getShaderParameter (shader, gl.COMPILE_STATUS);
        if (!compiled) {
            let error = gl.getShaderInfoLog (shader);
            f_log (`failed to compile shader`, error);
            gl.deleteShader (shader);
            return null;
        };
        return shader;
    }

    /**
     * 生成着色程序
     * @param gl 
     * @param shader_v 
     * @param shader_f 
     * @returns 
     */
    export function f_create_program (gl: WebGLRenderingContext, shader_v: string, shader_f: string): WebGLProgram {
        // f_log (`shader_v`, shader_v);
        // f_log (`shader_f`, shader_f);
        let shader_vertex = f_load_shader (gl, gl.VERTEX_SHADER, shader_v);
        let shader_fragment = f_load_shader (gl, gl.FRAGMENT_SHADER, shader_f);
        if (!shader_vertex || !shader_fragment) {
            return null as any;
        };
        let program = gl.createProgram ();
        if (!program) {
            f_log (`failed to create program`);
            return null as any;
        };
        gl.attachShader (program, shader_vertex);
        gl.attachShader (program, shader_fragment);
        gl.linkProgram (program);
        let linked = gl.getProgramParameter (program, gl.LINK_STATUS);
        if (!linked) {
            let err = gl.getProgramInfoLog (program);
            f_log (`failed to link program`, err);
            gl.deleteProgram (program);
            gl.deleteShader (shader_fragment);
            gl.deleteShader (shader_vertex);
            return null as any;
        };
        return program;
    }

    /**
     * 16 进制字符串转 rgba 格式
     * @param hex 
     * @returns 
     */
    export function f_parse_hex_to_rgba (hex: string) {
        let split = hex.split (``);
        return [
            (f_parse_char_to_num (split [0]) * 16 + f_parse_char_to_num (split [1])) / 255,
            (f_parse_char_to_num (split [2]) * 16 + f_parse_char_to_num (split [3])) / 255,
            (f_parse_char_to_num (split [4]) * 16 + f_parse_char_to_num (split [5])) / 255,
            (f_parse_char_to_num (split [6]) * 16 + f_parse_char_to_num (split [7])) / 255,
        ];
    }
    /**
     * 单个 16 进制字符转数字
     * @param char 
     * @returns 
     */
    export function f_parse_char_to_num (char: string) {
        if (char != null) {
            char = char.toLowerCase ();
        };
        switch (char) {
            case `0`: {
                return 0;
            };
            case `1`: {
                return 1;
            };
            case `2`: {
                return 2;
            };
            case `3`: {
                return 3;
            };
            case `4`: {
                return 4;
            };
            case `5`: {
                return 5;
            };
            case `6`: {
                return 6;
            };
            case `7`: {
                return 7;
            };
            case `8`: {
                return 8;
            };
            case `9`: {
                return 9;
            };

            case `a`: {
                return 10;
            };
            case `b`: {
                return 11;
            };
            case `c`: {
                return 12;
            };
            case `d`: {
                return 13;
            };
            case `e`: {
                return 14;
            };
            case `f`: {
                return 15;
            };
            default : {
                return f_parse_char_to_num (`f`);
            };
        };
    }
}

export default c_webgl;
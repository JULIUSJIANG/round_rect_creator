
class UtilWebgl {

}

namespace UtilWebgl {
    /**
     * 属于该模块的日志打印
     * @param args 
     */
    export function log (...args) {
        console.log (`c_webgl: `, ...args)
    }

    /**
     * 加载着色器
     * @param gl 
     * @param type 
     * @param source 
     * @returns 
     */
    export function loadShader (gl: WebGLRenderingContext, type: number, source: string) {
        let shader = gl.createShader (type);
        if (shader == null) {
            log (`failed to create shader`);
            return null;
        };
        gl.shaderSource (shader, source);
        gl.compileShader (shader);
        var compiled = gl.getShaderParameter (shader, gl.COMPILE_STATUS);
        if (!compiled) {
            let error = gl.getShaderInfoLog (shader);
            log (`failed to compile shader`, error);
            gl.deleteShader (shader);
            return null;
        };
        return shader;
    }

    /**
     * 生成着色程序
     * @param gl 
     * @param shaderV 
     * @param shaderF 
     * @returns 
     */
    export function createProgram (gl: WebGLRenderingContext, shaderV: string, shaderF: string): WebGLProgram {
        let shaderVertex = loadShader (gl, gl.VERTEX_SHADER, shaderV);
        let shaderFragment = loadShader (gl, gl.FRAGMENT_SHADER, shaderF);
        if (!shaderVertex || !shaderFragment) {
            return null as any;
        };
        let program = gl.createProgram ();
        if (!program) {
            log (`failed to create program`);
            return null as any;
        };
        gl.attachShader (program, shaderVertex);
        gl.attachShader (program, shaderFragment);
        gl.linkProgram (program);
        let linked = gl.getProgramParameter (program, gl.LINK_STATUS);
        if (!linked) {
            let err = gl.getProgramInfoLog (program);
            log (`failed to link program`, err);
            gl.deleteProgram (program);
            gl.deleteShader (shaderFragment);
            gl.deleteShader (shaderVertex);
            return null as any;
        };
        return program;
    }

    /**
     * 16 进制字符串转 rgba 格式
     * @param hex 
     * @returns 
     */
    export function parseHexToListNumber (hex: string) {
        let split = hex.split (``);
        return [
            (parseCharToNum (split [0]) * 16 + parseCharToNum (split [1])) / 255,
            (parseCharToNum (split [2]) * 16 + parseCharToNum (split [3])) / 255,
            (parseCharToNum (split [4]) * 16 + parseCharToNum (split [5])) / 255,
            (parseCharToNum (split [6]) * 16 + parseCharToNum (split [7])) / 255,
        ];
    }
    /**
     * 单个 16 进制字符转数字
     * @param char 
     * @returns 
     */
    export function parseCharToNum (char: string) {
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
                return parseCharToNum (`f`);
            };
        };
    }
}

export default UtilWebgl;
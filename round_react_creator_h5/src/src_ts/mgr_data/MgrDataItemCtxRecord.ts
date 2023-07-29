/**
 * 具体存档的字段
 */
class MgrDataItemCtxRecord {
    /**
     * 标识
     */
    id: number;
    /**
     * 名称
     */
    name: string;

    /**
     * 半径 - 左上角
     */
    radiusLT: number;
    /**
     * 半径 - 右上角
     */
    radiusRT: number;
    /**
     * 半径 - 右下角
     */
    radiusRB: number;
    /**
     * 半径 - 左下角
     */
    radiusLB: number;

    /**
     * 外边距 - 上
     */
    marginTop: number;
    /**
     * 外边距 - 右
     */
    marginRight: number;
    /**
     * 外边距 - 下
     */
    marginBottom: number;
    /**
     * 外边距 - 左
     */
    marginLeft: number;

    /**
     * 最小尺寸 - 宽
     */
    minSizeWidth: number;
    /**
     * 最小尺寸 - 高
     */
    minSizeHeight: number;
    /**
     * 颜色
     */
    color: string;
    /**
     * 抗锯齿
     */
    serration: number;

    /**
     * 当前代号
     */
    currentCode: number;

    /**
     * 线框模式 - 线宽
     */
    code1LineWidth: number;
    /**
     * 向内淡出 - 淡出距离
     */
    code2FadeDistance: number;
    /**
     * 变速
     */
    code2SpeedOffset: number;
    /**
     * 向内淡入 - 淡入距离
     */
    code3FadeDistance: number;
    /**
     * 变速
     */
    code3SpeedOffset: number;
}

export default MgrDataItemCtxRecord;
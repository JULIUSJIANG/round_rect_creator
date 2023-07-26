/**
 * 具体存档的字段
 */
class c_data_item_ctx_record {
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
    radius_lt: number;
    /**
     * 半径 - 右上角
     */
    radius_rt: number;
    /**
     * 半径 - 右下角
     */
    radius_rb: number;
    /**
     * 半径 - 左下角
     */
    radius_lb: number;

    /**
     * 外边距 - 上
     */
    margin_top: number;
    /**
     * 外边距 - 右
     */
    margin_right: number;
    /**
     * 外边距 - 下
     */
    margin_bottom: number;
    /**
     * 外边距 - 左
     */
    margin_left: number;

    /**
     * 最小尺寸 - 宽
     */
    min_size_width: number;
    /**
     * 最小尺寸 - 高
     */
    min_size_height: number;
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
    current_code: number;

    /**
     * 线框模式 - 线宽
     */
    code_1_line_width: number;
    /**
     * 向内淡出 - 淡出距离
     */
    code_2_fade_distance: number;
    /**
     * 向内淡入 - 淡入距离
     */
    code_3_fade_distance: number;
}

export default c_data_item_ctx_record;
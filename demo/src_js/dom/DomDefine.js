/**
 * 组件里面经常用到的常量都放在该文件
 */
class DomDefine {
}
(function (DomDefine) {
    //【标签名】
    DomDefine.TAG_DIV = "div";
    DomDefine.TAG_CANVAS = "canvas";
    DomDefine.TAG_SPAN = "span";
    DomDefine.TAG_INPUT = "input";
    //【样式名以及具体值】
    DomDefine.STYLE_WIDTH = "width";
    DomDefine.STYLE_WIDTH_PERCENTAGE_0 = "0%";
    DomDefine.STYLE_WIDTH_PERCENTAGE_100 = "100%";
    DomDefine.STYLE_HEIGHT = "height";
    DomDefine.STYLE_HEIGHT_PERCENTAGE_0 = "0%";
    DomDefine.STYLE_HEIGHT_PERCENTAGE_100 = "100%";
    DomDefine.STYLE_DISPLAY = "display";
    DomDefine.STYLE_DISPLAY_FLEX = "flex";
    DomDefine.STYLE_DISPLAY_BLOCK = "block";
    DomDefine.STYLE_DISPLAY_NONE = "none";
    DomDefine.STYLE_FLEX_DIRECTION = "flexDirection";
    DomDefine.STYLE_FLEX_DIRECTION_COLUMN = "column";
    DomDefine.STYLE_FLEX_GROW = "flexGrow";
    DomDefine.STYLE_BACKGROUND_COLOR = "backgroundColor";
    DomDefine.STYLE_MARGIN = "margin";
    DomDefine.STYLE_MARGIN_TOP = "marginTop";
    DomDefine.STYLE_MARGIN_RIGHT = "marginRight";
    DomDefine.STYLE_MARGIN_BOTTOM = "marginBottom";
    DomDefine.STYLE_MARGIN_LEFT = "marginLeft";
    DomDefine.STYLE_PADDING = "padding";
    DomDefine.STYLE_FLEX = "flex";
    DomDefine.STYLE_OVERFLOW_X = "overflowX";
    DomDefine.STYLE_OVERFLOW_X_HIDDEN = "hidden";
    DomDefine.STYLE_OVERFLOW_X_SCROLL = "scroll";
    DomDefine.STYLE_OVERFLOW_Y = "overflowY";
    DomDefine.STYLE_OVERFLOW_Y_HIDDEN = "hidden";
    DomDefine.STYLE_OVERFLOW_Y_SCROLL = "scroll";
    DomDefine.STYLE_ALIGN_ITEMS = "alignItems";
    DomDefine.STYLE_ALIGN_ITEMS_CENTER = "center";
    DomDefine.STYLE_JUSTIFY_CONTENT = "justifyContent";
    DomDefine.STYLE_JUSTIFY_CONTENT_CENTER = "center";
    DomDefine.STYLE_FONT_SIZE = "fontSize";
    DomDefine.STYLE_FONT_SIZE_14 = "14px";
    //【其他的属性名】
    DomDefine.PROPS_CLASS_NAME = "className";
    DomDefine.PROPS_VALUE = "value";
    DomDefine.PROPS_ON_CHANGE = "onChange";
    DomDefine.PROPS_TYPE = "type";
    DomDefine.PROPS_TYPE_PRIMARY = "primary";
    //【样式中各元素需要统一的值放这里】
    /**
     * 外边距 - 数字形式
     */
    const CONFIG_NUMBER_SPACING = 8;
    /**
     * 外边距 - 文本形式
     */
    DomDefine.CONFIG_TXT_SPACING = `${CONFIG_NUMBER_SPACING}px`;
    /**
     * 外边距 - 一半
     */
    DomDefine.CONFIG_TXT_HALF_SPACING = `${CONFIG_NUMBER_SPACING / 2}px`;
    /**
     * 外边距 - 2 倍
     */
    DomDefine.CONFIG_TXT_DOUBLE_SPACING = `${CONFIG_NUMBER_SPACING * 2}px`;
    /**
     * 分块的背景颜色
     */
    DomDefine.CONFIG_TXT_BG_COLOR = "#00000008";
})(DomDefine || (DomDefine = {}));
export default DomDefine;

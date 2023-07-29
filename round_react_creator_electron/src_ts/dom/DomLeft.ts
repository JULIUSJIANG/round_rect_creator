import NodeModules from "../NodeModules.js";
import DomDefine from "./DomDefine.js";
import DomLeftOperation from "./DomLeftOperation.js";
import DomLeftListRecord from "./DomLeftListRecord.js";

/**
 * 左边栏
 */
class DomLeft extends NodeModules.react.Component {
    render () {
        return NodeModules.react.createElement (
            DomDefine.TAG_DIV,
            {
                style: {
                    [DomDefine.STYLE_FLEX]: "400px",
                    [DomDefine.STYLE_FLEX_GROW]: 0,
                    [DomDefine.STYLE_MARGIN]: DomDefine.CONFIG_TXT_HALF_SPACING,
                    [DomDefine.STYLE_PADDING]: DomDefine.CONFIG_TXT_HALF_SPACING,
                    [DomDefine.STYLE_BACKGROUND_COLOR]: DomDefine.CONFIG_TXT_BG_COLOR,
                    
                    [DomDefine.STYLE_DISPLAY]: DomDefine.STYLE_DISPLAY_FLEX,
                    [DomDefine.STYLE_FLEX_DIRECTION]: DomDefine.STYLE_FLEX_DIRECTION_COLUMN
                }
            },

            NodeModules.react.createElement (DomLeftOperation),
            NodeModules.react.createElement (DomLeftListRecord)
        );
    }
}

export default DomLeft;
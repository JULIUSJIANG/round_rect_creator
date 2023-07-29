import NodeModules from "../NodeModules";
import DomRightPreview from "./DomRightPreview";
import DomDefine from "./DomDefine";
import DomRightRadiusMargin from "./DomRightRadiusMargin";
import DomRightType from "./DomRightType";
import IndexWindow from "../IndexWindow";
import DomRightSizeSerrationColor from "./DomRightSizeSerrationColor";

/**
 * 右边栏
 */
class DomRight extends NodeModules.react.Component {
    render () {
        let listChildren = [];
        let currentRecord = IndexWindow.getCurrentRecord ();
        if (currentRecord) {
            listChildren.push (
                NodeModules.react.createElement (DomRightRadiusMargin),
                NodeModules.react.createElement (DomRightSizeSerrationColor),
                NodeModules.react.createElement (DomRightType),
            )
        };
        listChildren.push (NodeModules.react.createElement (DomRightPreview));

        return NodeModules.react.createElement (
            DomDefine.TAG_DIV,
            {
                style: {
                    [DomDefine.STYLE_WIDTH]: DomDefine.STYLE_WIDTH_PERCENTAGE_0,
                    [DomDefine.STYLE_FLEX_GROW]: 1,
                    [DomDefine.STYLE_MARGIN]: DomDefine.CONFIG_TXT_HALF_SPACING,
                    [DomDefine.STYLE_PADDING]: DomDefine.CONFIG_TXT_HALF_SPACING,
                    [DomDefine.STYLE_BACKGROUND_COLOR]: DomDefine.CONFIG_TXT_BG_COLOR,

                    [DomDefine.STYLE_DISPLAY]: DomDefine.STYLE_DISPLAY_FLEX,
                    [DomDefine.STYLE_FLEX_DIRECTION]: DomDefine.STYLE_FLEX_DIRECTION_COLUMN
                }
            },

            ...listChildren
        );
    }
}

export default DomRight;
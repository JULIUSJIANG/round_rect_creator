import IndexWindow from "../IndexWindow.js";
import NodeModules from "../NodeModules.js";
import MgrData from "../mgr_data/MgrData.js";
import MgrDataItemActionRS from "../mgr_data/MgrDataItemActionRS.js";
import DomDefine from "./DomDefine.js";
/**
 * 右边栏 - 模式选择
 */
class DomRightType extends NodeModules.react.Component {
    render() {
        let currentRecord = IndexWindow.getCurrentRecord();
        // 关乎策略的按钮集合
        let listChildren = [];
        for (let i = 0; i < MgrDataItemActionRS.listRS.length; i++) {
            let listRSI = MgrDataItemActionRS.listRS[i];
            let props = {
                onClick: () => {
                    currentRecord.currentCode = listRSI.code;
                    MgrData.inst.callDataChange();
                },
                style: {
                    [DomDefine.STYLE_WIDTH]: DomDefine.STYLE_WIDTH_PERCENTAGE_0,
                    [DomDefine.STYLE_FLEX_GROW]: 1,
                    [DomDefine.STYLE_MARGIN]: DomDefine.CONFIG_TXT_HALF_SPACING,
                }
            };
            // 选中的模式得到高亮
            if (currentRecord.currentCode == listRSI.code) {
                props["type"] = "primary";
            }
            ;
            listChildren.push(NodeModules.react.createElement(NodeModules.antd.Button, props, listRSI.name));
        }
        ;
        let codeRS = MgrDataItemActionRS.mapCodeToRS.get(currentRecord.currentCode);
        let detail = codeRS.detail();
        // 最外层容器
        return NodeModules.react.createElement(DomDefine.TAG_DIV, {
            style: {
                [DomDefine.STYLE_PADDING]: DomDefine.CONFIG_TXT_HALF_SPACING,
                [DomDefine.STYLE_MARGIN]: DomDefine.CONFIG_TXT_HALF_SPACING,
                [DomDefine.STYLE_BACKGROUND_COLOR]: DomDefine.CONFIG_TXT_BG_COLOR,
                [DomDefine.STYLE_DISPLAY]: DomDefine.STYLE_DISPLAY_FLEX,
                [DomDefine.STYLE_FLEX_DIRECTION]: DomDefine.STYLE_FLEX_DIRECTION_COLUMN
            }
        }, 
        // 第一行，类型选择
        NodeModules.react.createElement(DomDefine.TAG_DIV, {
            style: {
                [DomDefine.STYLE_DISPLAY]: DomDefine.STYLE_DISPLAY_FLEX
            }
        }, ...listChildren), ...detail);
    }
}
export default DomRightType;

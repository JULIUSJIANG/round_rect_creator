/**
 * 主进程希望渲染进程做的异步事情以及渲染进程希望主进程做的异步事情都定义在里面
 * IndexMain 中定义的 ActionRequest 与该 ActionRequest 不一样，具体表现为 “非自己需要实现的 analyse，都直接是 null”
 * 简单而言 ActionRequest 作为协议，统一主进程、渲染进程对于对方的要求
 */
class ActionRequest {
    constructor(args) {
        this.code = args.code;
        this.analyse = args.analyse;
        ActionRequest.mapCodeToRequest.set(this.code, this);
    }
}
(function (ActionRequest) {
    ;
    /**
     * 由主进程主动发起的流程上的所有事件名称
     */
    ActionRequest.EVT_NAME_SERVER_ACTIVE = `EVT_NAME_SERVER_ACTIVE`;
    /**
     * 由渲染进程主动发起的流程上的所有事件名称
     */
    ActionRequest.EVT_NAME_CLIENT_ACTIVE = `EVT_NAME_CLIENT_ACTIVE`;
    /**
     * 代号到具体策略的映射
     */
    ActionRequest.mapCodeToRequest = new Map();
    ;
    ;
    /**
     * 客户端通知 - 打印日志
     */
    ActionRequest.CLIENT_FETCH_LOG = new ActionRequest({
        code: 1002,
        analyse: null
    });
    ;
    ;
    ActionRequest.CLIENT_FETCH_SAVE = new ActionRequest({
        code: 1003,
        analyse: null
    });
})(ActionRequest || (ActionRequest = {}));
export default ActionRequest;

/**
 * 可控式进程
 */
export default class c_promise {
    constructor() {
        /**
         * 已经有结果了
         */
        this.is_resulted = false;
        this.promise = new Promise((resolve) => {
            this._resolve = resolve;
        });
    }
    /**
     * 接收结果
     * @param t
     */
    resolve(t) {
        if (this.is_resulted) {
            return;
        }
        ;
        this.is_resulted = true;
        this._resolve(t);
    }
}

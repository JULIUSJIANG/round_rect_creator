/**
 * 可控式进程
 */
class _c_promise <c_t> {
    /**
     * 实质进程
     */
    promise: Promise <c_t>

    /**
     * 已经有结果了
     */
    is_resulted = false;

    constructor () {
        this.promise = new Promise ((resolve) => {
            this._resolve = resolve;
        });
    }

    private _resolve: (t: c_t) => void;

    /**
     * 接收结果
     * @param t 
     */
    resolve (t: c_t) {
        if (this.is_resulted) {
            return;
        };
        this.is_resulted = true;
        this._resolve (t);
    }
}

exports.c_promise = _c_promise;
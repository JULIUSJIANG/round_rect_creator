/**
 * 事件派发器
 */
class c_eventer<T> {
    /**
     * 监听 id 生成器
     */
    private _seed = 0;

    /**
     * 标识到具体回调的映射
     */
    private _map_id_to_callback: Map <number, (t: T) => void> = new Map ();

    /**
     * 监听 - 开启
     * @param callback 
     * @returns 
     */
    f_on (callback: (t: T) => void) {
        let id = ++this._seed;
        this._map_id_to_callback.set (id, callback);
        return id;
    }

    /**
     * 监听 - 关闭
     * @param id 
     */
    f_off (id: number) {
        this._map_id_to_callback.delete (id);
    }

    /**
     * 派发
     * @param t 
     */
    f_call (t: T) {
        this._map_id_to_callback.forEach ((val, idx) => {
            val.call (t);
        });
    }
}

export default c_eventer;
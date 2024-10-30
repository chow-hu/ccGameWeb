/*
 * @Description: map
 * @Author: zy
 * @Date: 2024-03-06 16:50:24
 * @LastEditTime: 2022-07-13 19:54:23
 * @LastEditors: Please set LastEditors
 * @Reference: resources\3d\engine\cocos\core\asset-manager\cache.ts
 */

export class EMap<T = any> {

    private _map: Record<string, T> | null = null;
    private _count: number = 0;
    public get map() {
        return this._map
    }
    constructor(map?: Record<string, T>) {
        if (map) {
            this._map = map;
            this._count = Object.keys(map).length;
        }
        else {
            this._map = this.createMap(true);
            this._count = 0;
        }
    }

    createMap(forceDictMode?: boolean): any {
        const map = Object.create(null);
        if (forceDictMode) {
            const INVALID_IDENTIFIER_1 = '.';
            const INVALID_IDENTIFIER_2 = '/';
            // assign dummy values on the object
            map[INVALID_IDENTIFIER_1] = 1;
            map[INVALID_IDENTIFIER_2] = 1;
            delete map[INVALID_IDENTIFIER_1];
            delete map[INVALID_IDENTIFIER_2];
        }
        return map;
    }

    /**
     * @en
     * Add Key-Value to cache
     *
     * @zh
     * 增加键值对到缓存中
     *
     * @param key - The key
     * @param val - The value
     * @returns The value
     *
     * @example
     * var cache = new Cache();
     * cache.add('test', null);
     *
     */
    public add(key: string, val: T): T {
        if (!(key in this._map!)) {
            this._count++;
        }
        return this._map![key] = val;
    }

    /**
     * @en
     * Get the cached content by key
     *
     * @zh
     * 通过 key 获取对应的 value
     *
     * @param key - The key
     * @returns The corresponding content
     *
     * @example
     * let cache = new Emap();
     * let test = cache.get('test');
     *
     */
    public get(key: string): T | undefined {
        return this._map![key];
    }

    /**
     * @en
     * Check whether or not content exists by key
     *
     * @zh
     * 通过 Key 判断是否存在对应的内容
     *
     * @param key - The key
     * @returns True indecates that content of the key exists
     *
     * @example
     * var cache = new Cache();
     * var exist = cache.has('test');
     *
     */
    public has(key: string): boolean {
        return key in this._map!;
    }

    /**
     * @en
     * Remove the cached content by key
     *
     * @zh
     * 通过 Key 移除对应的内容
     *
     * @param key - The key
     * @returns The removed content
     *
     * @example
     * var cache = new Cache();
     * var content = cache.remove('test');
     *
     */
    public remove(key: string): T | undefined {
        const out = this._map![key];
        if (key in this._map!) {
            delete this._map![key];
            this._count--;
        }
        return out;
    }

    /**
     * @en
     * Clear all content
     *
     * @zh
     * 清除所有内容
     *
     * @example
     * var cache = new Cache();
     * cache.clear();
     *
     */
    public clear(): void {
        if (this._count !== 0) {
            this._map = this.createMap(true);
            this._count = 0;
        }
    }

    /**
     * @en
     * Enumerate all content and invoke function
     *
     * @zh
     * 枚举所有内容并执行方法
     *
     * @param func - Function to be invoked
     * @param func.val - The value
     * @param func.key - The corresponding key
     *
     * @example
     * var cache = new Cache();
     * cache.forEach((val, key) => console.log(key));
     *
     */
    public forEach(func: (val: T, key: string) => void): void {
        for (const key in this._map) {
            func(this._map[key], key);
        }
    }

    /**
     * @en
     * Enumerate all content to find one element which can fulfill condition
     *
     * @zh
     * 枚举所有内容，找到一个可以满足条件的元素
     *
     * @param predicate - The condition
     * @returns content
     *
     * @example
     * var cache = new Cache();
     * var val = cache.find((val, key) => key === 'test');
     *
     */
    public find(predicate: (val: T, key: string) => boolean): T | null {
        for (const key in this._map) {
            if (predicate(this._map[key], key)) {
                return this._map[key];
            }
        }
        return null;
    }

    /**
     * @en
     * Enumerate all content to filter one element which can fulfill condition
     *
     * @zh
     * 枚举所有内容，找到所有可以满足条件的元素
     *
     * @param predicate - The condition
     * @returns content
     *
     * @example
     * var cache = new Cache();
     * var val = cache.filter((val, key) => key === 'test');
     *
     */
    public filter(predicate: (val: T, key: string) => boolean): T[] {
        let out: T[] = [];
        for (const key in this._map) {
            if (predicate(this._map[key], key)) {
                out.push(this._map[key]);
            }
        }
        return out;
    }

    /**
     * @en
     * The count of cached content
     *
     * @zh
     * 缓存数量
     *
     */
    get count(): number {
        return this._count;
    }

    /**
     * @en
     * Destroy this cache
     *
     * @zh
     * 销毁这个 cache
     *
     */
    public destroy(): void {
        this._map = null;
    }
}

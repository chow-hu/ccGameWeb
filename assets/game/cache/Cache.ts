import { User } from "./User";
export class Cache {
    /** 用户缓存 */
    static User: User = null;
    public static init() {
        console.log("Cache init-------------------------------------------");
        Cache.User = new User();
    }
}

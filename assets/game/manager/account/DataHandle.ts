
/**
 * @description: 登录数据处理类
 */

import { log } from "cc";
import { Cache } from "../../cache/Cache";
import EventDispatcher from "../../../framework/event/EventDispatcher";
import { GameConfig, LoginEvent } from "./interface";

export class DataHandle {
    private static _instance: DataHandle = null;
    public static get instance(): DataHandle {
        if (DataHandle._instance == null) {
            DataHandle._instance = new DataHandle();
        }
        return DataHandle._instance;
    }

    /**
 * @description 处理前置数据
 */
    scopeParam() {
        let data = this.getTekonAndAgent();
        // let data = this.getSomeData()
        if (data) {
            Cache.User.saveTokenAndAgent(data);
            // Cache.User.saveSomeData(data);
            log("bobo-----看看地址 " + Cache.User.getAgent());
            if (Cache.User.getAgent()) {
                EventDispatcher.instance.dispatchEvent(LoginEvent.LOGIN_READY, true);
            } else {
                EventDispatcher.instance.dispatchEvent(LoginEvent.LOGIN_READY, false);
            }
        } else {
            EventDispatcher.instance.dispatchEvent(LoginEvent.LOGIN_READY, false);
        }

    }

    /**
     * @description: url拼接的参数查找
     * @param search 参数
     * @returns 
     */
    scopeUser(search: string) {
        if (!search || search == "") {
            return null;
        }
        let searchTemp = search.slice(1);
        let list = searchTemp.split("&");
        let params = {};
        for (let i = 0; i < list.length; i++) {
            let key_value = list[i].split("=");
            params[key_value[0]] = key_value[1];
        }
        log("bobo --- 参数是 ", params);
        return params;
    }

    /**
     * @description: 拼接数据
     * 
     */
    handleUser(params: string): any {
        let splitList = params.split("&");
        if (splitList.length == 0) {
            return null;
        }
        let data = {};
        for (let i = 0; i < splitList.length; i++) {
            let key_value = splitList[i].split("=");
            data[key_value[0]] = key_value[1];
        }
        if (data['gameinfo']) {
            data['gameinfo'] = JSON.parse(data['gameinfo']);
        }
        log("bobo --- 参数是 ", JSON.stringify(data));
        return data;
    }



    /**
     * @description: 获取token 和 agent
     * @returns 
     */
    getTekonAndAgent() {
        // let aa = "?token=dXVpZD1aRjk2NGJfWTE6Njk1MTc1NDAmdWlkPTY3NjA2NDYyJnRva2VuPTY5NTE3NTQwJmJhbGFuY2U9MTAwMDAwMDAwJmdhbWU9MTAzJmdhbWVpbmZvPXsiZnVsbHNjcmVlbiI6MH0mZXhwaT0xNzMwNTk4MjMyJnNpZ249YzJiY2Y5NWE5NTU0NjhkMGM0MGU3MWJhMzY1ZWU1MDQ=&agent=d3NzOi8vZmRzZ2h1azM0OWRmc2Jqay5jY2FwaTIxOG9yYmprc2FwbTAzZmprZHMub3JnL3dzcw==&gameID=103";
        // let params = this.scopeUser(aa);

        let params = this.scopeUser(globalThis.location.search);
        let token = "";
        let agent = "";
        if (params && params["token"]) {
            log("bobo-------handleData", params["token"]);
            token = params["token"];
            log("bobo-------handleData", atob(token));

        }

        if (params && params["agent"]) {
            log("bobo-------handleData", params["agent"]);
            agent = atob(params["agent"]);
            log("bobo-------handleData", agent);
        }

        return { token: token, agent: agent };
    }

}
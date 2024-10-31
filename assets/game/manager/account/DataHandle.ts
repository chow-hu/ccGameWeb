
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
     * @description: 获取一些前置数据
     */
    getSomeData(): any {

        let aa = "?token=dXVpZD1aRjk2NGJfWTE6NjIzMDEzMTYmdWlkPTQwNjA1ODExJnRva2VuPTYyMzAxMzE2JmJhbGFuY2U9MTAwMTM0ODAwJmdhbWU9MTAxJmdhbWVpbmZvPXsiZnVsbHNjcmVlbiI6MH0mc2Vzc2lvbj17ImFnZW5jeSI6IlpGOTY0Yl9ZMSIsImN1cnJlbmN5IjoiSU5SIiwiZ2FtZV9vdXRlcl9pZCI6IjEwMSIsInBsYXRmb3JtIjoiIiwidG9rZW4iOiI2MjMwMTMxNiIsInVzZXJuYW1lIjoiNjIzMDEzMTYifSZleHBpPTE3MzAzNTk0MDImc2lnbj0yMTgyMTQwYzcyMTQ2MGNmOGZlZmQ1NWJhM2FlNWFmZg==&agent=d3NzOi8vZmRzZ2h1azM0OWRmc2Jqay5jY2FwaTIxOG9yYmprc2FwbTAzZmprZHMub3JnL3dzcw==";
        let params = this.scopeUser(aa);
        // let params = this.scopeUser(globalThis.location.search);
        // log("看看地址------------", globalThis.location.search);
        let someField = "";
        let agentField = "";
        // 处理token
        if (params && params["token"]) {
            log("bobo-------handleData", params["token"]);
            someField = atob(params["token"]);
            log("bobo-------handleData", someField);

        } else {
            return null;
        }
        // 处理agent
        if (params && params["agent"]) {
            log("bobo-------handleData", params["agent"]);
            agentField = atob(params["agent"]);
            log("bobo-------handleData", agentField);
        } else {
            return null;
        }
        return { user: this.handleUser(someField), token: params['token'], agent: agentField } as GameConfig
    }

    /**
     * @description: 获取token 和 agent
     * @returns 
     */
    getTekonAndAgent() {

        // let aa = "?token=dXVpZD1aRjk2NGJfWTE6NjIzMDEzMTYmdWlkPTQwNjA1ODExJnRva2VuPTYyMzAxMzE2JmJhbGFuY2U9MTAwNDE0ODAwJmdhbWU9MTAxJmdhbWVpbmZvPXsiZnVsbHNjcmVlbiI6MH0mZXhwaT0xNzMwMzc2MTMwJnNpZ249MGVlOWEyYjVkNmFhZDkwODVhNTEwZjJhMGVhNDFjNGQ=&agent=d3NzOi8vZmRzZ2h1azM0OWRmc2Jqay5jY2FwaTIxOG9yYmprc2FwbTAzZmprZHMub3JnL3dzcw==&gameID=101";
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
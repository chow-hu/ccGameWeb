/*
 * @Author: jackMa 2442563207@qq.com
 * @Date: 2025-01-16 14:57:52
 * @LastEditors: jackMa 2442563207@qq.com
 * @FilePath: \ccGameWeb\assets\game\manager\gameRecord\GameRecordManager.ts
 * @Description: 
 */

import { client_proto, gamerecord, gnet, gui, PRIORITY } from "db://assets/framework/ge";
import { Cache } from "../../cache/Cache";
import { IManager } from "../IManager";
import { EMgr } from "../interface";
import { GameRecordEvent, GameRecordPB } from "./interface";

export class GameRecordManager extends IManager{
    private static _instance: GameRecordManager;

    public static get instance() {
        if (this._instance) {
            return this._instance;
        }
        this._instance = new GameRecordManager();
        return this._instance;
    };

    constructor() {
        super(EMgr.GAMERECORD);

        let protos: string[] = [];
        // 添加监听
        for (let key in GameRecordPB.RESP) {
            if (Object.prototype.hasOwnProperty.call(GameRecordPB.RESP, key)) {
                protos.push((GameRecordPB.RESP as any)[key]);
            }
        }
        
        for (let key in GameRecordPB.PUSH) {
            if (Object.prototype.hasOwnProperty.call(GameRecordPB.PUSH, key)) {
                protos.push((GameRecordPB.PUSH as any)[key]);
            }
        }
        this.onproto(protos);

        this.on([]);
    };

    onRecv(event: string, data: any): void {
        let rspData = data?.data;
        switch (event) {
            case GameRecordPB.RESP.GAMERECORD:
                gui.loading(false);
                
                this.emit(GameRecordEvent.GAMERECORD, rspData);
                break;
            case GameRecordPB.RESP.GAMERECORDDETAIL:
                gui.loading(false);
                
                this.emit(GameRecordEvent.GAMERECORDDETAIL, rspData);
                break;
            case GameRecordPB.PUSH.GAMERECORDPUSH:

                this.emit(GameRecordEvent.GAMERECORDPUSH, rspData);
                break;
            case GameRecordPB.PUSH.GAMERECORDCACHEPUSH:

                this.emit(GameRecordEvent.GAMERECORDCACHEPUSH, rspData);
                break;
            default:
                break;
        }
    }

    public onEvents(event: string, ...args: any[]): void {
        
    }

    public sendGameRecordRequest(gameID: number, start: number, count: number) {
        let stype = client_proto.SERVER_INNER_MSG_TYPE.SERVER_TYPE_GAMERECORD;
        let ctype = gamerecord.ASSET_CMD.GAMERECORD_CMD_GET_RECORD_REQ;
        let param = {
            uid: Cache.User.getUID(),
            game: gameID,
            pos: start,
            size: count,
        }

        gui.loading({ ts: 10, block: true }, PRIORITY.NET);
        gnet.send(GameRecordPB.REQ.GAMERECORD, stype, ctype, param);
    }

    public sendGameRecordDetailRequest(gameID: number, id: number) {
        let stype = client_proto.SERVER_INNER_MSG_TYPE.SERVER_TYPE_GAMERECORD;
        let ctype = gamerecord.ASSET_CMD.GAMERECORD_CMD_GET_DETAIL_REQ;
        let param = {
            uid: Cache.User.getUID(),
            game: gameID,
            id,
        }

        gui.loading({ ts: 10, block: true }, PRIORITY.NET);
        gnet.send(GameRecordPB.REQ.GAMERECORDDETAIL, stype, ctype, param);
    }
}


export const gameRecordMgr: GameRecordManager = GameRecordManager.instance; 
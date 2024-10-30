/*
 * @Description: 事件接口类
 * @Author: zy
 * @Date: 2021-01-14 17:15:01
 * @Reference: 
 */
export interface IEventContract {
    emit?: (event: string, data: any) => void;
    on: (event: string | string[], priority?: number) => void;
    off: (event: string | string[]) => void;

    onEvents: (event: string, data: any) => any;
    onRecv?: (event: string, data: any) => void;
    onAnyEvents?: (event: string, data: any) => void;
    events: string[];
}

export type EventListener = {
    target: IEventContract;
    priority: number;
}
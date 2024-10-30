/*
 * @Description: a*节点
 * @Author: zy
 * @Date: 2021-10-21 10:23:09
 * @Reference: https://forum.cocos.org/t/topic/86631
 */
export type INode = {
	costMultiplier?: number;
	walkable: boolean;
}
export class Node {
	public x: number;    //列
	public y: number;    //行
	public f!: number;    //代价 f = g+h
	public g!: number;    //起点到当前点代价
	public h!: number;    //当前点到终点估计代价
	public walkable: boolean = true;
	public parent!: Node;
	public costMultiplier: number = 1.0;

	public constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}
}
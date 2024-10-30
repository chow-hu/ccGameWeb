/*
 * @Description: a*网格辅助
 * @Author: zy
 * @Date: 2021-10-21 10:23:09
 * @Reference: https://forum.cocos.org/t/topic/86631
 */
import { INode, Node } from "./Node";
type NodeCreator = (x: number, y: number) => INode;
export class Grid {
	private _startNode?: Node;    //起点
	private _endNode?: Node;      //终点
	private _nodes: Record<number, Record<number, Node>>;  //Node数组

	private _nodeFunc: NodeCreator;

	public constructor(func: NodeCreator) {
		this._nodeFunc = func;
		this._nodes = {};
	}

	public getNode(x: number, y: number): Node {
		if (!this._nodes[x] || !this._nodes[x][y]) {
			this._nodes[x] = this._nodes[x] || {};
			let node = this._nodes[x][y] = new Node(x, y);
			let data = this._nodeFunc(x, y);
			node.walkable = data.walkable;
			node.costMultiplier = data.costMultiplier || 1.0;
		}
		return this._nodes[x][y];
	}

	public setEndNode(x: number, y: number) {
		this._endNode = this.getNode(x, y);
	}

	public setStartNode(x: number, y: number) {
		this._startNode = this.getNode(x, y);
	}

	public get endNode() {
		return this._endNode!;
	}

	public get startNode() {
		return this._startNode!;
	}

	public clear() {
		for (const key in this._nodes) {
			if (Object.prototype.hasOwnProperty.call(this._nodes, key)) {
				const list = this._nodes[key];
				for (const key in list) {
					if (Object.prototype.hasOwnProperty.call(list, key)) {
						delete list[key];
					}
				}
				delete this._nodes[key];
			}
		}

		delete this._startNode;
		delete this._endNode;
	}
}
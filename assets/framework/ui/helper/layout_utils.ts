/*
 * @Description: LayoutUtil - 列表工具item排序工具
 * @Author: zy
 * @Date: 2020-12-30 14:31:11
 * @Reference: 
 */
//item及父节点锚点都为(0,1)
export class LayoutUtil {
    static vertical_layout(index: number, item_width: number, item_height: number, column: number = 1, gap_x: number = 0, gap_y: number = 0, auto_center?: boolean, total_count?: number): [number, number] {
        let x = 0;

        // 若需auto_center，只有最后一行未填满才需要居中 
        if (auto_center && total_count! % column > 0 && (index + column) >= total_count!) {
            x = (index % column) * (item_width + gap_x) - (total_count! % column - 1) * (item_width + gap_x) * 0.5;
        } else {
            x = (index % column) * (item_width + gap_x) - (column - 1) * (item_width + gap_x) * 0.5;
        }

        let y = -Math.floor(index / column) * (item_height + gap_y);

        return [x, y];
    }

    static horizontal_layout(index: number, item_width: number, item_height: number, row: number = 1, gap_x: number = 0, gap_y: number = 0, auto_center?: boolean, total_count?: number): [number, number] {
        let x = Math.floor(index / row) * (item_width + gap_x);

        // 若需auto_center，只有最后一列未填满才需要居中 
        let y = 0;
        if (auto_center && total_count! % row > 0 && (index + row) >= total_count!) {
            y = -(index % row) * (item_height + gap_y) + (total_count! % row - 1) * (item_height + gap_y) * 0.5;
        } else {
            y = -(index % row) * (item_height + gap_y) + (row - 1) * (item_height + gap_y) * 0.5;
        }
        return [x, y];
    }

    static horizontal_layout_page(index: number, item_width: number, item_height: number, row: number = 1, gap_x: number = 0, gap_y: number = 0, page_count: number, page_gap: number): [number, number] {
        let pIdx = Math.floor(index / page_count)   //当前页的idx
        let cIdx = index - pIdx * page_count        //当前item相对于当前页第一个item的idx
        let col = Math.floor(page_count / row);     //每页一共多少列
        let sx = pIdx * col * (item_width + gap_x) + page_gap * 0.5 + pIdx * page_gap - pIdx * gap_x;
        let sy = (row - 1) * (item_height + gap_y) * 0.5;
        let x = sx + cIdx % col * (item_width + gap_x);
        let y = sy - Math.floor(cIdx / col) * (item_height + gap_y);
        return [x, y];
    }

    static vertical_layout_page(index: number, item_width: number, item_height: number, column: number = 1, gap_x: number = 0, gap_y: number = 0, page_count: number, page_gap: number, auto_center?: boolean, total_count?: number): [number, number] {
        let x = 0, y = 0;

        // 若需auto_center，只有最后一行未填满才需要居中 
        if (auto_center && total_count! % column > 0 && (index + column) >= total_count!) {
            x = (index % column) * (item_width + gap_x) - (total_count! % column - 1) * (item_width + gap_x) * 0.5;
        } else {
            x = (index % column) * (item_width + gap_x) - (column - 1) * (item_width + gap_x) * 0.5;
        }

        const pageIdx = Math.floor(index / page_count);
        y = -Math.floor(index / column) * (item_height + gap_y) - (pageIdx * page_gap + page_gap / 2 - pageIdx * gap_y);

        return [x, y];
    }

    static getAutoCol(width: number, item_width: number, gap_x: number) {
        return Math.floor((width - item_width) / (item_width + gap_x)) + 1;
    }
    static getAutoRow(height: number, item_height: number, gap_y: number) {
        return Math.floor((height - item_height) / (item_height + gap_y)) + 1;
    }
}
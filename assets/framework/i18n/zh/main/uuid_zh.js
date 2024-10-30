/*
 * @Description: 资源uuid中文映射
 * @Author: zy
 * @Date: 2021-02-26 14:50:08
 * @LastEditTime: 2023-02-23 17:22:03
 * @LastEditors: Please set LastEditors
 * @Reference: 
 */

const mapping = {
    "3359985": "5554AF",
}

globalThis["uuid_zh"] = { ...globalThis["uuid_zh"], ...mapping };
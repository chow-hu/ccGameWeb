/*
 * @Description:
 * @Author: zy
 * @Date: 2024-03-06 18:21:59
 * @Reference:
 */
export interface IFileUtils {
    writeToFile(filePath: string, fileData: any, isArrayBuffer: boolean, isRemove: boolean): boolean;
    readFromFile(filePath: string, isArrayBuffer: boolean): boolean | Uint8Array | string;
    cleanOldAssets(): void;
}
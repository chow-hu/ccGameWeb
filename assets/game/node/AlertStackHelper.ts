

import { IAlertStackHelper } from "../../framework/ge";
import { StorageData } from "../../framework/storage/StorageData";

export class AlertStackHelper implements IAlertStackHelper {
    check(noTipKey: string): boolean {
        let value = StorageData.user.get(noTipKey, 0);
        return StorageData.sysTs < value;
    }
    checkLogin(noTipKey: string): boolean {
        return StorageData.val(noTipKey);
    }
}
import type { BuildingInfo, ParsedSavefile } from '../../types.js';
import { hasUpgrade } from '../../upgrade.js';
import type { UpgradeName } from '../types.js';

export function firstOneYouDontHave(
    game: ParsedSavefile,
    upgradeNames: UpgradeName[],
): UpgradeName | undefined {
    for (const upgradeName of upgradeNames) {
        if (!hasUpgrade(game, upgradeName)) {
            return upgradeName;
        }
    }
}

export function firstOneYouDontHaveWithQty(
    game: ParsedSavefile,
    buildingInfo: BuildingInfo,
    upgradeAndQty: Array<[UpgradeName, number]>,
): UpgradeName | undefined {
    for (const [upgradeName, qty] of upgradeAndQty) {
        if (hasUpgrade(game, upgradeName)) continue;

        if (buildingInfo.currentUnits < qty) return undefined;
        else return upgradeName;
    }
}

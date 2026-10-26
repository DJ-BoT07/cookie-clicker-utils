import type {
    BuildingIndex,
    BuildingInfo,
    ParsedSavefile,
} from '../../types.js';
import { hasUpgrade } from '../../upgrade.js';
import { AllUpgrades } from '../index.js';
import type { UpgradeName } from '../types.js';

export function firstUpgradeYouDontHave(
    game: ParsedSavefile,
    b: BuildingIndex,
    upgradeNames: Array<UpgradeName>,
): [UpgradeName, number] | undefined {
    const building = game.buildings[b]!;

    for (const upgradeName of upgradeNames) {
        if (hasUpgrade(game, upgradeName)) continue;

        const upgrade = AllUpgrades[upgradeName];

        switch (upgrade.type) {
            case 'TieredUpgrade': {
                if (building.currentUnits < upgrade.qty) return undefined;
                else return [upgradeName, upgrade.price];
            }

            default:
                return undefined;
        }
    }
}

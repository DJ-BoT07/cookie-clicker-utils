import type { ParsedSavefile } from './types.js';
import { AllUpgrades } from './upgrades/index.js';
import type { UpgradeName } from './upgrades/types.js';

export function addUpgrade(game: ParsedSavefile, upgradeIndex: number) {
    const bitIdx = 2 * upgradeIndex + 1;
    game.upgrades =
        game.upgrades.slice(0, bitIdx) + '1' + game.upgrades.slice(bitIdx + 1);
}

export function removeUpgrade(game: ParsedSavefile, upgradeIndex: number) {
    const bitIdx = 2 * upgradeIndex + 1;
    game.upgrades =
        game.upgrades.slice(0, bitIdx) + '0' + game.upgrades.slice(bitIdx + 1);
}

export function hasUpgrade(game: ParsedSavefile, upgradeName: UpgradeName) {
    const upgradeIndex = AllUpgrades[upgradeName];
    const bitIdx = 2 * upgradeIndex + 1;
    return game.upgrades[bitIdx] === '1';
}

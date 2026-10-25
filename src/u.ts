import type { CURSOR_UPGRADES } from './constants.js';
import type { ParsedSavefile } from './types.js';

export type CursorUpgradeName = (typeof CURSOR_UPGRADES)[number][0];

export type UpgradeName = CursorUpgradeName;

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

export function hasUpgrade(game: ParsedSavefile, upgradeIndex: number) {
    const bitIdx = 2 * upgradeIndex + 1;
    return game.upgrades[bitIdx] === '1';
}

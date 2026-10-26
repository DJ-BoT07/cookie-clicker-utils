import type { ParsedSavefile } from '../../types.js';
import { getFrontierCursorUpgrades } from './cursor.js';
import { getFrontierGrandmaUpgrades } from './grandma.js';
import type { UpgradeNameWithCost } from './types.js';

export function getFrontierUpgrades(
    game: ParsedSavefile,
): UpgradeNameWithCost[] {
    const arr: UpgradeNameWithCost[] = [];

    arr.push(...getFrontierCursorUpgrades(game));
    arr.push(...getFrontierGrandmaUpgrades(game));

    return arr;
}

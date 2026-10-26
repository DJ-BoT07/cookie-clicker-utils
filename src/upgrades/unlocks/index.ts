import type { ParsedSavefile } from '../../types.js';
import type { UpgradeName } from '../types.js';
import { getFrontierCursorUpgrades } from './cursor.js';
import { getFrontierGrandmaUpgrades } from './grandma.js';

export function getFrontierUpgrades(game: ParsedSavefile): UpgradeName[] {
    const arr: UpgradeName[] = [];

    arr.push(...getFrontierCursorUpgrades(game));
    arr.push(...getFrontierGrandmaUpgrades(game));

    return arr;
}

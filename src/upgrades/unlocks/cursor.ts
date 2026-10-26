import { B } from '../../constants.js';
import type { ParsedSavefile } from '../../types.js';
import type { UpgradeName } from '../types.js';
import type { UpgradeNameWithCost } from './types.js';
import { firstUpgradeYouDontHave } from './utils.js';

export function getFrontierCursorUpgrades(
    game: ParsedSavefile,
): UpgradeNameWithCost[] {
    const arr: UpgradeNameWithCost[] = [];

    const a = firstUpgradeYouDontHave(game, B.Cursor, [
        'Reinforced index finger',
        'Carpal tunnel prevention cream',
        'Ambidextrous',
    ]);
    if (a) arr.push(a);

    const b = firstUpgradeYouDontHave(game, B.Cursor, [
        'Thousand fingers',
        'Million fingers',
        'Billion fingers',
        'Trillion fingers',
        'Quadrillion fingers',
        'Quintillion fingers',
        'Sextillion fingers',
        'Septillion fingers',
        'Octillion fingers',
        'Nonillion fingers',
        'Decillion fingers',
        'Undecillion fingers',
    ]);
    if (b) arr.push(b);

    return arr;
}

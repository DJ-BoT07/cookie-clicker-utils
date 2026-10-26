import type { ParsedSavefile } from '../../types.js';
import type { UpgradeName } from '../types.js';
import { firstOneYouDontHaveWithQty } from './utils.js';

export function getFrontierCursorUpgrades(game: ParsedSavefile): UpgradeName[] {
    const arr: UpgradeName[] = [];

    const a = firstOneYouDontHaveWithQty(game, game.buildings.Cursor, [
        ['Reinforced index finger', 1],
        ['Carpal tunnel prevention cream', 1],
        ['Ambidextrous', 10],
    ]);
    if (a) arr.push(a);

    const b = firstOneYouDontHaveWithQty(game, game.buildings.Cursor, [
        ['Thousand fingers', 25],
        ['Million fingers', 50],
        ['Billion fingers', 100],
        ['Trillion fingers', 150],
        ['Quadrillion fingers', 200],
        ['Quintillion fingers', 250],
        ['Sextillion fingers', 300],
        ['Septillion fingers', 350],
        ['Octillion fingers', 400],
        ['Nonillion fingers', 450],
        ['Decillion fingers', 500],
        ['Undecillion fingers', 550],
    ]);
    if (b) arr.push(b);

    return arr;
}

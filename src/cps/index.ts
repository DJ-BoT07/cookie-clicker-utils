import { getBaseCps } from '../baseCps.js';
import { B } from '../constants.js';
import type { ParsedSavefile } from '../types.js';
import { getCursorCps } from './cursor.js';
import { getFarmCps } from './farm.js';
import { getGrandmaCps } from './grandma.js';

export function calculateCps(game: ParsedSavefile, elapsedTime: number = 0) {
    let totalCps = 0;

    // Cursor
    totalCps += getCursorCps(game);

    // Grandma
    totalCps += getGrandmaCps(game);

    // Farm
    totalCps += getFarmCps(game);

    // Temporary: All the rest
    for (let i = B.Farm + 1; i < game.buildings.length; ++i) {
        const buildingInfo = game.buildings[i]!;
        const baseCps = getBaseCps(i);
        totalCps += baseCps * buildingInfo.currentUnits;
    }

    const hasBeenOneMinute = elapsedTime >= 60;
    const mouseCps = totalCps <= 2 && !hasBeenOneMinute ? 2 : 0;
    return totalCps + mouseCps;
}

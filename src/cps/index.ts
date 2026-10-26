import { getBaseCps } from '../baseCps.js';
import type { ParsedSavefile } from '../types.js';
import { getCursorCps } from './cursor.js';
import { getFarmCps } from './farm.js';
import { getGrandmaCps } from './grandma.js';

export function calculateCps(game: ParsedSavefile, elapsedTime: number = 0) {
    let totalCps = 0;
    for (const buildingInfo of Object.values(game.buildings)) {
        switch (buildingInfo.SERIAL_IDX) {
            // Cursor
            case 0: {
                const cps = getCursorCps(game);
                totalCps += cps;
                break;
            }

            // Grandma
            case 1: {
                const cps = getGrandmaCps(game);
                totalCps += cps;
                break;
            }

            // Farm
            case 2: {
                const cps = getFarmCps(game);
                totalCps += cps;
                break;
            }

            default: {
                const baseCps = getBaseCps(buildingInfo.SERIAL_IDX);
                totalCps += baseCps * buildingInfo.currentUnits;
                break;
            }
        }
    }
    const hasBeenOneMinute = elapsedTime >= 60;
    const mouseCps = totalCps <= 2 && !hasBeenOneMinute ? 2 : 0;
    return totalCps + mouseCps;
}

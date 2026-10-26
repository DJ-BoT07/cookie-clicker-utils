import { getBaseCps } from '../baseCps.js';
import type { ParsedSavefile } from '../types.js';
import { hasUpgrade } from '../upgrade.js';

export function getGrandmaCps(game: ParsedSavefile) {
    const buildingInfo = game.buildings.Grandma;
    const baseCps = getBaseCps(buildingInfo.SERIAL_IDX);

    let cps = baseCps;

    if (hasUpgrade(game, 'Forwards from grandma')) cps *= 2;
    if (hasUpgrade(game, 'Steel-plated rolling pins')) cps *= 2;
    if (hasUpgrade(game, 'Lubricated dentures')) cps *= 2;
    if (hasUpgrade(game, 'Prune juice')) cps *= 2;
    if (hasUpgrade(game, 'Double-thick glasses')) cps *= 2;
    if (hasUpgrade(game, 'Aging agents')) cps *= 2;
    if (hasUpgrade(game, 'Xtreme walkers')) cps *= 2;
    if (hasUpgrade(game, 'The Unbridling')) cps *= 2;
    if (hasUpgrade(game, 'Reverse dementia')) cps *= 2;
    if (hasUpgrade(game, 'Timeproof hair dyes')) cps *= 2;
    if (hasUpgrade(game, 'Good manners')) cps *= 2;
    if (hasUpgrade(game, 'Generation degeneration')) cps *= 2;
    if (hasUpgrade(game, 'Visits')) cps *= 2;
    if (hasUpgrade(game, 'Kitchen cabinets')) cps *= 2;
    if (hasUpgrade(game, 'Foam-tipped canes')) cps *= 2;

    return cps * buildingInfo.currentUnits;
}

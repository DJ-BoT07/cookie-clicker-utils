import { getBaseCps } from '../baseCps.js';
import type { ParsedSavefile } from '../types.js';
import { hasUpgrade } from '../upgrade.js';

export function getGrandmaCps(game: ParsedSavefile) {
    const buildingInfo = game.buildings.Grandma;
    const baseCps = getBaseCps(buildingInfo.SERIAL_IDX);

    let cps = baseCps;

    // Tiered
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

    // Grandma variant
    if (hasUpgrade(game, 'Farmer grandmas')) cps *= 2;
    if (hasUpgrade(game, 'Miner grandmas')) cps *= 2;
    if (hasUpgrade(game, 'Worker grandmas')) cps *= 2;
    if (hasUpgrade(game, 'Cosmic grandmas')) cps *= 2;
    if (hasUpgrade(game, 'Transmuted grandmas')) cps *= 2;
    if (hasUpgrade(game, 'Altered grandmas')) cps *= 2;
    if (hasUpgrade(game, "Grandmas' grandmas")) cps *= 2;
    if (hasUpgrade(game, 'Antigrandmas')) cps *= 2;
    if (hasUpgrade(game, 'Rainbow grandmas')) cps *= 2;
    if (hasUpgrade(game, 'Banker grandmas')) cps *= 2;
    if (hasUpgrade(game, 'Priestess grandmas')) cps *= 2;
    if (hasUpgrade(game, 'Witch grandmas')) cps *= 2;
    if (hasUpgrade(game, 'Lucky grandmas')) cps *= 2;
    if (hasUpgrade(game, 'Metagrandmas')) cps *= 2;
    if (hasUpgrade(game, 'Binary grandmas')) cps *= 2;
    if (hasUpgrade(game, 'Alternate grandmas')) cps *= 2;
    if (hasUpgrade(game, 'Brainy grandmas')) cps *= 2;
    if (hasUpgrade(game, 'Clone grandmas')) cps *= 2;

    return cps * buildingInfo.currentUnits;
}

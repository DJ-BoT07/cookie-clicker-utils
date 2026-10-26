import { getBaseCps } from '../baseCps.js';
import { B } from '../constants.js';
import type { ParsedSavefile } from '../types.js';
import { hasUpgrade } from '../upgrade.js';

export function getFarmCps(game: ParsedSavefile) {
    const buildingInfo = game.buildings[B.Farm]!;
    const baseCps = getBaseCps(B.Farm);

    let cps = baseCps;

    if (hasUpgrade(game, 'Cheap hoes')) cps *= 2;
    if (hasUpgrade(game, 'Fertilizer')) cps *= 2;
    if (hasUpgrade(game, 'Cookie trees')) cps *= 2;
    if (hasUpgrade(game, 'Genetically-modified cookies')) cps *= 2;
    if (hasUpgrade(game, 'Gingerbread scarecrows')) cps *= 2;
    if (hasUpgrade(game, 'Pulsar sprinklers')) cps *= 2;
    if (hasUpgrade(game, 'Fudge fungus')) cps *= 2;
    if (hasUpgrade(game, 'Wheat triffids')) cps *= 2;
    if (hasUpgrade(game, 'Humane pesticides')) cps *= 2;
    if (hasUpgrade(game, 'Barnstars')) cps *= 2;
    if (hasUpgrade(game, 'Lindworms')) cps *= 2;
    if (hasUpgrade(game, 'Global seed vault')) cps *= 2;
    if (hasUpgrade(game, 'Reverse-veganism')) cps *= 2;
    if (hasUpgrade(game, 'Cookie mulch')) cps *= 2;
    if (hasUpgrade(game, 'Self-driving tractors')) cps *= 2;

    return cps * buildingInfo.currentUnits;
}

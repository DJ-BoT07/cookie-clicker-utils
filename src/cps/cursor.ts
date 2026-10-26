import { getBaseCps } from '../baseCps.js';
import type { ParsedSavefile } from '../types.js';
import { hasUpgrade } from '../upgrade.js';

export function getCursorCps(game: ParsedSavefile) {
    const buildingInfo = game.buildings.Cursor;

    const baseCps = getBaseCps(buildingInfo.SERIAL_IDX);
    let cps = baseCps;
    let addition = 0;

    if (hasUpgrade(game, 'Reinforced membrane')) cps *= 2;
    if (hasUpgrade(game, 'Carpal tunnel prevention cream')) cps *= 2;
    if (hasUpgrade(game, 'Ambidextrous')) cps *= 2;

    if (hasUpgrade(game, 'Thousand fingers')) {
        for (const buildingInfo of Object.values(game.buildings)) {
            if (buildingInfo.SERIAL_IDX === 0) continue;
            addition += 0.1 * buildingInfo.currentUnits;
        }
    }

    if (hasUpgrade(game, 'Million fingers')) {
        addition *= 5;
    }
    if (hasUpgrade(game, 'Billion fingers')) {
        addition *= 10;
    }
    if (hasUpgrade(game, 'Trillion fingers')) {
        addition *= 20;
    }
    if (hasUpgrade(game, 'Quadrillion fingers')) {
        addition *= 20;
    }
    if (hasUpgrade(game, 'Quintillion fingers')) {
        addition *= 20;
    }
    if (hasUpgrade(game, 'Sextillion fingers')) {
        addition *= 20;
    }
    if (hasUpgrade(game, 'Septillion fingers')) {
        addition *= 20;
    }
    if (hasUpgrade(game, 'Octillion fingers')) {
        addition *= 20;
    }
    if (hasUpgrade(game, 'Nonillion fingers')) {
        addition *= 20;
    }
    if (hasUpgrade(game, 'Decillion fingers')) {
        addition *= 20;
    }
    if (hasUpgrade(game, 'Undecillion fingers')) {
        addition *= 20;
    }

    return cps * buildingInfo.currentUnits;
}

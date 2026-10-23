import { twoSignificantDigits } from './constants.js';

const cachedBaseCps: Map<number, number> = new Map();

export function getBaseCps(id: number) {
    if (cachedBaseCps.has(id)) return cachedBaseCps.get(id);

    const baseCps = calculateBaseCps(id);

    cachedBaseCps.set(id, baseCps);
    return baseCps;
}

function calculateBaseCps(id: number) {
    if (id === 0) return 0.1;

    let baseCps = Math.ceil(Math.pow(id * 1, id * 0.5 + 2) * 10) / 10;
    return twoSignificantDigits(baseCps);
}

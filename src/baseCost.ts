import { twoSignificantDigits } from './utils.js';

const cachedBaseCosts: Map<number, number> = new Map();

export function getBaseCost(id: number) {
    if (cachedBaseCosts.has(id)) return cachedBaseCosts.get(id)!;

    const baseCost = calculateBaseCost(id);

    cachedBaseCosts.set(id, baseCost);
    return baseCost;
}

function calculateBaseCost(id: number) {
    if (id === 0) {
        return 15;
    }

    let baseCost =
        (id * 1 + 9 + (id < 5 ? 0 : Math.pow(id - 5, 1.75) * 5)) *
        Math.pow(10, id) *
        Math.max(1, id - 14);
    baseCost = twoSignificantDigits(baseCost);
    if (id >= 16) baseCost *= 10;
    if (id >= 17) baseCost *= 10;
    if (id >= 18) baseCost *= 10;
    if (id >= 19) baseCost *= 20;

    return baseCost;
}

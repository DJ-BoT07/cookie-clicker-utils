import { BuildingName } from './types.js';

export const UNIT_COST_MULT = 1.15;

export const BUILDING_BASE_COST: Record<BuildingName, number> = {
    [BuildingName.CURSOR]: 15,
    [BuildingName.GRANDMA]: 100,
    [BuildingName.FARM]: 1_100,
    [BuildingName.MINE]: 12_000,
    [BuildingName.FACTORY]: 130_000,
    [BuildingName.BANK]: 1_400_000,
    [BuildingName.TEMPLE]: 20_000_000,
    [BuildingName.WIZARD_TOWER]: 330_000_000,
    [BuildingName.SHIPMENT]: 5_100_000_000,
};

export function getNextUnitCost(baseCost: number, unitsSoFar: number) {
    return Math.ceil(baseCost * Math.pow(UNIT_COST_MULT, unitsSoFar));
}

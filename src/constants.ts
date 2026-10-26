import { BuildingName, type BuildingInfo } from './types.js';

export const UNIT_COST_MULT = 1.15;

export const THOUSAND = 1e3;
export const MILLION = 1e6;
export const BILLION = 1e9;
export const TRILLION = 1e12;
export const QUADRILLION = 1e15;
export const QUINTILLION = 1e18;
export const SEXTILLION = 1e21;
export const SEPTILLION = 1e24;
export const OCTILLION = 1e27;
export const NONILLION = 1e30;

export const BUILDING_LEDGER: Record<BuildingName, BuildingInfo> = {
    [BuildingName.CURSOR]: {
        SERIAL_IDX: 0,

        currentUnits: 0,
        lifetimeCookies: 0,
        level: '',
        lifetimeMaxUnits: 0,
        minigameData: '',
        muted: '',
        totalUnitsBought: 0,
    },
    [BuildingName.GRANDMA]: {
        SERIAL_IDX: 1,

        currentUnits: 0,
        lifetimeCookies: 0,
        level: '',
        lifetimeMaxUnits: 0,
        minigameData: '',
        muted: '',
        totalUnitsBought: 0,
    },
    [BuildingName.FARM]: {
        SERIAL_IDX: 2,

        currentUnits: 0,
        lifetimeCookies: 0,
        level: '',
        lifetimeMaxUnits: 0,
        minigameData: '',
        muted: '',
        totalUnitsBought: 0,
    },
    [BuildingName.MINE]: {
        SERIAL_IDX: 3,

        currentUnits: 0,
        lifetimeCookies: 0,
        level: '',
        lifetimeMaxUnits: 0,
        minigameData: '',
        muted: '',
        totalUnitsBought: 0,
    },
    [BuildingName.FACTORY]: {
        SERIAL_IDX: 4,

        currentUnits: 0,
        lifetimeCookies: 0,
        level: '',
        lifetimeMaxUnits: 0,
        minigameData: '',
        muted: '',
        totalUnitsBought: 0,
    },
    [BuildingName.BANK]: {
        SERIAL_IDX: 5,

        currentUnits: 0,
        lifetimeCookies: 0,
        level: '',
        lifetimeMaxUnits: 0,
        minigameData: '',
        muted: '',
        totalUnitsBought: 0,
    },
    [BuildingName.TEMPLE]: {
        SERIAL_IDX: 6,

        currentUnits: 0,
        lifetimeCookies: 0,
        level: '',
        lifetimeMaxUnits: 0,
        minigameData: '',
        muted: '',
        totalUnitsBought: 0,
    },
    [BuildingName.WIZARD_TOWER]: {
        SERIAL_IDX: 7,

        currentUnits: 0,
        lifetimeCookies: 0,
        level: '',
        lifetimeMaxUnits: 0,
        minigameData: '',
        muted: '',
        totalUnitsBought: 0,
    },
    [BuildingName.SHIPMENT]: {
        SERIAL_IDX: 8,

        currentUnits: 0,
        lifetimeCookies: 0,
        level: '',
        lifetimeMaxUnits: 0,
        minigameData: '',
        muted: '',
        totalUnitsBought: 0,
    },
    [BuildingName.ALCHEMY_LAB]: {
        SERIAL_IDX: 9,

        currentUnits: 0,
        lifetimeCookies: 0,
        level: '',
        lifetimeMaxUnits: 0,
        minigameData: '',
        muted: '',
        totalUnitsBought: 0,
    },
    [BuildingName.PORTAL]: {
        SERIAL_IDX: 10,

        currentUnits: 0,
        lifetimeCookies: 0,
        level: '',
        lifetimeMaxUnits: 0,
        minigameData: '',
        muted: '',
        totalUnitsBought: 0,
    },
    [BuildingName.TIME_MACHINE]: {
        SERIAL_IDX: 11,

        currentUnits: 0,
        lifetimeCookies: 0,
        level: '',
        lifetimeMaxUnits: 0,
        minigameData: '',
        muted: '',
        totalUnitsBought: 0,
    },
    [BuildingName.ANTIMATTER_CONDENSER]: {
        SERIAL_IDX: 12,

        currentUnits: 0,
        lifetimeCookies: 0,
        level: '',
        lifetimeMaxUnits: 0,
        minigameData: '',
        muted: '',
        totalUnitsBought: 0,
    },
    [BuildingName.PRISM]: {
        SERIAL_IDX: 13,

        currentUnits: 0,
        lifetimeCookies: 0,
        level: '',
        lifetimeMaxUnits: 0,
        minigameData: '',
        muted: '',
        totalUnitsBought: 0,
    },
    [BuildingName.CHANCEMAKER]: {
        SERIAL_IDX: 14,

        currentUnits: 0,
        lifetimeCookies: 0,
        level: '',
        lifetimeMaxUnits: 0,
        minigameData: '',
        muted: '',
        totalUnitsBought: 0,
    },
    [BuildingName.FRACTAL_ENGINE]: {
        SERIAL_IDX: 15,

        currentUnits: 0,
        lifetimeCookies: 0,
        level: '',
        lifetimeMaxUnits: 0,
        minigameData: '',
        muted: '',
        totalUnitsBought: 0,
    },
    [BuildingName.JAVASCRIPT_CONSOLE]: {
        SERIAL_IDX: 16,

        currentUnits: 0,
        lifetimeCookies: 0,
        level: '',
        lifetimeMaxUnits: 0,
        minigameData: '',
        muted: '',
        totalUnitsBought: 0,
    },
    [BuildingName.IDLEVERSE]: {
        SERIAL_IDX: 17,

        currentUnits: 0,
        lifetimeCookies: 0,
        level: '',
        lifetimeMaxUnits: 0,
        minigameData: '',
        muted: '',
        totalUnitsBought: 0,
    },
    [BuildingName.CORTEX_BAKER]: {
        SERIAL_IDX: 18,

        currentUnits: 0,
        lifetimeCookies: 0,
        level: '',
        lifetimeMaxUnits: 0,
        minigameData: '',
        muted: '',
        totalUnitsBought: 0,
    },
    [BuildingName.YOU]: {
        SERIAL_IDX: 19,

        currentUnits: 0,
        lifetimeCookies: 0,
        level: '',
        lifetimeMaxUnits: 0,
        minigameData: '',
        muted: '',
        totalUnitsBought: 0,
    },
};

export function getNextUnitCost(baseCost: number, unitsSoFar: number) {
    return Math.ceil(baseCost * Math.pow(UNIT_COST_MULT, unitsSoFar));
}

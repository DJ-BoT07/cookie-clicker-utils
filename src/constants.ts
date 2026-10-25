import { getBaseCps } from './baseCps.js';
import {
    BuildingName,
    type BuildingInfo,
    type ParsedSavefile,
} from './types.js';
import { hasUpgrade } from './u.js';

export const UNIT_COST_MULT = 1.15;

const THOUSAND = 1e3;
const MILLION = 1e6;
const BILLION = 1e9;
const TRILLION = 1e12;
const QUADRILLION = 1e15;
const QUINTILLION = 1e18;
const SEXTILLION = 1e21;
const SEPTILLION = 1e24;
const OCTILLION = 1e27;
const NONILLION = 1e30;

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

export const CURSOR_UPGRADES = [
    [
        'Reinforced index finger',
        100,
        0,
        'The mouse and cursors are twice as efficient.\n"prod prod"',
    ],
    [
        'Carpal tunnel prevention cream',
        500,
        1,
        'The mouse and cursors are twice as efficient.\n"it... it hurts to click..."',
    ],
    [
        'Ambidextrous',
        10 * THOUSAND,
        2,
        'The mouse and cursors are twice as efficient.\n"Look ma, both hands!"',
    ],
    [
        'Thousand fingers',
        100 * THOUSAND,
        3,
        'The mouse and cursors gain +0.1 cookies for each non-cursor object owned.\n"clickity"',
    ],
    [
        'Million fingers',
        10 * MILLION,
        4,
        'Multiplies the gain from Thousand fingers by 5.\n"clickityclickity"',
    ],
    [
        'Billion fingers',
        100 * MILLION,
        5,
        'Multiplies the gain from Thousand fingers by 10.\n"clickityclickityclickity"',
    ],
    [
        'Trillion fingers',
        1 * BILLION,
        6,
        'Multiplies the gain from Thousand fingers by 20.\n"clickityclickityclickityclickity"',
    ],
    [
        'Quadrillion fingers',
        10 * BILLION,
        43,
        'Multiplies the gain from Thousand fingers by 20.\n"clickityclickityclickityclickityclick"',
    ],
    [
        'Quintillion fingers',
        10 * TRILLION,
        82,
        'Multiplies the gain from Thousand fingers by 20.\n"man, just go click click click click click, it’s real easy, man."',
    ],
    [
        'Sextillion fingers',
        10 * QUADRILLION,
        109,
        'Multiplies the gain from Thousand fingers by 20.\n"sometimes\nthings just\nclick"',
    ],
    [
        'Septillion fingers',
        10 * QUINTILLION,
        188,
        'Multiplies the gain from Thousand fingers by 20.\n"[cursory flavor text]"',
    ],
    [
        'Octillion fingers',
        10 * SEXTILLION,
        189,
        'Multiplies the gain from Thousand fingers by 20..\n"Turns out you can quite put your finger on it."',
    ],
    [
        'Nonillion fingers',
        10 * SEPTILLION,
        660,
        'Multiplies the gain from Thousand fingers by 20.\n"Only for the freakiest handshakes."',
    ],
    [
        'Decillion fingers',
        10 * OCTILLION,
        764,
        'Multiplies the gain from Thousand fingers by 20.\n"If you still can\'t quite put your finger on it, you must not be trying very hard."',
    ],
    [
        'Undecillion fingers',
        10 * NONILLION,
        873,
        'Multiplies the gain from Thousand fingers by 20.\n"Whatever you touch\nturns to dough in your clutch."',
    ],
] as const;

export function getNextUnitCost(baseCost: number, unitsSoFar: number) {
    return Math.ceil(baseCost * Math.pow(UNIT_COST_MULT, unitsSoFar));
}

export function calculateCps(game: ParsedSavefile, elapsedTime: number = 0) {
    let totalCps = 0;
    for (const buildingInfo of Object.values(game.buildings)) {
        if (buildingInfo.SERIAL_IDX === 0) {
            const cps = getCursorCps(game);
            totalCps += cps;
        } else if (buildingInfo.SERIAL_IDX === 1) {
            const cps = getGrandmaCps(game);
            totalCps += cps;
        } else {
            const baseCps = getBaseCps(buildingInfo.SERIAL_IDX);
            totalCps += baseCps * buildingInfo.currentUnits;
        }
    }
    const hasBeenOneMinute = elapsedTime >= 60;
    const mouseCps = totalCps <= 2 && !hasBeenOneMinute ? 2 : 0;
    return totalCps + mouseCps;
}

function getCursorCps(game: ParsedSavefile) {
    const buildingInfo = game.buildings.Cursor;

    const baseCps = getBaseCps(buildingInfo.SERIAL_IDX);
    let cps = baseCps;
    let addition = 0;

    if (hasUpgrade(game, 0)) cps *= 2;
    if (hasUpgrade(game, 1)) cps *= 2;
    if (hasUpgrade(game, 2)) cps *= 2;
    if (hasUpgrade(game, 3)) {
        for (const buildingInfo of Object.values(game.buildings)) {
            if (buildingInfo.SERIAL_IDX === 0) continue;
            addition += 0.1 * buildingInfo.currentUnits;
        }
    }
    if (hasUpgrade(game, 4)) {
        addition *= 5;
    }
    if (hasUpgrade(game, 5)) {
        addition *= 10;
    }
    if (hasUpgrade(game, 6)) {
        addition *= 20;
    }
    if (hasUpgrade(game, 43)) {
        addition *= 20;
    }
    if (hasUpgrade(game, 82)) {
        addition *= 20;
    }
    if (hasUpgrade(game, 109)) {
        addition *= 20;
    }
    if (hasUpgrade(game, 188)) {
        addition *= 20;
    }
    if (hasUpgrade(game, 189)) {
        addition *= 20;
    }
    if (hasUpgrade(game, 660)) {
        addition *= 20;
    }
    if (hasUpgrade(game, 764)) {
        addition *= 20;
    }
    if (hasUpgrade(game, 873)) {
        addition *= 20;
    }

    return cps * buildingInfo.currentUnits;
}

function getGrandmaCps(game: ParsedSavefile) {
    const buildingInfo = game.buildings.Grandma;
    const baseCps = getBaseCps(buildingInfo.SERIAL_IDX);

    let cps = baseCps;
    if (hasUpgrade(game, 7)) cps *= 2;
    if (hasUpgrade(game, 8)) cps *= 2;
    if (hasUpgrade(game, 9)) cps *= 2;

    return cps * buildingInfo.currentUnits;
}

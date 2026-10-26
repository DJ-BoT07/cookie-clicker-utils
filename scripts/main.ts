import { getBaseCost } from '../src/baseCost.js';
import { getNextUnitCost } from '../src/constants.js';
import { calculateCps } from '../src/cps/index.js';
import {
    addUpgrade,
    addUpgradeByIndex,
    removeUpgrade,
} from '../src/upgrade.js';
import type { ParsedSavefile } from '../src/types.js';
import { parseSavefile } from './utils.js';
import { getFrontierUpgrades } from '../src/upgrades/unlocks/index.js';
import { AllUpgrades } from '../src/upgrades/index.js';

const game = parseSavefile('default');

const MAXTURNS = 100;
const MAXTIME = 15 * 60;

type Entry = {
    path: string;
    cps: number;
    time: number;
};

// Path: B1,B2,U1,...
// UID: B1#2B2#1U1#1...

function generateUID(path: string) {
    const choices = path.split(',');
    const count: Record<string, number> = {};
    choices.forEach((choice) => {
        if (!count[choice]) count[choice] = 0;
        count[choice]++;
    });
    const uid = Object.entries(count)
        .map(([a, b]) => `${a}#${b}`)
        .sort()
        .join('');
    return uid;
}

function applyPath(game: ParsedSavefile, path: string) {
    for (const buildingInfo of Object.values(game.buildings)) {
        buildingInfo.currentUnits = 0;
    }
    game.upgrades = new Array(game.upgrades.length).fill('0').join('');

    const choices = path.split(',');
    choices.forEach((choice) => {
        const type = choice[0];
        const idx = parseInt(choice.substring(1));
        if (type === 'B') {
            const buildingInfo = game.buildings[idx]!;
            buildingInfo.currentUnits++;
        } else {
            addUpgradeByIndex(game, idx);
        }
    });
}

function tryAddingEntry(entry: Entry) {
    const hash = generateUID(entry.path);
    if (Object.hasOwn(newResults, hash)) {
        const prevEntry = newResults[hash]!;
        if (prevEntry.time > entry.time) {
            newResults[hash] = entry;
        } else {
            // noop
        }
    } else {
        newResults[hash] = entry;
    }
}

function generatePossibilities(
    game: ParsedSavefile,
    path: string,
    elapsedTime: number,
) {
    // Assume that the start is valid. Only consideration should be while generating a new possibility.
    const currentCps = calculateCps(game, elapsedTime);

    // Consider each building
    for (
        let buildingIdx = 0;
        buildingIdx < game.buildings.length;
        ++buildingIdx
    ) {
        const buildingInfo = game.buildings[buildingIdx]!;
        const baseCost = getBaseCost(buildingIdx);

        const cost = getNextUnitCost(baseCost, buildingInfo.currentUnits);

        const timeInSeconds = Math.max(0, Math.round(cost / currentCps));

        // Check time constraint
        if (elapsedTime + timeInSeconds > MAXTIME) {
            continue;
        }

        // Purchase the building
        buildingInfo.currentUnits++;

        const newCps = calculateCps(game, elapsedTime + timeInSeconds);

        const result: Entry = {
            path: path + (path.length ? ',' : '') + `B${buildingIdx}`,
            cps: newCps,
            time: elapsedTime + timeInSeconds,
        };
        tryAddingEntry(result);

        // Remove the building
        buildingInfo.currentUnits--;
    }

    // Consider upgrades

    const upgradesWithPrices = getFrontierUpgrades(game);
    // console.log(
    //     'options',
    //     upgradesWithPrices.map((e) => e[0]),
    // );
    upgradesWithPrices.forEach(([upgradeName, cost]) => {
        const upgradeIdx = AllUpgrades[upgradeName].id;

        const timeInSeconds = Math.max(0, Math.round(cost / currentCps));

        // Check time constraint
        if (elapsedTime + timeInSeconds > MAXTIME) return;

        addUpgrade(game, upgradeName);

        const newCps = calculateCps(game, elapsedTime + timeInSeconds);

        const result: Entry = {
            path: path + (path.length ? ',' : '') + `U${upgradeIdx}`,
            cps: newCps,
            time: elapsedTime + timeInSeconds,
        };
        tryAddingEntry(result);

        removeUpgrade(game, upgradeName);
    });

    // // Cursor
    // {
    //     for (const { cost, idx } of [
    //         { cost: 100, idx: 0 },
    //         { cost: 500, idx: 1 },
    //         { cost: 10e3, idx: 2 },
    //     ]) {
    //         if (hasUpgrade(game, idx)) continue;
    //         if (game.buildings.Cursor.currentUnits === 0) continue;

    //         const timeInSeconds = Math.max(0, Math.round(cost / currentCps));

    //         // Check time constraint
    //         if (elapsedTime + timeInSeconds > MAXTIME) continue;

    //         addUpgrade(game, idx);

    //         const newCps = calculateCps(game, elapsedTime + timeInSeconds);

    //         const result: Entry = {
    //             path: path + (path.length ? ',' : '') + `U${idx}`,
    //             cps: newCps,
    //             time: elapsedTime + timeInSeconds,
    //         };
    //         tryAddingEntry(result);

    //         removeUpgrade(game, idx);
    //     }
    // }

    // // Grandma
    // {
    //     for (const { cost, idx } of [
    //         { cost: 1e3, idx: 7 },
    //         { cost: 5e3, idx: 8 },
    //         { cost: 50e3, idx: 9 },
    //     ]) {
    //         if (hasUpgrade(game, idx)) continue;
    //         if (game.buildings.Grandma.currentUnits === 0) continue;

    //         const timeInSeconds = Math.max(0, Math.round(cost / currentCps));

    //         // Check time constraint
    //         if (elapsedTime + timeInSeconds > MAXTIME) continue;

    //         addUpgrade(game, idx);

    //         const newCps = calculateCps(game, elapsedTime + timeInSeconds);

    //         const result: Entry = {
    //             path: path + (path.length ? ',' : '') + `U${idx}`,
    //             cps: newCps,
    //             time: elapsedTime + timeInSeconds,
    //         };
    //         tryAddingEntry(result);

    //         removeUpgrade(game, idx);
    //     }
    // }
}

const firstPath = '';

let oldResults: Record<string, Entry> = {
    '': {
        path: firstPath,
        cps: calculateCps(game),
        time: 0,
    },
};
let newResults: Record<string, Entry> = {};
const totalResults: Record<string, Entry> = {};

for (let turn = 1; turn <= MAXTURNS; ++turn) {
    for (const result of Object.values(oldResults)) {
        applyPath(game, result.path);
        generatePossibilities(game, result.path, result.time);
    }

    Object.assign(totalResults, newResults);

    oldResults = newResults;
    newResults = {};
}

const t = Object.values(totalResults);
t.sort((a, b) => a.time - b.time); // sort by time (secondary)
t.sort((a, b) => -(a.cps - b.cps)); // sort by cps (primary)
console.log(t.slice(0, 5));
console.log(t.length);

import { BUILDING_LEDGER } from '../constants.js';
import type {
    MiscGameData,
    ParsedSavefile,
    PreferencesInfo,
    RunInfo,
} from '../types.js';
import { parsePreferences } from './preferences.js';
import { parseRunData } from './run.js';

export function parseDecodedSavestring(decodedSavestring: string) {
    const pipes = decodedSavestring.split('|');

    const version = pipes[0]!;

    // const future = pipes[1]!;

    const run = parseRunData(pipes[2]!);

    const preferences = parsePreferences(pipes[3]!);

    const misc = parseMisc(pipes[4]!);

    const buildings = parseBuildings(pipes[5]!);

    const upgrades = pipes[6]!;
    const achievements = pipes[7]!;
    const buffs = pipes[8]!;

    const parsedData: ParsedSavefile = {
        version,
        run,
        preferences,
        misc,
        buildings,
        upgrades,
        achievements,
        buffs,
    };

    return parsedData;
}

function parseMisc(miscstring: string) {
    const arr = miscstring.split(';');
    const misc: MiscGameData = {
        cookies: parseFloat(arr[0] || '0'),
        totalCookiesEarned: parseFloat(arr[1] || '0'),
        cookieClicks: parseInt(arr[2] || '0'),
        goldenCookieClicks_lifetime: parseInt(arr[3] || '0'),
        cookiesMadeByClicking: parseFloat(arr[4] || '0'),
        goldenCookiesMissed: parseInt(arr[5] || '0'),
        backgroundType: parseInt(arr[6] || '0'),
        milkType: parseInt(arr[7] || '0'),
        cookiesFromPastRuns: parseFloat(arr[8] || '0'),
        elderWrath: parseInt(arr[9] || '0'),
        pledges: parseInt(arr[10] || '0'),
        pledgeTimeLeft: parseInt(arr[11] || '0'),
        currentlyResearching: parseInt(arr[12] || '0'),
        researchTimeLeft: parseInt(arr[13] || '0'),
        ascensions: parseInt(arr[14] || '0'),
        goldenCookieClicks_thisRun: parseInt(arr[15] || '0'),
        cookiesSuckedByWrinklers: parseFloat(arr[16] || '0'),
        wrinklersPopped: parseInt(arr[17] || '0'),
        santaLevel: parseInt(arr[18] || '0'),
        reindeerClicked: parseInt(arr[19] || '0'),
        seasonTimeLeft: parseInt(arr[20] || '0'),
        seasonSwitcherUses: parseInt(arr[21] || '0'),
        currentSeason: arr[22] || '',
        amountOfCookiesContainedInWrinklers: parseFloat(arr[23] || '0'),
        numberOfWrinklers: parseInt(arr[24] || '0'),
        prestigeLevel: parseFloat(arr[25] || '0'),
        heavenlyChips: parseFloat(arr[26] || '0'),
        heavenlyChipsSpent: parseFloat(arr[27] || '0'),
        heavenlyCookies: parseFloat(arr[28] || '0'),
        ascensionMode: parseInt(arr[29] || '0'),
        permanentUpgrade1: parseInt(arr[30] || '-1'),
        permanentUpgrade2: parseInt(arr[31] || '-1'),
        permanentUpgrade3: parseInt(arr[32] || '-1'),
        permanentUpgrade4: parseInt(arr[33] || '-1'),
        permanentUpgrade5: parseInt(arr[34] || '-1'),
        dragonLevel: parseInt(arr[35] || '0'),
        dragonAura: parseInt(arr[36] || '0'),
        dragonAura2: parseInt(arr[37] || '0'),
        chimeType: parseInt(arr[38] || '0'),
        volume: parseInt(arr[39] || '0'),
        numberOfShinyWrinklers: parseInt(arr[40] || '0'),
        amountOfCookiesContainedInShinyWrinklers: parseFloat(arr[41] || '0'),
        currentAmountOfSugarLumps: parseFloat(arr[42] || '0'),
        totalAmountOfSugarLumpsMade: parseFloat(arr[43] || '0'),
        timeWhenCurrentSugarLumpStarted: parseFloat(arr[44] || '0'),
        timeWhenLastRefilledAMinigameWithASugarLump: parseFloat(arr[45] || '0'),
        sugarLumpType: parseInt(arr[46] || '0'),
        vault: arr[47] || '',
        heralds: parseInt(arr[48] || '0'),
        goldenCookieFortune: parseInt(arr[49] || '0'),
        cpSFortune: parseInt(arr[50] || '0'),
        highestRawCpS: parseFloat(arr[51] || '0'),
        musicVolume: parseInt(arr[52] || '0'),
        cookiesSent: parseInt(arr[53] || '0'),
        cookiesReceived: parseInt(arr[54] || '0'),
    };

    return misc;
}

function parseBuildings(buildingString: string) {
    const buildingStrings = buildingString.split(';');
    const buildingLedgerClone = structuredClone(BUILDING_LEDGER);

    for (const buildingInfo of Object.values(buildingLedgerClone)) {
        const serialIdx = buildingInfo.SERIAL_IDX;

        const val = buildingStrings[serialIdx]!;
        const [
            _currentUnits,
            _totalUnitsBought,
            _lifetimeCookies,
            _level,
            _minigameData,
            _muted,
            _lifetimeMaxUnits,
        ] = val.split(',');

        buildingInfo.currentUnits = parseInt(_currentUnits || '0');
        buildingInfo.lifetimeCookies = parseInt(_lifetimeCookies || '0');
    }

    return buildingLedgerClone;
}

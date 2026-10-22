import type {
    MiscGameData,
    ParsedSavefile,
    PreferencesInfo,
    RunInfo,
} from './types.js';

export function parseDecodedSavestring(decodedSavestring: string) {
    const pipes = decodedSavestring.split('|');

    const version = pipes[0]!;

    // const future = pipes[1]!;

    const run = parseRunData(pipes[2]!);

    const preferences = parsePreferences(pipes[3]!);

    const misc = parseMisc(pipes[4]!);

    const buildings = pipes[5]!;
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

function parseRunData(runstring: string) {
    const [
        _ascensionStart,
        _legacyStart,
        _lastOpened,
        _bakeryName,
        _seed,
        _youAppearance,
    ] = runstring.split(';');

    const ascensionStart = parseInt(_ascensionStart || '0');
    const legacyStart = parseInt(_legacyStart || '0');
    const lastOpened = parseInt(_lastOpened || '0');
    const bakeryName = _bakeryName || '';
    const seed = _seed || '';
    const youAppearance = _youAppearance || '';

    const run: RunInfo = {
        ascensionStart,
        legacyStart,
        lastOpened,
        bakeryName,
        seed,
        youAppearance,
    };

    return run;
}

function parsePreferences(prefstring: string) {
    const prefs: PreferencesInfo = {
        particles: prefstring[0]! === '1',
        numbers: prefstring[1]! === '1',
        autoSave: prefstring[2]! === '1',
        autoUpdate: prefstring[3]! === '1',
        milk: prefstring[4]! === '1',
        fancyGraphics: prefstring[5]! === '1',
        closingWarning: prefstring[6]! === '1',
        cursors: prefstring[7]! === '1',
        defocus: prefstring[8]! === '1',
        shortNumbers: prefstring[9]! === '1',
        fastNotes: prefstring[10]! === '1',
        wobblyCookie: prefstring[11]! === '1',
        altFont: prefstring[12]! === '1',
        CSSFilters: prefstring[13]! === '1',
        altCookieSound: prefstring[14]! === '1',
        iconCrates: prefstring[15]! === '1',
        backupWarning: prefstring[16]! === '1',
        extraButtons: prefstring[17]! === '1',
        lumpConfirmation: prefstring[18]! === '1',
        customGrandmas: prefstring[19]! === '1',
        sleepMode: prefstring[20]! === '1',
        enableCloudSaving: prefstring[21]! === '1',
        musicInBackground: prefstring[22]! === '1',
        scaryStuffOff: prefstring[23]! === '1',
        fullscreen: prefstring[24]! === '1',
        screenReader: prefstring[25]! === '1',
        discordPresence: prefstring[26]! === '1',
    };

    return prefs;
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

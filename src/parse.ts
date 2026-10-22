import type { ParsedSavefile, PreferencesInfo, RunInfo } from './types.js';

export function parseDecodedSavestring(decodedSavestring: string) {
    const pipes = decodedSavestring.split('|');

    const version = pipes[0]!;

    // const future = pipes[1]!;

    const run = parseRunData(pipes[2]!);

    const preferences = parsePreferences(pipes[3]!);

    const misc = pipes[4]!;
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

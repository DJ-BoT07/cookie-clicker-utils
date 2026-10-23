import { BUILDING_LEDGER } from '../constants.js';
import type {
    MiscGameData,
    ParsedSavefile,
    PreferencesInfo,
    RunInfo,
} from '../types.js';
import { parseBuildings } from './buildings.js';
import { parseMisc } from './misc.js';
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

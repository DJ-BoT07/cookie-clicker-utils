import { BUILDING_LEDGER } from '../constants.js';
import type { BuildingInfo, BuildingName } from '../types.js';

export function parseBuildings(buildingString: string) {
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

        buildingInfo.currentUnits = parseFloat(_currentUnits || '0');
        buildingInfo.totalUnitsBought = parseFloat(_totalUnitsBought || '0');
        buildingInfo.lifetimeCookies = parseFloat(_lifetimeCookies || '0');
        buildingInfo.level = _level || '';
        buildingInfo.minigameData = _minigameData || '';
        buildingInfo.muted = _muted || '';
        buildingInfo.lifetimeMaxUnits = parseFloat(_lifetimeMaxUnits || '0');
    }

    return buildingLedgerClone;
}

export function serializeBuildings(
    buildingLedgerClone: Record<BuildingName, BuildingInfo>,
) {
    let buildingstring = '';
    const numBuildings = Object.keys(buildingLedgerClone).length;
    for (let i = 0; i < numBuildings; ++i) {
        for (const buildingInfo of Object.values(buildingLedgerClone)) {
            if (buildingInfo.SERIAL_IDX === i) {
                const x = [
                    buildingInfo.currentUnits,
                    buildingInfo.totalUnitsBought,
                    buildingInfo.lifetimeCookies,
                    buildingInfo.level,
                    buildingInfo.minigameData,
                    buildingInfo.muted,
                    buildingInfo.lifetimeMaxUnits,
                ]
                    .map(String)
                    .join(',');

                buildingstring += x + ';';
            }
        }
    }

    return buildingstring;
}

import type { BuildingInfo } from '../types.js';

export function parseBuildings(buildingString: string) {
    const buildingStrings = buildingString.split(';');
    const buildingLedger: BuildingInfo[] = [];

    for (const buildingString of buildingStrings) {
        const [
            _currentUnits,
            _totalUnitsBought,
            _lifetimeCookies,
            _level,
            _minigameData,
            _muted,
            _lifetimeMaxUnits,
        ] = buildingString.split(',');

        buildingLedger.push({
            currentUnits: parseFloat(_currentUnits || '0'),
            level: _level || '',
            lifetimeCookies: parseFloat(_lifetimeCookies || '0'),
            lifetimeMaxUnits: parseFloat(_lifetimeMaxUnits || '0'),
            minigameData: _minigameData || '',
            muted: _muted || '',
            totalUnitsBought: parseFloat(_totalUnitsBought || '0'),
        });
    }

    return buildingLedger;
}

export function serializeBuildings(buildingLedgerClone: Array<BuildingInfo>) {
    let buildingstring = '';
    for (const buildingInfo of buildingLedgerClone) {
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

    return buildingstring;
}

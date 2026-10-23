import type { RunInfo } from '../types.js';

export function parseRunData(runstring: string): RunInfo {
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

export function serializeRunData(run: RunInfo): string {
    const ascensionStart = String(run.ascensionStart);
    const legacyStart = String(run.legacyStart);
    const lastOpened = String(run.lastOpened);
    const bakeryName = run.bakeryName;
    const seed = run.seed;
    const youAppearance = run.youAppearance;

    return [
        ascensionStart,
        legacyStart,
        lastOpened,
        bakeryName,
        seed,
        youAppearance,
    ].join(';');
}

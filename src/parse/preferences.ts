import type { PreferencesInfo } from '../types.js';

export function parsePreferences(prefstring: string) {
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

export function serializePreferences(prefs: PreferencesInfo): string {
    const prefstring = [
        String(Number(prefs.particles)),
        String(Number(prefs.numbers)),
        String(Number(prefs.autoSave)),
        String(Number(prefs.autoUpdate)),
        String(Number(prefs.milk)),
        String(Number(prefs.fancyGraphics)),
        String(Number(prefs.closingWarning)),
        String(Number(prefs.cursors)),
        String(Number(prefs.defocus)),
        String(Number(prefs.shortNumbers)),
        String(Number(prefs.fastNotes)),
        String(Number(prefs.wobblyCookie)),
        String(Number(prefs.altFont)),
        String(Number(prefs.CSSFilters)),
        String(Number(prefs.altCookieSound)),
        String(Number(prefs.iconCrates)),
        String(Number(prefs.backupWarning)),
        String(Number(prefs.extraButtons)),
        String(Number(prefs.lumpConfirmation)),
        String(Number(prefs.customGrandmas)),
        String(Number(prefs.sleepMode)),
        String(Number(prefs.enableCloudSaving)),
        String(Number(prefs.musicInBackground)),
        String(Number(prefs.scaryStuffOff)),
        String(Number(prefs.fullscreen)),
        String(Number(prefs.screenReader)),
        String(Number(prefs.discordPresence)),
    ].join('');

    return prefstring;
}

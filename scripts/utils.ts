import { readFileSync } from 'node:fs';
import { SAVEFILE_DIR } from './constants.js';
import { decodeSavestring } from '../src/decode.js';
import { parseDecodedSavestring } from '../src/parse/index.js';

export function parseSavefile(filename: string) {
    const savestring = readFileSync(`${SAVEFILE_DIR}/${filename}`).toString();
    const decoded = decodeSavestring(savestring);
    const parsed = parseDecodedSavestring(decoded);
    return parsed;
}

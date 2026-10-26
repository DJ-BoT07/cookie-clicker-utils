import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { DECODED_SAVEFILE_DIR, SAVEFILE_DIR } from './constants.js';
import { decodeSavestring } from '../src/decode.js';

const savefiles = readdirSync(SAVEFILE_DIR);

// Create decoded folder
mkdirSync(DECODED_SAVEFILE_DIR, {
    recursive: true,
});

for (const filename of savefiles) {
    const savefile = readFileSync(`${SAVEFILE_DIR}/${filename}`).toString();

    const decoded = decodeSavestring(savefile);

    writeFileSync(`${DECODED_SAVEFILE_DIR}/${filename}.json`, decoded);
}

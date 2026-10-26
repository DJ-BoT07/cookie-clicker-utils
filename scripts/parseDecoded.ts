import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { DECODED_SAVEFILE_DIR, PARSED_SAVEFILE_DIR } from './constants.js';
import { parseDecodedSavestring } from '../src/parse/index.js';
import path from 'node:path';

const decodedSavefiles = readdirSync(DECODED_SAVEFILE_DIR);

// Create parsed folder
mkdirSync(PARSED_SAVEFILE_DIR, {
    recursive: true
});

for (const filename of decodedSavefiles) {
    const filepath = `${DECODED_SAVEFILE_DIR}/${filename}`;
    const filenameWithoutExt = path.parse(filepath).name;

    const decodedSavestring = readFileSync(filepath).toString();

    const parsed = parseDecodedSavestring(decodedSavestring);

    writeFileSync(
        `${PARSED_SAVEFILE_DIR}/${filenameWithoutExt}.json`,
        JSON.stringify(parsed, null, 2),
    );
}

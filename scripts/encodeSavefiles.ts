import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { ENCODED_SAVEFILE_DIR, PARSED_SAVEFILE_DIR } from './constants.js';
import { serializeParsedSavestring } from '../src/parse/index.js';
import { encodeSavestring } from '../src/encode.js';

mkdirSync(ENCODED_SAVEFILE_DIR, {
    recursive: true,
});

const parsedSavefiles = readdirSync(PARSED_SAVEFILE_DIR);

parsedSavefiles.forEach((filename) => {
    const parsed = JSON.parse(
        readFileSync(`${PARSED_SAVEFILE_DIR}/${filename}`).toString(),
    );
    const serialized = serializeParsedSavestring(parsed);
    const encoded = encodeSavestring(serialized);

    writeFileSync(`${ENCODED_SAVEFILE_DIR}/${filename}`, encoded);
});

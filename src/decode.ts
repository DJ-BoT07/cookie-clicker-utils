/**
 * Decode the savestring to a human readable & editable format.
 *
 * Performs the following actions in order:
 * 1. Removes URI formatting
 * 2. Removes the sentinel-token "!END!" from the end
 * 3. Removes base-64 encoding
 */
export function decodeSavestring(savestring: string) {
    const uriDecoded = decodeURIComponent(savestring);
    const withoutEndToken = uriDecoded.substring(
        0,
        uriDecoded.length - '!END!'.length,
    );
    const base64Decoded = atob(withoutEndToken);
    return base64Decoded;
}

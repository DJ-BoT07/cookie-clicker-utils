/**
 * Encode the human readable save data to the Cookie Clicker savestring format.
 *
 * Performs the following actions in order:
 * 1. Applies base-64 encoding
 * 2. Adds the sentinel-token "!END!" to the end
 * 3. Applies URI formatting
 */
export function encodeSavestring(savestring: string) {
    const base64Encoded = btoa(savestring);
    const withEndToken = base64Encoded + '!END!';
    const uriEncoded = encodeURIComponent(withEndToken);
    return uriEncoded;
}

#!npx zx
import { readFile, writeFile } from "fs/promises";
import * as OTPAuth from "otpauth";

/**
 * codes.txt format
 * Each line should contain a TOTP URI
 * ie: otpauth://totp/Example:alice@google.com?secret=JBSWY3DPEHPK3PXP&issuer=Example
 * https://github.com/google/google-authenticator/wiki/Key-Uri-Format
 */
const uris = (await readFile("codes.txt")).toString().split("\n");

const items = uris.map((uri) => {
  const totp = OTPAuth.URI.parse(uri);

  return {
    type: 1,
    name: totp.issuer || totp.label,
    login: {
      username: totp.issuer ? totp.label : "",
      totp: uri,
    },
  };
});

/**
 * Bitwarden JSON format:
 * https://bitwarden.com/help/condition-bitwarden-import/#condition-a-json
 */

const jsonPayload = {
  // encrypted: false,
  folders: [],
  items,
};
const filePath = "bitwarden.json";

await writeFile(filePath, JSON.stringify(jsonPayload, null, 2));

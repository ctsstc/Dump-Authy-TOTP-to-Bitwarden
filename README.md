# TOTP QR Codes - Time Based One Time Password

The original goal of this repository is to dump Authy credentials for one time passwords.

Then import them into some other platform such as KeePass by utilizing the Bitwarden format.

## Scripts

All scripts are executable and can be ran directly from the shell.

Each one requires `codes.txt`, look under "Formats" below to see how the file should look.

ie:

- `./convert.mjs`
- `./display.mjs`
- `./display.sh` 🔥 Deprecated -- See Warnings!

### Convert.mjs

This is the primary and most efficient script.

This takes codes from `codes.txt` and converts it into the `bitwarden.json` format.

### Display.mjs

This will display a QR code one at a time from the `codes.txt` file. You can step through them one-by-one.

### Display.sh [DEPRECATED]

This is an older method of displaying QR codes to scan into a new app.

**NOTE**: 🔥 This pushes the codes to a 3rd party which likely will log whatever you send to it, so it's not recommended.

## Formats

Here are some of the formats being utilized for this repository.

The only real one you'll need to provide is the `codes.txt`

### codes.txt Format

Each line should contain a TOTP URI.

ie: `otpauth://totp/Example:alice@google.com?secret=JBSWY3DPEHPK3PXP&issuer=Example`

<https://github.com/google/google-authenticator/wiki/Key-Uri-Format>

### Bitwarden JSON format:

This file will be generated from `codes.txt` when using the convert script.

This is mainly a reference for what can be stored in the `bitwarden.json` payload.

<https://bitwarden.com/help/condition-bitwarden-import/#condition-a-json>

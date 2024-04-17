#!npx zx
import { readFile } from "fs/promises";
import { $, question } from "zx";

// read the codes.txt file
const codes = (await readFile("codes.txt")).toString().split("\n");

/**
 * for each code in the file, run `qrcode` from the shell
 * then wait for the user to press enter to continue to the next qrcode
 */
for (const code of codes) {
  console.log(`\n>> ${code}`);
  await $`npx qrcode --small ${code}`;
  await question("Press Enter to continue");
}

#!/usr/bin/env node

const { program } = require("commander");
const packageJson = require("./package.json");

/**
 * Function to color text blue using ANSI escape codes.
 * @param {string} text - The text to be colored.
 * @returns {string} - The colored text.
 */
function colorBlue(text) {
  return `\x1b[36m${text}\x1b[0m`;
}

program
  .name("npm-workflow-test")
  .version(packageJson.version, "-v, --version")
  .description("Outputs the current package version.")
  .action(() => {
    console.log(`\nCurrent package version: ${colorBlue(packageJson.version)}`);
  });

program.parse(process.argv);

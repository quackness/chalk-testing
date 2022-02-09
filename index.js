const chalk = require("chalk");

const message = `Hello ${chalk.bold("World")}`;
console.log(message);

const test = `${chalk.yellow.bold("Emoji 🐐")}`;
console.log(test);

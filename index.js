import config from './config.json' assert {type: 'json'}
import thanos from './thanos.js';
import fork from './fork.js';
import fs from 'fs';
import chalk from 'chalk';

console.log(chalk.blue("Welcome to Bad.js"));

// ask which function to run

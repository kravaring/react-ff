#!/usr/bin/env node
import chalk from 'chalk';
import path from 'path';
import program from 'commander';

program
    .version('0.0.1')
    .description('A CLI tool for creating feature folders for React')
    .command('create <Component> [destination]')
    .option('-j, --javascript', 'Use javascript')
    .option('-t, --tests', 'Add tests file')
    .action((component, destination, args) => {
        console.log(chalk.red('react-ff'));
        console.log(component);
        console.log(destination);
        console.log(args);
    });

program.parse(process.argv);

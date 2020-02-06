#!/usr/bin/env node
import chalk from 'chalk';
import path from 'path';
import commander from 'commander';

const program = new commander.Command();

program
    .option('-j, --javascript', 'use javascript')
    .option('-t, --test', 'add test file')
    .version('0.0.1')
    .description('A CLI tool for creating feature folders in React')
    .command('create <Component> [destination]')
    .action((component, destination, options) => {
        let fullPath = '';
        if (destination) {
            fullPath = path.join(__dirname, destination, component);
        } else {
            fullPath = path.join(__dirname, component);
        }
        console.log(fullPath);
        console.log(options.javascript);
        console.log(options.test);
    });

program.on('--help', function() {
    console.log('');
    console.log('Examples:');
    console.log('  $ react-ff create -t Users ./routes/Main ');
});

program.parse(process.argv);

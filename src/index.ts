#!/usr/bin/env node
import chalk from 'chalk';
import commander, { Command } from 'commander';
import { getFullPath } from './fileInteractions';

const program = new commander.Command();

program
    .option('-J, --javascript', 'use javascript')
    .option('-t, --test [name]', 'add test file', 'test')
    .option('-s, --style [option]', 'add style file', 'css')
    .version('0.0.1')
    .description('A CLI tool for creating feature folders in React')
    .command('create <Component> [destination]')
    .action((component: string, destination: string, commandDetails: Command) => {
        const fullPath = getFullPath(component, __dirname, destination);
        console.log(fullPath);
        console.log(commandDetails.parent.javascript);
        console.log(commandDetails.parent.test);
        console.log(commandDetails.parent.style);
    });

program.on('--help', function() {
    console.log('');
    console.log('Examples:');
    console.log('  $ react-ff create -t Users ./routes/Main ');
});

program.parse(process.argv);

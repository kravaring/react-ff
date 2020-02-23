#!/usr/bin/env node
import chalk from 'chalk';
import fs, { promises as fsAsync } from 'fs';
import commander, { Command } from 'commander';
import { getFullPath, getFileNames } from './fileInteraction';
import { getGenerator } from './contentGenerating';
import { FilesOptions, Modes } from './models';

const program = new commander.Command();

program
    .option('-J, --javascript', 'use javascript (typescript is default)')
    .option('-C, --class', 'generate components as class components (function components are default)')
    .option('-t, --test [name]', 'add test file', 'test')
    .option('-s, --style [option]', 'add style file', 'css')
    .version('0.0.1')
    .description('A CLI tool for creating feature folders in React')
    .command('create <Component> [destination]')
    .action((component: string, destination: string, commandDetails: Command) => {
        const fullPath = getFullPath(component, __dirname, destination);
        const options = new FilesOptions(commandDetails.parent.javascript, commandDetails.parent.test, commandDetails.parent.style);
        const files = getFileNames(fullPath, component, options);
        const mode: Modes = commandDetails.parent.class ? 'class' : 'function';
        const generator = getGenerator({
            lang: options.lang,
            mode,
            componentName: component,
        });
        if (!fs.existsSync(fullPath)) {
            fs.mkdirSync(fullPath);
        }
        files.forEach(async fi => {
            try {
                const content = generator(fi.type);
                await fsAsync.writeFile(fi.path, content || '');
                console.log(`added ${fi.path}`);
            } catch (err) {
                console.log(err);
            }
        });
    });

program.on('--help', function() {
    console.log('');
    console.log('Examples:');
    console.log('  $ react-ff create -t Users ./routes/Main ');
});

program.parse(process.argv);

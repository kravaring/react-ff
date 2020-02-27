#!/usr/bin/env node
import { promises as fsAsync } from 'fs';
import commander, { Command } from 'commander';
import { getFullPath, getFileNames } from './fileInteraction';
import { getGenerator } from './contentGenerating';
import { includeTest, includeStyle, T, TEST, S, STYLE} from './options';
import { FilesOptions, Modes } from './models';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const appPackage = require('../package.json');

const program = new commander.Command();

async function doesFolderExists(folderPath: string): Promise<boolean> {
    const result = await fsAsync.stat(folderPath).catch(err => {
        if (err.code === 'ENOENT') {
            return false;
        }
        throw err;
    });
    if (typeof result === 'boolean') {
        return result;
    }
    return result.isDirectory();
}

program
    .option('-J, --javascript', 'use javascript (typescript is default)')
    .option('-C, --class', 'generate components as class components (function components are default)')
    .option(`${T}, ${TEST} [name]`, 'add test file', 'test')
    .option(`${S}, ${STYLE} [option]`, 'add style file', 'css')
    .version(appPackage.version)
    .description('A CLI tool for creating feature folders in React')
    .command('create <Component> [destination]')
    .action(async (component: string, destination: string, commandDetails: Command) => {
        console.log(commandDetails);
        const fullPath = getFullPath(component, process.cwd(), destination);
        const { rawArgs, test, style } = commandDetails.parent;
        const options = new FilesOptions(commandDetails.parent.javascript, includeTest(rawArgs) && test, includeStyle(rawArgs) && style);
        console.log(options);
        const files = getFileNames(fullPath, component, options);
        console.log(files);
        const mode: Modes = commandDetails.parent.class ? 'class' : 'function';
        const generator = getGenerator({
            lang: options.lang,
            mode,
            componentName: component,
        });
        const exists = await doesFolderExists(fullPath);
        if (!exists) {
            await fsAsync.mkdir(fullPath, { recursive: true });
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

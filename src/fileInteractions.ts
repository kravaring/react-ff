import path from 'path';
import { FilesOptions } from './models/options';

export const getFullPath = (component: string, dirname: string, destination?: string): string => {
    if (!destination) {
        return path.join(dirname, component);
    }
    if (destination.startsWith('.')) {
        return path.join(dirname, destination, component);
    }
    return path.join(destination, component);
};

export const getFileNames = (fullPath: string, component: string, options: FilesOptions): Array<string> => {
    const baseExtension = options.useJS ? 'js' : 'ts';
    const indexFile = path.join(fullPath, `index.${baseExtension}`);
    const componentFile = path.join(fullPath, `${component}.${baseExtension}x`);
    const result: Array<string> = [indexFile, componentFile];
    if (options.style) {
        const styleFile = path.join(fullPath, `style.${options.style}`);
        result.push(styleFile);
    }
    if (options.test) {
        const testFile = path.join(fullPath, `${component}.${options.test}.${baseExtension}x`);
        result.push(testFile);
    }
    return result;
}

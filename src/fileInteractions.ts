import path from 'path';
import { FilesOptions, FileInstance } from './models';

export const getFullPath = (component: string, dirname: string, destination?: string): string => {
    if (!destination) {
        return path.join(dirname, component);
    }
    if (!path.isAbsolute(destination)) {
        return path.join(dirname, destination, component);
    }
    return path.join(destination, component);
};

export const getFileNames = (fullPath: string, component: string, options: FilesOptions): Array<FileInstance> => {
    const baseExtension = options.lang;
    const indexFile = path.join(fullPath, `index.${baseExtension}`);
    const componentFile = path.join(fullPath, `${component}.${baseExtension}x`);
    const result: Array<FileInstance> = [
        {
            type: 'index',
            path: indexFile,
        },
        {
            type: 'component',
            path: componentFile,
        },
    ];
    if (options.style) {
        const styleFile = path.join(fullPath, `style.${options.style}`);
        result.push({
            type: 'style',
            path: styleFile,
        });
    }
    if (options.test) {
        const testFile = path.join(fullPath, `${component}.${options.test}.${baseExtension}x`);
        result.push({
            type: 'test',
            path: testFile,
        });
    }
    return result;
};

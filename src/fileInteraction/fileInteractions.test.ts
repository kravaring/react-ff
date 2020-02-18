import { getFullPath, getFileNames } from './fileInteractions';
import { FileInstance } from '../models';

describe('fileInteractions', () => {
    describe('getFullPath', () => {
        const componentName = 'Apis';
        const dirname = '/usr/home/test-project';
        it('should construct full path without provided destination', () => {
            const fullPath = getFullPath(componentName, dirname);
            expect(fullPath).toBe(`${dirname}/${componentName}`);
        });

        it('should construct full path with destination relatively provided', () => {
            const destination = 'lib';
            const fullPath = getFullPath(componentName, dirname, `./${destination}`);
            expect(fullPath).toBe(`${dirname}/${destination}/${componentName}`);
        });

        it('should construct full path with destination absolutely provided', () => {
            const destination = 'usr/home';
            const fullPath = getFullPath(componentName, dirname, `/${destination}`);
            expect(fullPath).toBe(`/${destination}/${componentName}`);
        });
    });

    describe('getFileNames', () => {
        const fullPath = '/usr/home/projects/UsersApp';
        const component = 'User';
        it('should return index ts file and component tsx file by default', () => {
            const files = getFileNames(fullPath, component, {
                lang: 'ts',
            });
            const expected: Array<FileInstance> = [
                {
                    type: 'index',
                    path: `${fullPath}/index.ts`,
                },
                {
                    type: 'component',
                    path: `${fullPath}/${component}.tsx`,
                },
            ];
            expect(files).toEqual(expected);
        });

        it('should return index ts file, component tsx file and style file', () => {
            const files = getFileNames(fullPath, component, {
                lang: 'ts',
                style: 'css',
            });
            const expected: Array<FileInstance> = [
                {
                    type: 'index',
                    path: `${fullPath}/index.ts`,
                },
                {
                    type: 'component',
                    path: `${fullPath}/${component}.tsx`,
                },
                {
                    type: 'style',
                    path: `${fullPath}/style.css`,
                },
            ];
            expect(files).toEqual(expected);
        });

        it('should return index ts file, component tsx file and test file', () => {
            const files = getFileNames(fullPath, component, {
                lang: 'ts',
                test: 'test',
            });
            const expected: Array<FileInstance> = [
                {
                    type: 'index',
                    path: `${fullPath}/index.ts`,
                },
                {
                    type: 'component',
                    path: `${fullPath}/${component}.tsx`,
                },
                {
                    type: 'test',
                    path: `${fullPath}/${component}.test.tsx`,
                },
            ];
            expect(files).toEqual(expected);
        });

        it('should return index ts file, component tsx file, stylew file and test file', () => {
            const files = getFileNames(fullPath, component, {
                lang: 'ts',
                style: 'less',
                test: 'test',
            });
            const expected: Array<FileInstance> = [
                {
                    type: 'index',
                    path: `${fullPath}/index.ts`,
                },
                {
                    type: 'component',
                    path: `${fullPath}/${component}.tsx`,
                },
                {
                    type: 'style',
                    path: `${fullPath}/style.less`,
                },
                {
                    type: 'test',
                    path: `${fullPath}/${component}.test.tsx`,
                },
            ];
            expect(files).toEqual(expected);
        });

        it('should return index ts file, component tsx file, stylew file and test file', () => {
            const files = getFileNames(fullPath, component, {
                lang: 'js',
                style: 'scss',
                test: 'spec',
            });
            const expected: Array<FileInstance> = [
                {
                    type: 'index',
                    path: `${fullPath}/index.js`,
                },
                {
                    type: 'component',
                    path: `${fullPath}/${component}.jsx`,
                },
                {
                    type: 'style',
                    path: `${fullPath}/style.scss`,
                },
                {
                    type: 'test',
                    path: `${fullPath}/${component}.spec.jsx`,
                },
            ];
            expect(files).toEqual(expected);
        });
    });
});

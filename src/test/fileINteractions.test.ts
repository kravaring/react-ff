import { getFullPath, getFileNames } from '../fileInteractions';

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
                useJS: false,
            });
            const expected = [`${fullPath}/index.ts`, `${fullPath}/${component}.tsx`];
            expect(files).toEqual(expected);
        });

        it('should return index ts file, component tsx file and style file', () => {
            const files = getFileNames(fullPath, component, {
                useJS: false,
                style: 'css',
            });
            const expected = [`${fullPath}/index.ts`, `${fullPath}/${component}.tsx`, `${fullPath}/style.css`];
            expect(files).toEqual(expected);
        });

        it('should return index ts file, component tsx file and test file', () => {
            const files = getFileNames(fullPath, component, {
                useJS: false,
                test: 'test',
            });
            const expected = [`${fullPath}/index.ts`, `${fullPath}/${component}.tsx`, `${fullPath}/${component}.test.tsx`];
            expect(files).toEqual(expected);
        });

        it('should return index ts file, component tsx file, stylew file and test file', () => {
            const files = getFileNames(fullPath, component, {
                useJS: false,
                style: 'less',
                test: 'test',
            });
            const expected = [`${fullPath}/index.ts`, `${fullPath}/${component}.tsx`, `${fullPath}/style.less`, `${fullPath}/${component}.test.tsx`];
            expect(files).toEqual(expected);
        });
    });
});

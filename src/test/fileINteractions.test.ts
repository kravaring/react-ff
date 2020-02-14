import { getFullPath } from '../fileInteractions';

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
});

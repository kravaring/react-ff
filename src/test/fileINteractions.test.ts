import { getFullPath } from '../fileInteractions';

describe('fileInteractions', () => {
    describe('getFullPath', () => {
        const componentName = 'Apis';
        const dirname = '/usr/home/test-project';
        it('should construct full path without provided destination', () => {
            const fullPath = getFullPath(componentName, dirname);
            expect(fullPath).toBe(`${dirname}/${componentName}`);
        });
    });
});

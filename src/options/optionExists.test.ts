import { includeTest, includeStyle } from './optionExists';

describe('options', () => {
    describe('includeTest', () => {
        it('should return true if -t included', () => {
            const rawArgs = ['/usr/local/bin/node', '/usr/local/bin/react-ff', 'create', 'Apis', './routes/Main', '-t'];
            const result = includeTest(rawArgs);
            expect(result).toBe(true);
        });
        it('should return true if --test included', () => {
            const rawArgs = ['/usr/local/bin/node', '/usr/local/bin/react-ff', 'create', 'Apis', './routes/Main', '--test'];
            const result = includeTest(rawArgs);
            expect(result).toBe(true);
        });
        it('should return false if nor -t neither --test are included', () => {
            const rawArgs = ['/usr/local/bin/node', '/usr/local/bin/react-ff', 'create', 'Apis', './routes/Main', '-J'];
            const result = includeTest(rawArgs);
            expect(result).toBe(false);
        });
    });

    describe('includeStyle', () => {
        it('should return true if -s included', () => {
            const rawArgs = ['/usr/local/bin/node', '/usr/local/bin/react-ff', 'create', 'Apis', './routes/Main', '-s'];
            const result = includeStyle(rawArgs);
            expect(result).toBe(true);
        });
        it('should return true if --style included', () => {
            const rawArgs = ['/usr/local/bin/node', '/usr/local/bin/react-ff', 'create', 'Apis', './routes/Main', '--style'];
            const result = includeStyle(rawArgs);
            expect(result).toBe(true);
        });
        it('should return false if nor -s neither --style are included', () => {
            const rawArgs = ['/usr/local/bin/node', '/usr/local/bin/react-ff', 'create', 'Apis', './routes/Main', '-J'];
            const result = includeStyle(rawArgs);
            expect(result).toBe(false);
        });
    });
});

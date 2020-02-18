import { getGenerator } from './controller';
import { tsGenerator } from './tsGenerators';
import 'jest-mock';

describe('getGenerator', () => {
    describe('ts mode', () => {
        tsGenerator.component = jest.fn();
        it('should call component generating function', () => {
            const generator = getGenerator('ts', 'class', 'Users');
            generator('component');
            expect((tsGenerator.component as jest.Mock).mock.calls.length).toBe(1);
        });
    });
});

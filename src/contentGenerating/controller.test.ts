import { getGenerator } from './controller';
import { tsGenerator } from './tsGenerators';
import { jsGenerator } from './jsGenerators';

import 'jest-mock';

describe('getGenerator', () => {
    describe('ts mode', () => {
        const mock = 'component mock';
        tsGenerator.component = jest.fn(() => mock);
        it('should call component generating function', () => {
            const generator = getGenerator({ lang: 'ts', mode: 'class', componentName: 'Users' });
            const content = generator('component');
            expect((tsGenerator.component as jest.Mock).mock.calls.length).toBe(1);
            expect(content).toBe(mock);
        });
    });

    describe('js mode', () => {
        const mock = 'component mock';
        jsGenerator.index = jest.fn(() => mock);
        it('should call index generating function', () => {
            const generator = getGenerator({ lang: 'js', mode: 'class', componentName: 'Users' });
            const content = generator('index');
            expect((jsGenerator.index as jest.Mock).mock.calls.length).toBe(1);
            expect(content).toBe(mock);
        });
    });
});

import { generateIndex, generateTestTs } from './tsGenerators';

describe('TS generator', () => {
    it('generateIndex should return index file', () => {
        const content = generateIndex('Users');
        const expected = "export { Users } from './Users';\n";
        expect(content).toBe(expected);
    });

    it('generateTestTs should return tests file', () => {
        const content = generateTestTs('Resolve');
        const expected = "import { Resolve } from './Resolve';\n\ndescribe('Resolve', () => {\n\n});\n";
        expect(content).toBe(expected);
    });
});

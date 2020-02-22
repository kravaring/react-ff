import { generateIndex, generateTestTs, generateComponentTs } from './tsGenerators';

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

    it('should generate class component', () => {
        const content = generateComponentTs('Search', 'class');
        const expected = `import React, { Component } from 'react';

interface SearchState {
};

interface SearchProps {
};

export class Search extends Component<SearchProps, SearchState> {
    state = {
    };

    render(){
        return (
            <div></div>
        );
    }
};
`;
        expect(content).toBe(expected);
    });

    it('should generate function component', () => {
        const content = generateComponentTs('Search', 'function');
        const expected = `import React, { FunctionComponent } from 'react';

interface SearchProps {
};

export const Search: FunctionComponent<SearchProps> = ({}) => {
    return (
        <div></div>
    );
};
`;
        expect(content).toBe(expected);
    });
});

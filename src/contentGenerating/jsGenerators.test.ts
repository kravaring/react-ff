import { generateTestJs, generateComponentJs } from './jsGenerators';

describe('JS generator', () => {
    it('generateTestTs should return tests file', () => {
        const content = generateTestJs('Resolve');
        const expected = `import { Resolve } from './Resolve';

describe('Resolve', () => {

});
`;
        expect(content).toBe(expected);
    });

    it('should generate class component', () => {
        const content = generateComponentJs('Search', 'class');
        const expected = `import React, { Component } from 'react';

export class Search extends Component {
    state = {
    };

    render() {
        return (
            <div></div>
        );
    }
};
`;
        expect(content).toBe(expected);
    });

    it('should generate function component', () => {
        const content = generateComponentJs('Search', 'function');
        const expected = `import React from 'react';

export const Search = ({}) => {
    return (
        <div></div>
    );
};
`;
        expect(content).toBe(expected);
    });
});

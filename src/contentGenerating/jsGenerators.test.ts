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
        message: 'Hello',
    };

    render() {
        const { showMessage } = this.props;
        const { message } = this.state;
        return (
            <div>{showMessage && message}</div>
        );
    }
};
`;
        expect(content).toBe(expected);
    });

    it('should generate function component', () => {
        const content = generateComponentJs('Search', 'function');
        const expected = `import React from 'react';

export const Search = ({message = 'Hello'}) => {
    return (
        <div>{message}</div>
    );
};
`;
        expect(content).toBe(expected);
    });

    it('should generate function component with style', () => {
        const content = generateComponentJs('Search', 'function', 'style.less');
        const expected = `import React from 'react';
import 'style.less';

export const Search = ({message = 'Hello'}) => {
    return (
        <div>{message}</div>
    );
};
`;
        expect(content).toBe(expected);
    });
});

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
    message: string;
};

interface SearchProps {
    showMessage: boolean;
};

export class Search extends Component<SearchProps, SearchState> {
    state = {
        message: 'Hello',
    };

    render(): JSX.Element {
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
        const content = generateComponentTs('Search', 'function');
        const expected = `import React, { FunctionComponent } from 'react';

interface SearchProps {
    message?: string;
};

export const Search: FunctionComponent<SearchProps> = ({ message = 'Hello' }): JSX.Element => {
    return (
        <div>{message}</div>
    );
};
`;
        expect(content).toBe(expected);
    });

    it('should generate function component with style', () => {
        const content = generateComponentTs('Search', 'function', 'style.css');
        const expected = `import React, { FunctionComponent } from 'react';
import './style.css';

interface SearchProps {
    message?: string;
};

export const Search: FunctionComponent<SearchProps> = ({ message = 'Hello' }): JSX.Element => {
    return (
        <div>{message}</div>
    );
};
`;
        expect(content).toBe(expected);
    });
});

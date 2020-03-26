import { ContentGenerator, Modes } from '../models';
import { generateIndex, getNull, generateTestTs } from './tsGenerators';

// eslint-disable-next-line prettier/prettier
export const getImports = (mode: Modes, styleFile?: string): string => `import React${mode === 'class' ? ', { Component }' : ''} from 'react';
${!!styleFile ? "import './" + styleFile + "';\n" : ''}`;

export const getClass = (componentName: string, styleFile?: string): string => `${getImports('class', styleFile)}
export class ${componentName} extends Component {
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

export const getFunc = (componentName: string, styleFile?: string): string => `${getImports('function', styleFile)}
export const ${componentName} = ({ message = 'Hello' }) => {
    return (
        <div>{message}</div>
    );
};
`;

export const generateComponentJs = (componentName: string, mode: Modes, styleFile?: string): string =>
    mode === 'class' ? getClass(componentName, styleFile) : getFunc(componentName, styleFile);

export const generateTestJs = generateTestTs;

export const jsGenerator: ContentGenerator = {
    index: generateIndex,
    component: generateComponentJs,
    style: getNull,
    test: generateTestJs,
};

import { ContentGenerator, Modes } from '../models';

export const generateIndex = (componentName: string): string => `export { ${componentName} } from './${componentName}';\n`;

// eslint-disable-next-line prettier/prettier
export const getImports = (mode: Modes, styleFile?: string): string => `import React, { ${mode === 'class' ? 'Component' : 'FunctionComponent'} } from 'react';
${!!styleFile ? "import './" + styleFile + "';\n" : ''}`;

export const getClass = (componentName: string, styleFile?: string): string => `${getImports('class', styleFile)}
interface ${componentName}State {
    message: string;
};

interface ${componentName}Props {
    showMessage: boolean;
};

export class ${componentName} extends Component<${componentName}Props, ${componentName}State> {
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

export const getFunc = (componentName: string, styleFile?: string): string => `${getImports('function', styleFile)}
interface ${componentName}Props {
    message?: string;
};

export const ${componentName}: FunctionComponent<${componentName}Props> = ({ message = 'Hello' }): JSX.Element => {
    return (
        <div>{message}</div>
    );
}
`;

export const generateComponentTs = (componentName: string, mode: Modes, styleFile?: string): string =>
    mode === 'class' ? getClass(componentName, styleFile) : getFunc(componentName, styleFile);

export const generateTestTs = (componentName: string): string =>
    `import { ${componentName} } from './${componentName}';\n\ndescribe('${componentName}', () => {\n\n});\n`;

export const getNull = (): null => null;

export const tsGenerator: ContentGenerator = {
    index: generateIndex,
    component: generateComponentTs,
    style: getNull,
    test: generateTestTs,
};

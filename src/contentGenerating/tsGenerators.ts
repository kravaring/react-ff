import { ContentGenerator, Modes } from '../models';

export const generateIndex = (componentName: string): string => `export { ${componentName} } from './${componentName}';\n`;

export const getClass = (componentName: string): string => `import React, { Component } from 'react';

interface ${componentName}State {
};

interface ${componentName}Props {
};

export class ${componentName} extends Component<${componentName}Props, ${componentName}State> {
    state = {
    };

    render(): JSX.Element {
        return (
            <div></div>
        );
    }
};
`;

export const getFunc = (componentName: string): string => `import React, { FunctionComponent } from 'react';

interface ${componentName}Props {
};

export const ${componentName}: FunctionComponent<${componentName}Props> = ({}): JSX.Element => {
    return (
        <div></div>
    );
};
`;

export const generateComponentTs = (componentName: string, mode: Modes): string =>
    mode === 'class' ? getClass(componentName) : getFunc(componentName);

export const generateTestTs = (componentName: string): string =>
    `import { ${componentName} } from './${componentName}';\n\ndescribe('${componentName}', () => {\n\n});\n`;

export const getNull = (): null => null;

export const tsGenerator: ContentGenerator = {
    index: generateIndex,
    component: generateComponentTs,
    style: getNull,
    test: generateTestTs,
};

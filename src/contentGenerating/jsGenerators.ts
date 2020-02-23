import { ContentGenerator, Modes } from '../models';
import { generateIndex, getNull, generateTestTs } from './tsGenerators';

export const getClass = (componentName: string): string => `import React, { Component } from 'react';

export class ${componentName} extends Component {
    state = {
    };

    render() {
        return (
            <div></div>
        );
    }
};
`;

export const getFunc = (componentName: string): string => `import React from 'react';

export const ${componentName} = ({}) => {
    return (
        <div></div>
    );
};
`;

export const generateComponentJs = (componentName: string, mode: Modes): string =>
    mode === 'class' ? getClass(componentName) : getFunc(componentName);

export const generateTestJs = generateTestTs;

export const jsGenerator: ContentGenerator = {
    index: generateIndex,
    component: generateComponentJs,
    style: getNull,
    test: generateTestJs,
};

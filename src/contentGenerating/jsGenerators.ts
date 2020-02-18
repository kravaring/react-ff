import { ContentGenerator, Modes } from '../models';
import { generateIndex, getNull } from './tsGenerators';

export const generateComponentJs = (componentName: string, mode: Modes): string => '';

export const generateTestJs = (componentName: string): string => '';

export const jsGenerator: ContentGenerator = {
    index: generateIndex,
    component: generateComponentJs,
    style: getNull,
    test: generateTestJs,
};

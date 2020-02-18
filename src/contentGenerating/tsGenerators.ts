import { ContentGenerator, Modes } from '../models';

export const generateIndex = (componentName: string): string => '';

export const generateComponentTs = (componentName: string, mode: Modes): string => '';

export const generateTestTs = (componentName: string): string => '';

export const getNull = (): null => null;

export const tsGenerator: ContentGenerator = {
    index: generateIndex,
    component: generateComponentTs,
    style: getNull,
    test: generateTestTs,
};

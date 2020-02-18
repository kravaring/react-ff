import { Lang, FileInstance, ActionFunc, ContentGenerator, Modes } from '../models';
import { generateIndex, generateComponentTs, generateTestTs } from './tsGenerators';
import { generateComponentJs, generateTestJs } from './jsGenerators';

export const getNull = (): null => null;

const jsGenerator: ContentGenerator = {
    index: generateIndex,
    component: generateComponentJs,
    style: getNull,
    test: generateTestJs,
};

const tsGenerator: ContentGenerator = {
    index: generateIndex,
    component: generateComponentTs,
    style: getNull,
    test: generateTestTs,
};

export const getGenerator = (lang: Lang, mode: Modes, componentName: string): ActionFunc => {
    if (lang === 'js') {
        return (instance: FileInstance): void => {
            jsGenerator[instance.type](componentName, mode);
        };
    }
    return (instance: FileInstance): void => {
        tsGenerator[instance.type](componentName, mode);
    };
};

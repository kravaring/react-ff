import { Lang, GeneratorCallerFunc, Modes, FileTypes } from '../models';
import { tsGenerator } from './tsGenerators';
import { jsGenerator } from './jsGenerators';

export const getGenerator = (lang: Lang, mode: Modes, componentName: string): GeneratorCallerFunc => {
    if (lang === 'js') {
        return (type: FileTypes): void => {
            jsGenerator[type](componentName, mode);
        };
    }
    return (type: FileTypes): void => {
        tsGenerator[type](componentName, mode);
    };
};

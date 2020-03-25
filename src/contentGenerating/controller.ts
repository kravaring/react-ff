import { Lang, GeneratorCallerFunc, Modes, FileTypes } from '../models';
import { tsGenerator } from './tsGenerators';
import { jsGenerator } from './jsGenerators';

interface GeneratorOptions {
    lang: Lang;
    mode: Modes;
    componentName: string;
    styleFile?: string;
}

export const getGenerator = ({ lang, mode, componentName, styleFile }: GeneratorOptions): GeneratorCallerFunc => {
    const generator = lang === 'js' ? jsGenerator : tsGenerator;
    return (type: FileTypes): string | null => generator[type](componentName, mode, styleFile);
};

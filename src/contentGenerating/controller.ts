import { Lang, GeneratorCallerFunc, Modes, FileTypes } from '../models';
import { tsGenerator } from './tsGenerators';
import { jsGenerator } from './jsGenerators';

interface GeneratorOptions {
    lang: Lang;
    mode: Modes;
    componentName: string;
}

export const getGenerator = ({ lang, mode, componentName }: GeneratorOptions): GeneratorCallerFunc =>
    lang === 'js'
        ? (type: FileTypes): string | null => jsGenerator[type](componentName, mode)
        : (type: FileTypes): string | null => tsGenerator[type](componentName, mode);

export type Modes = 'function' | 'class';
export type Lang = 'ts' | 'js';

export interface FilesOptions {
    lang: Lang;
    test?: string;
    style?: string;
}

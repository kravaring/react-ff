export type Modes = 'function' | 'class';
export type Lang = 'ts' | 'js';

export class FilesOptions {
    lang: Lang;
    test?: string;
    style?: string;
    constructor(useJs: boolean, test?: string, style?: string) {
        this.lang = useJs ? 'js' : 'ts';
        if (test) {
            this.test = test;
        }
        if (style) {
            this.style = style;
        }
    }
}

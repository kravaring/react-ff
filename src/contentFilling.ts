import { Lang, FileInstance, ActionFunc, Filler } from './models';

export function fillIndex(path: string): void {
    console.log(path);
}

export function fillComponentTs(path: string): void {
    console.log(path);
}

export function fillComponentJs(path: string): void {
    console.log(path);
}

export function fillTestTs(path: string): void {
    console.log(path);
}

export function fillTestJs(path: string): void {
    console.log(path);
}

const jsFiller: Filler = {
    index: fillIndex,
    component: fillComponentJs,
    style: () => void 0,
    test: fillTestJs,
};

const tsFiller: Filler = {
    index: fillIndex,
    component: fillComponentTs,
    style: () => void 0,
    test: fillTestTs,
};

export const fill = (lang: Lang): ActionFunc => {
    if (lang === 'js') {
        return (instance: FileInstance): void => {
            jsFiller[instance.type](instance.path);
        };
    }
    return (instance: FileInstance): void => {
        tsFiller[instance.type](instance.path);
    };
};

export const T = 't';
export const TEST = 'test';
export const S = 's';
export const STYLE = 'style';
export const OPTIONS = {
    T: `-${T}`,
    TEST: `--${TEST}`,
    S: `-${S}`,
    STYLE: `--${STYLE}`,
};

export const includeTest = (rawArgs: Array<string>): boolean => rawArgs.includes(OPTIONS.T) || rawArgs.includes(OPTIONS.TEST);
export const includeStyle = (rawArgs: Array<string>): boolean => rawArgs.includes(OPTIONS.S) || rawArgs.includes(OPTIONS.STYLE);

export const T = '-t';
export const TEST = '--test';
export const S = '-s';
export const STYLE = '--style';

export const includeTest = (rawArgs: Array<string>): boolean => rawArgs.includes(T) || rawArgs.includes(TEST);
export const includeStyle = (rawArgs: Array<string>): boolean => rawArgs.includes(S) || rawArgs.includes(STYLE);

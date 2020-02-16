import { FileTypes, FileInstance } from './instance';

export type FillingFunc = (path: string) => void;
export type ActionFunc = (instance: FileInstance) => void;
export type Filler = Record<FileTypes, FillingFunc>;

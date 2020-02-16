export type FileTypes = 'index' | 'test' | 'component' | 'style';

export interface FileInstance {
    type: FileTypes;
    path: string;
}

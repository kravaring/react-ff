import { FileTypes } from './instance';
import { Modes } from './options';

export type ComponentContentFunc = (componentName: string, mode: Modes) => string;
export type ContentFunc = (componentName: string) => string;
export type StyleContentFunc = () => null;
export type GeneratorCallerFunc = (type: FileTypes) => string | null;
export type ContentGenerator = Record<FileTypes, ContentFunc | ComponentContentFunc | StyleContentFunc>;

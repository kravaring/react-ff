import path from 'path';

export const getFullPath = (component: string, dirname: string, destination?: string): string => {
    if (destination) {
        return path.join(dirname, destination, component);
    }
    return path.join(dirname, component);
};

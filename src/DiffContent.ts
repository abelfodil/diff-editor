export interface DiffContent {
    original: string;
    modified: string;
}

export const loadDiffContent = (id: string): DiffContent | undefined => {
    return { original: '', modified: '' };
};

export const saveDiffContent = (id: string): boolean => {
    return true;
};

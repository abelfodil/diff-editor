import * as aws from 'aws-sdk';

export interface DiffContent {
    original: string;
    modified: string;
}

aws.config.update({ region: 'us-east-2' });
const s3 = new aws.S3();
const BUCKET = 'diff-editor';

export const loadDiffContentFromBucket = (id: string): DiffContent | undefined => {
    return { original: '', modified: '' };
};

export const saveDiffContentToBucket = async (id: string): Promise<boolean> => {
    const diffContent = loadDiffContentFromLocalStorage();

    const fileRequest1 = s3
        .upload({
            Bucket: BUCKET,
            Key: `${id}-original`,
            Body: diffContent.original,
        })
        .promise();

    const fileRequest2 = s3
        .upload({
            Bucket: BUCKET,
            Key: `${id}-modified`,
            Body: diffContent.modified,
        })
        .promise();

    try {
        await Promise.all([fileRequest1, fileRequest2]);
        return true;
    } catch {
        return false;
    }
};

export const loadDiffContentFromLocalStorage = (): DiffContent => {
    return { original: localStorage.getItem('original') || '', modified: localStorage.getItem('modified') || '' };
};

export const saveDiffContentToLocalStorage = (diffContent: DiffContent) => {
    localStorage.setItem('original', diffContent.original);
    localStorage.setItem('modified', diffContent.modified);
};

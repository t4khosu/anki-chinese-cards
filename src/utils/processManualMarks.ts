export default function processManualMarks(sentence: string, hide: boolean): string {
    return sentence.replace(/\{\{([^}]+)\}\}/g, (_, chars) => {
        return hide ? '__ '.repeat(chars.length) : chars;
    });
}

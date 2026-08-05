export default function processManualMarks(sentence: string, mode: "hide" | "show" | "highlight"): string {
    return sentence.replace(/\{\{([^}]+)\}\}/g, (_, chars) => {
        if (mode === "hide") return '__ '.repeat(chars.length);
        if (mode === "highlight") return `<span class="font-bold">${chars}</span>`;
        return chars;
    });
}

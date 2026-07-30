import "../style/vocabulary-card-styles.scss";
import templateHtml from "../templates/writing-front.html";
import ChineseVocabularyWritingCard from "../cards/chineseVocabularyCards/ChineseVocabularyWritingCard";
import ChineseVocabularyCardFields from "../cards/chineseVocabularyCards/ChineseVocabularyCardFields";

const previewFields: ChineseVocabularyCardFields = {
    hanzi: "图书馆",
    translations: `{"名词": ["library"], "verb": ["to borrow books"], "mw": ["个", "家"], "hint": ["think of a quiet place"]}`,
    exampleSentence1: "我每天下午都去图书馆看书。",
    exampleSentence2: "这家图书馆藏书很丰富。",
    exampleListeningRef1: "",
    exampleListeningRef2: "",
    additionalInformation: "图书馆 refers to a public or private library.",
    countwords: ""
};

const previewValues: Record<string, string> = {
    "图片": "",
};

function fillPlaceholders(html: string, values: Record<string, string>): string {
    return html.replace(/\{\{([^}]+)\}\}/g, (_, key) => {
        const trimmed = key.trim();
        return values[trimmed] ?? "";
    });
}

document.body.innerHTML = fillPlaceholders(templateHtml, previewValues);

const card = new ChineseVocabularyWritingCard(previewFields);
card.renderFront();
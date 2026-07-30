import "../style/vocabulary-card-styles.scss";
import frontTemplate from "../templates/writing-front.html";
import backTemplate from "../templates/writing-back.html";
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
    countwords: "个"
};

const previewValues: Record<string, string> = {
    "汉字": "图书馆",
    "量词": "个",
    "拼音": "tú shū guǎn",
    "额外消息": "常用问候语",
    "图片": "",
};

function fillPlaceholders(html: string, values: Record<string, string>): string {
    return html.replace(/\{\{([^}]+)\}\}/g, (_, key) => {
        const trimmed = key.trim();
        return values[trimmed] ?? "";
    });
}

let currentSide: "front" | "back" = "front";

function render(side: "front" | "back") {
    currentSide = side;
    const template = side === "front" ? frontTemplate : backTemplate;
    document.body.innerHTML = fillPlaceholders(template, previewValues);

    const card = new ChineseVocabularyWritingCard(previewFields);
    if (side === "front") {
        card.renderFront();
    } else {
        card.renderBack();
    }

    addToggleButton();
}

function addToggleButton() {
    const btn = document.createElement("button");
    btn.textContent = currentSide === "front" ? "Show Back" : "Show Front";
    btn.style.cssText = "display:block;margin:1rem auto;padding:0.5rem 1.5rem;font-size:1rem;cursor:pointer;border-radius:0.5rem;border:1px solid #999;";
    btn.onclick = () => render(currentSide === "front" ? "back" : "front");
    document.body.prepend(btn);
}

render("front");

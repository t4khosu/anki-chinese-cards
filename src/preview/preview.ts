import "../style/vocabulary-card-styles.scss";
import frontTemplate from "../templates/writing-front.html";
import backTemplate from "../templates/writing-back.html";
import ChineseVocabularyWritingCard from "../node-types/vocabulary/cards/ChineseVocabularyWritingCard";
import ChineseVocabularyCardFields from "../node-types/vocabulary/cards/ChineseVocabularyCardFields";

const previewFields: ChineseVocabularyCardFields = {
    hanzi: "图书馆",
    translations: "N: library",
    exampleSentence1: "我每天下午都去图书馆看书。",
    exampleSentence2: "这家图书馆藏书很丰富。",
    exampleListeningRef1: "",
    exampleListeningRef2: "",
    additionalInformation: "图书馆 refers to a public or private library.",
    countwords: "个，家"
};

const previewValues: Record<string, string> = {
    "汉字": "图书馆",
    "量词": "个",
    "拼音": "t2shu1guan3",
    "额外消息": "常用问候语",
};

function fillPlaceholders(html: string, values: Record<string, string>): string {
    return html.replace(/\{\{([^}]+)\}\}/g, (_, key) => {
        const trimmed = key.trim();
        return values[trimmed] ?? "";
    });
}

let currentSide: "front" | "back" = "front";
let darkMode = false;

function toggleDarkMode() {
    darkMode = !darkMode;
    document.documentElement.classList.toggle("nightMode", darkMode);
    document.body.style.background = darkMode ? "black" : "";
    render(currentSide);
}

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

    const btnContainer = document.createElement("div");
    btnContainer.style.cssText = "display:flex;gap:0.5rem;justify-content:center;margin-bottom:0.5rem;";
    btnContainer.append(createToggleButton(), createDarkModeButton());
    document.body.prepend(btnContainer);
}

function createToggleButton() {
    const btn = document.createElement("button");
    btn.textContent = currentSide === "front" ? "Show Back" : "Show Front";
    btn.style.cssText = "padding:0.25rem 0.75rem;font-size:0.75rem;cursor:pointer;border-radius:0.25rem;border:1px solid #999;";
    btn.onclick = () => render(currentSide === "front" ? "back" : "front");
    return btn;
}

function createDarkModeButton() {
    const btn = document.createElement("button");
    btn.textContent = darkMode ? "Light Mode" : "Dark Mode";
    btn.style.cssText = "padding:0.25rem 0.75rem;font-size:0.75rem;cursor:pointer;border-radius:0.25rem;border:1px solid #999;";
    btn.onclick = toggleDarkMode;
    return btn;
}

render("front");

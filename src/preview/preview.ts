import "../node-types/vocabulary/style/styles.scss";
import "./preview.scss";
import previewTemplate from "./preview.html";
import toFrontTemplate from "../node-types/vocabulary/templates/to-chinese-front.html";
import toBackTemplate from "../node-types/vocabulary/templates/to-chinese-back.html";
import fromFrontTemplate from "../node-types/vocabulary/templates/from-chinese-front.html";
import fromBackTemplate from "../node-types/vocabulary/templates/from-chinese-back.html";
import ToChineseVocabularyCard from "../node-types/vocabulary/cards/ToChineseVocabularyCard";
import FromChineseVocabularyCard from "../node-types/vocabulary/cards/FromChineseVocabularyCard";
import VocabularyCard from "../node-types/vocabulary/cards/VocabularyCard";
import Fields from "../node-types/vocabulary/cards/Fields";

type CardType = "to-chinese" | "from-chinese";

const previewFields: Fields = {
    hanzi: "图书馆",
    translations: "N: library",
    exampleSentence1: "我每天下午都去图书馆看书。",
    exampleSentence2: "这家图书馆藏书很丰富。",
    exampleAudioRef1: "",
    exampleAudioRef2: "",
    additionalInformation: "图书馆 refers to a public or private library.",
    countwords: "个，家"
};

const previewValues: Record<string, string> = {
    "汉字": "图书馆",
    "量词": "个",
    "拼音": "tu2shu1guan3",
    "额外消息": "refers to a public or private library.",
};

const cardConfig: Record<CardType, { label: string; front: string; back: string; cls: new (fields: Fields) => VocabularyCard }> = {
    "to-chinese": { label: "To Chinese", front: toFrontTemplate, back: toBackTemplate, cls: ToChineseVocabularyCard },
    "from-chinese": { label: "From Chinese", front: fromFrontTemplate, back: fromBackTemplate, cls: FromChineseVocabularyCard },
};

let currentCard: CardType = "to-chinese";
let darkMode = false;

function fillPlaceholders(html: string, values: Record<string, string>): string {
    return html.replace(/\{\{([^}]+)\}\}/g, (_, raw) => {
        const key = raw.trim().replace(/^[^:]+:/, "");
        return values[key] ?? "";
    });
}

function renderSide(template: string, cls: new (fields: Fields) => VocabularyCard, side: "front" | "back"): HTMLElement {
    const box = document.createElement("div");
    box.innerHTML = fillPlaceholders(template, previewValues);
    document.body.append(box);
    const card = new cls(previewFields);
    if (side === "front") card.renderFront();
    else card.renderBack();
    box.remove();
    return box;
}

function createCardButton(type: CardType): HTMLElement {
    const btn = document.createElement("button");
    btn.textContent = cardConfig[type].label;
    if (currentCard === type) {
        btn.style.background = "#999";
        btn.style.color = "#fff";
    }
    btn.onclick = () => render(type);
    return btn;
}

function createDarkModeButton(): HTMLElement {
    const btn = document.createElement("button");
    btn.textContent = darkMode ? "Light Mode" : "Dark Mode";
    btn.onclick = toggleDarkMode;
    return btn;
}

function makeResizable(target: HTMLElement, handle: HTMLElement) {
    let dragging = false;
    let startX = 0;
    let startW = 0;
    handle.addEventListener("mousedown", (e) => {
        dragging = true;
        startX = e.clientX;
        startW = target.getBoundingClientRect().width;
        document.body.style.cursor = "col-resize";
        document.body.style.userSelect = "none";
        e.preventDefault();
    });
    document.addEventListener("mousemove", (e) => {
        if (!dragging) return;
        const next = Math.max(120, startW + (e.clientX - startX));
        target.style.width = `${next}px`;
    });
    document.addEventListener("mouseup", () => {
        if (!dragging) return;
        dragging = false;
        document.body.style.cursor = "";
        document.body.style.userSelect = "";
    });
}

function toggleDarkMode() {
    darkMode = !darkMode;
    document.documentElement.classList.toggle("nightMode", darkMode);
    document.body.style.background = darkMode ? "black" : "";
    render(currentCard);
}

function render(cardType: CardType) {
    currentCard = cardType;
    sidebar.innerHTML = "";
    (Object.keys(cardConfig) as CardType[]).forEach(t => sidebar.append(createCardButton(t)));
    sidebar.append(createDarkModeButton());

    const cfg = cardConfig[cardType];
    stage.innerHTML = "";
    const frontBox = renderSide(cfg.front, cfg.cls, "front");
    const backBox = renderSide(cfg.back, cfg.cls, "back");
    frontBox.style.marginBottom = "1rem";
    stage.append(frontBox, backBox);
}

document.body.innerHTML = previewTemplate;
const sidebar = document.getElementById("preview-sidebar")!;
const gutter = document.getElementById("preview-gutter")!;
const stage = document.getElementById("preview-stage")!;
makeResizable(sidebar, gutter);
render("to-chinese");

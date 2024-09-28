import Example from "./Example";
import Card from "../Card";
import shuffle from "../../utils/shuffle";
import ChineseVocabularyCardFields from "./ChineseVocabularyCardFields";

enum ExampleMode {
    HIDE_SENTENCE,
    SHOW_SENTENCE_HIDE_HANZI,
    SHOW_SENTENCE_SHOW_HANZI,
    SHOW_SENTENCE_HIGHLIGHT_HANZI
}

abstract class ChineseVocabularyCard extends Card {
    protected fields: ChineseVocabularyCardFields;

    constructor(fields: ChineseVocabularyCardFields) {
        super();
        this.fields = fields;
    }

    protected appendExamples(mode: ExampleMode, showSound: boolean) {
        const example1: Example = {
            sentence: this.fields.exampleSentence1,
            soundRef: this.fields.exampleListeningRef1,
            hanzi: this.fields.hanzi,
        }

        const example2: Example = {
            sentence: this.fields.exampleSentence2,
            soundRef: this.fields.exampleListeningRef2,
            hanzi: this.fields.hanzi,
        }

        const examplesElement = document.getElementById("examples");

        if (example1.sentence.length !== 0) {
            const li = this.createExampleSentenceListElement(example1, mode, showSound);
            examplesElement.appendChild(li);
        }

        if (example2.sentence.length !== 0) {
            const li = this.createExampleSentenceListElement(example2, mode, showSound);
            examplesElement.appendChild(li);
        }
    }

    protected hideInfoIfUndefined() {
        if (!this.fields.additionalInformation) {
            const infoElement = document.getElementById("info");
            infoElement.style.display = "none";
        }
    }

    protected hideCountWordsIfUndefined() {
        if (!this.fields.countwords) {
            const infoElement = document.getElementById("countwords");
            infoElement.style.display = "none";
        }
    }

    protected parseTranslations() {
        const translationsElement = document.getElementById("translations");

        if (this.fields.translations[0] !== "{") {
            translationsElement.innerHTML = translationsElement.innerHTML.split("&nbsp;").join(" ");
            return;
        }

        const parsed = JSON.parse(this.fields.translations);
        const keys: string[] = Object.keys(parsed);
        const shuffledKeys = shuffle<string>(keys, new Date());

        const shuffledJson: any = {};
        shuffledKeys.forEach(k => {
            shuffledJson[k] = parsed[k];
        })

        const ul = this.jsonToHtmlList(shuffledJson);
        if (ul.children.length === 1) {
            ul.children[0].classList.add('hide-bullet-point');
        }

        translationsElement.append(ul);
    }

    private jsonToHtmlList(obj: object): HTMLElement {
        const ul = document.createElement("ul");

        Object.entries(obj).forEach(([key, val]) => {
            const li = document.createElement("li");
            if (val !== null && typeof val == 'object' && !Array.isArray(val)) {
                li.innerText = `[${key}]`
                ul.append(li);
                ul.append(this.jsonToHtmlList(val));
            } else {
                li.innerText = `[${key}] ${val?.join(", ")}`
                ul.append(li);
            }
        });

        return ul;
    }

    private createExampleSentenceListElement(example: Example, mode: ExampleMode, showSound: boolean): HTMLElement {
        const li = document.createElement("li");

        if (showSound) {
            li.classList.add('hide-bullet-point');
            li.innerHTML += example.soundRef;
        }

        switch (mode) {
            case ExampleMode.HIDE_SENTENCE:
                return li;
            case ExampleMode.SHOW_SENTENCE_SHOW_HANZI:
                return this.showSentenceShowHanzi(example, li);
            case ExampleMode.SHOW_SENTENCE_HIDE_HANZI:
                return this.showSentenceHideHanzi(example, li);
            case ExampleMode.SHOW_SENTENCE_HIGHLIGHT_HANZI:
                return this.showSentenceHighlightHanzi(example, li)
            default:
                throw new Error(`Unknown example mode '${mode}'`)
        }
    }

    private showSentenceShowHanzi(example: Example, li: HTMLElement): HTMLElement {
        li.innerHTML += example.sentence;
        return li;
    }

    private showSentenceHideHanzi(example: Example, li: HTMLElement): HTMLElement {
        if (example.hanzi.length !== 0) {
            const underscores = '__ '.repeat(example.hanzi.length);
            li.innerHTML += example.sentence.split(example.hanzi).join(underscores);
        }
        return li;
    }

    private showSentenceHighlightHanzi(example: Example, li: HTMLElement): HTMLElement {
        const highlightedSpan = '<span class="highlighted-character">' + example.hanzi + '</span>'
        li.innerHTML += example.sentence.split(example.hanzi).join(highlightedSpan);
        return li;
    }
}

export default ChineseVocabularyCard;
export {ExampleMode}

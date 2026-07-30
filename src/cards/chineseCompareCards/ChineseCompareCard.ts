import Card from "../Card";
import CompareEntry from "./CompareEntries";

class ChineseCompareCard extends Card {
    protected fields: { json: string };

    constructor(fields: { json: string }) {
        super();
        this.fields = fields;
    }

    protected renderBackCore(): void {
        const entries: CompareEntry[] = JSON.parse(this.fields.json.split('<br>').join(" "));
        const content = document.getElementById("content");
        content.append(this.renderEntries(entries, { showPinyin: true, showTranslationAndExplanation: true }));
    }

    protected renderFrontCore(): void {
        const entries: CompareEntry[] = JSON.parse(this.fields.json.split('<br>').join(" "));
        const content = document.getElementById("content");
        content.append(this.renderEntries(entries, { showPinyin: false, showTranslationAndExplanation: false }));
    }

    private renderEntries(entries: CompareEntry[], opts: { showPinyin: boolean; showTranslationAndExplanation: boolean }): HTMLOListElement {
        const ol = document.createElement("ol");

        entries.forEach((e: CompareEntry) => {
            const li = document.createElement("li");
            li.innerHTML = `<span class="font-xl">${e.word}</span>` + (opts.showPinyin ? ` <span class="font-s">${e.pinyin}</span>` : "");

            if (opts.showTranslationAndExplanation) {
                const subUl = document.createElement("ul");

                const exampleLi = document.createElement("li");
                exampleLi.innerText = e.example;
                subUl.append(exampleLi);

                const translationLi = document.createElement("li");
                translationLi.innerText = e.translation.join(", ");
                subUl.append(translationLi);

                const explanationLi = document.createElement("li");
                explanationLi.innerText = e.explanation;
                subUl.append(explanationLi);

                li.append(subUl);
            } else {
                const subUl = document.createElement("ul");
                const exampleLi = document.createElement("li");
                exampleLi.innerText = e.example;
                subUl.append(exampleLi);
                li.append(subUl);
            }

            ol.appendChild(li);
        });

        return ol;
    }
}

export default ChineseCompareCard;

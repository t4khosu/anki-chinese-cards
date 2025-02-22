import Card from "../Card";
import deserialize from "../../utils/deserialize";
import ChineseCompareCardFields from "./ChineseCompareCardFields";
import CompareEntry from "./CompareEntries";

class ChineseCompareCard extends Card {
    protected fields: ChineseCompareCardFields;

    constructor(fields: ChineseCompareCardFields) {
        super();
        this.fields = fields;
    }

    protected renderBackCore(): void {
        const fields = this.fields.json.split('<br>').join(" ");
        const entries = deserialize<CompareEntry>(fields);

        const ol = document.createElement("ol");

        entries.forEach((e: CompareEntry) => {
            const li = document.createElement("li");
            li.innerHTML = `<span class="font-xl">${e.word}</span> <span class="font-s">${e.pinyin}</span>`;

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

            li.append(subUl)
            ol.appendChild(li);
        });

        const content = document.getElementById("content");
        content.append(ol);
    }

    protected renderFrontCore(): void {
        const fields = this.fields.json.split('<br>').join(" ");
        const entries = deserialize<CompareEntry>(fields);

        const ol = document.createElement("ol");

        entries.forEach((e: CompareEntry) => {
            const li = document.createElement("li");
            li.innerHTML = `<span class="font-xl">${e.word}</span>`;

            const subUl = document.createElement("ul");

            const exampleLi = document.createElement("li");
            exampleLi.innerText = e.example;
            subUl.append(exampleLi);

            li.append(subUl)
            ol.appendChild(li);
        });

        const content = document.getElementById("content");
        content.append(ol);
    }
}

export default ChineseCompareCard;

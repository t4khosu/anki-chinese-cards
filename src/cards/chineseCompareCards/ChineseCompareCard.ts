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
        const entries = deserialize<CompareEntry[]>(this.fields.json);

        const ol = document.createElement("ol");

        entries.forEach((e: any) => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${e.word}</strong> ${e.pinyin}`;

            const subUl = document.createElement("ul");

            const exampleLi = document.createElement("li");
            exampleLi.innerText = e.example;
            subUl.append(exampleLi);

            const transLi = document.createElement("li");
            transLi.innerText = e.trans;
            subUl.append(transLi);

            li.append(subUl)
            ol.appendChild(li);
        });

        const content = document.getElementById("content");
        content.append(ol);
    }

    protected renderFrontCore(): void {
        const entries = deserialize<CompareEntry[]>(this.fields.json);

        const ol = document.createElement("ol");

        entries.forEach((e: any) => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${e.word}</strong> ${e.pinyin}`;

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

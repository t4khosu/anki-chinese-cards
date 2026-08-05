import Card from "../../../Card";

class TranslateCard extends Card {
    protected fields: { toTranslate: string };

    constructor(fields: { toTranslate: string }) {
        super();
        this.fields = fields;
    }

    protected renderFrontCore(): void {
        this.trimById("toTranslate");
        this.showVersion();
    }

    protected renderBackCore(): void {
        this.trimById("toTranslate");
        this.showVersion();
    }

    private trimById(id: string) {
        const el = document.getElementById(id);
        if (el) {
            el.innerText = el.innerText.trim();
        }
    }
}

export default TranslateCard;

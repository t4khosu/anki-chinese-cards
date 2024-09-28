import ChineseVocabularyCardFields from "./chineseVocabularyCards/ChineseVocabularyCardFields";

abstract class Card {
    public renderFront() {
        try {
            this.renderFrontCore();
        } catch (e) {
            const errorElement = document.getElementById('error');
            errorElement.innerText = `ERROR: ${e}`;
        }
    }

    public renderBack() {
        try {
            this.renderBackCore();
        } catch (e) {
            const errorElement = document.getElementById('error');
            errorElement.innerText = `ERROR: ${e}`;
        }
    }

    protected abstract renderFrontCore(): void;

    protected abstract renderBackCore(): void;
}

export default Card;

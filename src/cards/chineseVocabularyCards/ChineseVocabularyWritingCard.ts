import ChineseVocabularyCard, {ExampleMode} from "./ChineseVocabularyCard";
import countCharacters from "../../utils/countCharacters";

class ChineseVocabularyWritingCard extends ChineseVocabularyCard {
    protected renderFrontCore(): void {
        this.showNumberOfCharacters();
        this.parseTranslations();
        this.appendExamples(ExampleMode.SHOW_SENTENCE_HIDE_HANZI, false);

        const pinyinElement = document.getElementById("pinyin");
        pinyinElement.onclick = () => {
            pinyinElement.innerHTML = "{{拼音}}";
        }
    }

    protected renderBackCore(): void {
        this.hideInfoIfUndefined();
        this.hideCountWordsIfUndefined();
        this.parseTranslations();
        this.appendExamples(ExampleMode.SHOW_SENTENCE_SHOW_HANZI, true);
    }

    private showNumberOfCharacters() {
        const numCharacters = countCharacters(this.fields.hanzi);
        const term = numCharacters === 1 ? "Character" : "Characters";
        document.getElementById("numCharacters").innerHTML = `${numCharacters} ${term}`;
    }
}

export default ChineseVocabularyWritingCard;

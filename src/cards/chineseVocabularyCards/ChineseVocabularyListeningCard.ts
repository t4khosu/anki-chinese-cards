import ChineseVocabularyCard, {ExampleMode} from "./ChineseVocabularyCard";

class ChineseVocabularyListeningCard extends ChineseVocabularyCard {
    protected renderFrontCore(): void {
        this.appendExamples(ExampleMode.HIDE_SENTENCE, true);
        this.hideCountWordsIfUndefined();
    }

    protected renderBackCore(): void {
        this.parseTranslations();
        this.appendExamples(ExampleMode.SHOW_SENTENCE_HIGHLIGHT_HANZI, true);
        this.hideInfoIfUndefined();
        this.hideCountWordsIfUndefined();
    }
}

export default ChineseVocabularyListeningCard;

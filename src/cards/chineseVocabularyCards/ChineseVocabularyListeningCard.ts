import ChineseVocabularyCard, {ExampleMode} from "./ChineseVocabularyCard";

class ChineseVocabularyListeningCard extends ChineseVocabularyCard {
    protected renderFrontCore(): void {
        this.appendExamples(ExampleMode.HIDE_SENTENCE, true);
    }

    protected renderBackCore(): void {
        this.parseTranslations();
        this.appendExamples(ExampleMode.SHOW_SENTENCE_HIGHLIGHT_HANZI, true);
        this.hideInfoIfUndefined();
    }
}

export default ChineseVocabularyListeningCard;

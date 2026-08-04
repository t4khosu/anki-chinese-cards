import VocabularyCard, {ExampleMode} from "./VocabularyCard";

class FromChineseVocabularyCard extends VocabularyCard {
    protected renderFrontCore(): void {
        this.appendExamples(ExampleMode.HIDE_SENTENCE, true);
        this.hideCountWordsIfUndefined();
        this.showVersion();
    }

    protected renderBackCore(): void {
        this.parseTranslations();
        this.appendExamples(ExampleMode.SHOW_SENTENCE_HIGHLIGHT_HANZI, true);
        this.hideInfoIfUndefined();
        this.hideCountWordsIfUndefined();
        this.showVersion();
    }
}

export default FromChineseVocabularyCard;

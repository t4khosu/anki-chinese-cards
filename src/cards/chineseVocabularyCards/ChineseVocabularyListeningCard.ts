declare const PACKAGE_VERSION: string;

import ChineseVocabularyCard, {ExampleMode} from "./ChineseVocabularyCard";

class ChineseVocabularyListeningCard extends ChineseVocabularyCard {
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

    private showVersion() {
        const versionElement = document.getElementById("version");
        versionElement.innerHTML = `v${PACKAGE_VERSION}`;
    }
}

export default ChineseVocabularyListeningCard;

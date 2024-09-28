import ChineseVocabularyCardFields from "../cards/chineseVocabularyCards/ChineseVocabularyCardFields";
import ChineseVocabularyListeningCard from "../cards/chineseVocabularyCards/ChineseVocabularyListeningCard";
import ChineseVocabularyWritingCard from "../cards/chineseVocabularyCards/ChineseVocabularyWritingCard";

class ChineseVocabularyCardBuilder {
    private static getFields = (): ChineseVocabularyCardFields => {
        return {
            hanzi: `{{text:汉字}}`,
            exampleSentence1: `{{text:例子}}`,
            exampleListeningRef1: `{{听力}}`,
            exampleSentence2: `{{text:例子2}}`,
            exampleListeningRef2: `{{听力2}}`,
            additionalInformation: `{{text:额外消息}}`,
            translations: `{{text:定义}}`,
            countwords: `{{text:量词}}`
        };
    }

    static CreateListeningCard(): ChineseVocabularyListeningCard {
        return new ChineseVocabularyListeningCard(ChineseVocabularyCardBuilder.getFields())
    }

    static CreateWritingCard(): ChineseVocabularyWritingCard {
        return new ChineseVocabularyWritingCard(ChineseVocabularyCardBuilder.getFields())
    }

}

export default ChineseVocabularyCardBuilder;

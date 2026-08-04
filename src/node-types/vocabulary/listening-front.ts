import ChineseVocabularyListeningCard from "./cards/ChineseVocabularyListeningCard";

new ChineseVocabularyListeningCard({
    hanzi: `{{text:汉字}}`,
    exampleSentence1: `{{text:例子}}`,
    exampleListeningRef1: `{{听力}}`,
    exampleSentence2: `{{text:例子2}}`,
    exampleListeningRef2: `{{听力2}}`,
    additionalInformation: `{{text:额外消息}}`,
    translations: `{{定义}}`,
    countwords: `{{text:量词}}`
}).renderFront()

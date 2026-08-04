import ToChineseVocabularyCard from "./cards/ToChineseVocabularyCard";

new ToChineseVocabularyCard({
    hanzi: `{{text:汉字}}`,
    exampleSentence1: `{{text:例子}}`,
    exampleAudioRef1: `{{听力}}`,
    exampleSentence2: `{{text:例子2}}`,
    exampleAudioRef2: `{{听力2}}`,
    additionalInformation: `{{text:额外消息}}`,
    translations: `{{定义}}`,
    countwords: `{{text:量词}}`
}).renderBack()

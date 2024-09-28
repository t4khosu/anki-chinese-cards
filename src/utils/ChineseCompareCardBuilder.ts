import ChineseCompareCardFields from "../cards/chineseCompareCards/ChineseCompareCardFields";
import ChineseCompareCard from "../cards/chineseCompareCards/ChineseCompareCard";

class ChineseCompareCardBuilder {
    private static getFields = (): ChineseCompareCardFields => {
        return {
            json: `{{text:Json}}`,
        };
    }

    static CreateCard(): ChineseCompareCard {
        return new ChineseCompareCard(ChineseCompareCardBuilder.getFields())
    }
}

export default ChineseCompareCardBuilder;

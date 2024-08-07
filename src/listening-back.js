import {
    appendExample,
    replaceNbspWithSpaces,
    showAdditionalInfoDivIfDefined,
    tryToParseTranslationsToList,
} from "./utils/shared";
import {EXAMPLE_1, EXAMPLE_2, LISTENING_1, LISTENING_2} from "./utils/fields";

showAdditionalInfoDivIfDefined();
tryToParseTranslationsToList();
replaceNbspWithSpaces(document.getElementById("translations"));
appendExample(EXAMPLE_1, LISTENING_1, true, true);
appendExample(EXAMPLE_2, LISTENING_2, true, true);

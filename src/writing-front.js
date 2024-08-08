import {EXAMPLE_1, EXAMPLE_2} from "./utils/fields";
import {
    appendExample,
    replaceNbspWithSpaces,
    showNumberOfCharacters,
    tryToParseTranslationsToList
} from "./utils/shared";

replaceNbspWithSpaces(document.getElementById("translations"));
showNumberOfCharacters();
tryToParseTranslationsToList();
appendExample(EXAMPLE_1, null, true, false, true);
appendExample(EXAMPLE_2, null, true, false, true);

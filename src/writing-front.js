import {EXAMPLE_1, EXAMPLE_2, HANZI} from "./utils/fields";
import {
    appendExample,
    replaceNbspWithSpaces,
    showNumberOfCharacters,
    tryToParseTranslationsToList
} from "./utils/shared";

function appendExample2(example) {
    if (example === "") {
        return;
    }

    const replacement = '__ '.repeat(HANZI.length);
    example = example.replaceAll(HANZI, " " + replacement)

    const li = document.createElement("li");
    li.innerHTML = example;
    document.getElementById("examples").appendChild(li);
}


replaceNbspWithSpaces(document.getElementById("translations"));
showNumberOfCharacters();
tryToParseTranslationsToList();
appendExample(EXAMPLE_1, null, true, false, true);
appendExample(EXAMPLE_2, null, true, false, true);

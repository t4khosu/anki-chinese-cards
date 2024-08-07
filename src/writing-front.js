import {EXAMPLE_1, EXAMPLE_2, HANZI} from "./fields";
import {fixNbsp, showNumberOfCharacters, tryToParseTranslationsToList} from "./shared";


function appendExample(example) {
    if (example === "") {
        return;
    }

    const replacement = '__ '.repeat(HANZI.length);
    example = example.replaceAll(HANZI, " " + replacement)

    const li = document.createElement("li");
    li.innerHTML = example;
    document.getElementById("examples").appendChild(li);
}


fixNbsp(document.getElementById("translations"));
showNumberOfCharacters();
tryToParseTranslationsToList();
appendExample(EXAMPLE_1);
appendExample(EXAMPLE_2);

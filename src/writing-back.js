import {EXAMPLE_1, EXAMPLE_2} from "./fields";
import {fixNbsp, showAdditionalInfoDivIfDefined, tryToParseTranslationsToList} from "./shared";

function appendExample(example) {
    if (example === "") {
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = example;
    document.getElementById("examples").appendChild(li);
}


showAdditionalInfoDivIfDefined();
tryToParseTranslationsToList();
fixNbsp(document.getElementById("translations"));
appendExample(EXAMPLE_1);
appendExample(EXAMPLE_2);

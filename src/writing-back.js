import {ADDITIONAL_INFORMATION, EXAMPLE_1, EXAMPLE_2, TRANSLATIONS} from "./fields";

function jsonToHtmlList(obj) {
    let result = '<ul>';

    Object.entries(obj).forEach(([key, val]) => {
        if (val !== null && typeof val == 'object' && !Array.isArray(val)) {
            result += `<li>[${key}]</li>`
            result += jsonToHtmlList(val);
        } else {
            result += `<li>[${key}] ${val?.join(", ")}</li>`
        }
    });

    result += '</ul>';
    return result;
}

function tryToParseTranslationsToList() {
    if (TRANSLATIONS[0] !== "{") {
        return;
    }

    const parsed = JSON.parse(TRANSLATIONS);
    document.getElementById("translations").innerHTML = jsonToHtmlList(parsed);
}

function appendExample(example) {
    if (example === "") {
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = example;
    document.getElementById("examples").appendChild(li);
}

function fixNbsp(element) {
    element.innerHTML = element.innerHTML.replaceAll("&nbsp;", " ");
}


function showAdditionalInfoDivIfDefined() {
    if (ADDITIONAL_INFORMATION) {
        return;
    }

    document.getElementById("info").style.display = "none";
}

showAdditionalInfoDivIfDefined();
tryToParseTranslationsToList();
fixNbsp(document.getElementById("translations"));
appendExample(EXAMPLE_1);
appendExample(EXAMPLE_2);

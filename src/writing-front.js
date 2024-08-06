import {EXAMPLE_1, EXAMPLE_2, HANZI, PINYIN, TRANSLATIONS} from "./fields";

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

    const replacement = '__ '.repeat(HANZI.length);
    example = example.replaceAll(HANZI, " " + replacement)

    const li = document.createElement("li");
    li.innerHTML = example;
    document.getElementById("examples").appendChild(li);
}

function showPinyin() {
    document.getElementById("pinyin").textContent = PINYIN;
}

function fixNbsp(element) {
    element.innerHTML = element.innerHTML.replaceAll("&nbsp;", " ");
}

function showNumberOfCharacters() {
    const numCharacters = HANZI.length;
    const term = numCharacters === 1 ? "Character" : "Characters";
    document.getElementById("numCharacters").innerHTML = `${numCharacters} ${term}`;
}

fixNbsp(document.getElementById("translations"));
showNumberOfCharacters();
tryToParseTranslationsToList();
appendExample(EXAMPLE_1);
appendExample(EXAMPLE_2);

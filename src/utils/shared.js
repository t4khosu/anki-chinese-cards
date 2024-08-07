import {ADDITIONAL_INFORMATION, HANZI, TRANSLATIONS} from "./fields";
import CharacterCounter from "./CharacterCounter";

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

function showAdditionalInfoDivIfDefined() {
    if (ADDITIONAL_INFORMATION) {
        return;
    }

    document.getElementById("info").style.display = "none";
}

function replaceNbspWithSpaces(element) {
    element.innerHTML = element.innerHTML.replaceAll("&nbsp;", " ");
}

function showNumberOfCharacters() {
    const numCharacters = CharacterCounter(HANZI);
    const term = numCharacters === 1 ? "Character" : "Characters";
    document.getElementById("numCharacters").innerHTML = `${numCharacters} ${term}`;
}

function tryToParseTranslationsToList() {
    if (TRANSLATIONS[0] !== "{") {
        return;
    }

    const parsed = JSON.parse(TRANSLATIONS);
    document.getElementById("translations").innerHTML = jsonToHtmlList(parsed);
}

function appendExample(example, sound, showExample, highlightHanzi, hideHanzi) {
    if (example === "") {
        return;
    }

    let displayedHanzi = HANZI;

    if (hideHanzi) {
        displayedHanzi = '__ '.repeat(HANZI.length);
    }

    if (highlightHanzi) {
        displayedHanzi = '<span class="highlighted-character">' + displayedHanzi + '</span>'
    }

    const li = document.createElement("li");
    if (sound) {
        li.classList.add('hide-bullet-point');
        li.innerHTML = sound;
        if (showExample) {
            li.innerHTML += example.replaceAll(HANZI, displayedHanzi);
        }
    } else {
        li.innerHTML = example.replaceAll(HANZI, displayedHanzi);
    }

    document.getElementById("examples").appendChild(li);
}

export {
    showAdditionalInfoDivIfDefined,
    replaceNbspWithSpaces,
    showNumberOfCharacters,
    tryToParseTranslationsToList,
    appendExample
};

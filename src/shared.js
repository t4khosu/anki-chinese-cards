import {ADDITIONAL_INFORMATION, HANZI, TRANSLATIONS} from "./fields";

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

function fixNbsp(element) {
    element.innerHTML = element.innerHTML.replaceAll("&nbsp;", " ");
}

function showNumberOfCharacters() {
    const numCharacters = HANZI.length;
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

function appendExampleFront(sentence, sound) {
    if (sentence === "") {
        return;
    }

    const hanzi = "{{text:汉字}}";
    const highlightedHanzi = '<span class="highlighted-character">' + hanzi + '</span>'

    const li = document.createElement("li");
    if (sound) {
        li.classList.add('hide-bullet-point');
        li.innerHTML = sound;
    } else {
        li.innerHTML = sentence.replaceAll(hanzi, highlightedHanzi);
    }

    document.getElementById("examples").appendChild(li);
}

function appendExampleBack(sentence, sound) {
    if (sentence === "") return;

    const hanzi = "{{text:汉字}}";
    const highlightedHanzi = '<span class="highlighted-character">' + hanzi + '</span>'

    const li = document.createElement("li");
    if (sound) {
        li.classList.add('hide-bullet-point');
        li.innerHTML = sound + sentence.replaceAll(hanzi, highlightedHanzi);
    } else {
        li.innerHTML = sentence.replaceAll(hanzi, highlightedHanzi);
    }
    document.getElementById("examples").appendChild(li);
}

export {
    jsonToHtmlList,
    showAdditionalInfoDivIfDefined,
    fixNbsp,
    showNumberOfCharacters,
    tryToParseTranslationsToList,
    appendExampleFront,
    appendExampleBack
};

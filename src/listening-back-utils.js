export function jsonToHtmlList(obj) {
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

export function parseTranslations() {
    const translations = `{{text:定义}}`;
    if (translations[0] !== "{") {
        return;
    }

    const parsed = JSON.parse(translations);
    document.getElementById("translations").innerHTML = jsonToHtmlList(parsed);
}

export function hideAdditionalInfoIfNotSet() {
    const additionalInfo = `{{text:额外消息}}`;

    if (additionalInfo !== "") return;
    document.getElementById("info").style.display = "none";
}

export function fixNbsp(element) {
    element.innerHTML = element.innerHTML.replaceAll("&nbsp;", " ");
}

export function appendExample(sentence, sound) {
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

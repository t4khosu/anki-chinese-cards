import shuffle from "./shuffle";

const parseTranslationsToUList = (translationsFieldContent: string): HTMLUListElement => {
    const cleanTranslationFieldContent = translationsFieldContent.split('<br>').join(' ')

    const translationJson = JSON.parse(cleanTranslationFieldContent);

    const shuffledJson = shuffleJson(translationJson);
    const sortedJson = sortJson(shuffledJson);
    const ul = jsonToHtmlList(sortedJson);

    if (ul.children.length === 1) {
        ul.children[0].classList.add('hide-bullet-point');
    }

    return ul;
}

const shuffleJson = (json: any): object => {
    const shuffledJsonKeys = shuffle<string>(Object.keys(json), new Date());

    const shuffledJson: any = {};
    shuffledJsonKeys.forEach(k => {
        shuffledJson[k] = json[k];
    })

    return shuffledJson;
}

const sortJson = (json: any): object => {
    const sortedKeys = Object.keys(json).sort((a, b) => {
        if (a === 'mw' || a === 'hint') return 1;
        if (b === 'mw' || b === 'hint') return -1;
        return 0;
    });

    const sortedJson: any = {};
    sortedKeys.forEach(key => {
        sortedJson[key] = json[key];
    });

    return sortedJson;
}

const jsonToHtmlList = (obj: object): HTMLUListElement => {
    const ul = document.createElement("ul");

    Object.entries(obj).forEach(([key, val]) => {
        const li = document.createElement("li");
        if (val !== null && typeof val == 'object' && !Array.isArray(val)) {
            li.innerText = `[${key}]`
            ul.append(li);
            ul.append(jsonToHtmlList(val));
        } else {
            if (key === "mw") {
                li.innerHTML = `<i>[${key}] ${val === null || val === void 0 ? void 0 : val.join(", ")}</i>`;
            } else if (key === "hint") {
                li.innerText = `💡 ${val === null || val === void 0 ? void 0 : val.join(", ")}`;
            } else {
                li.innerText = `[${key}] ${val === null || val === void 0 ? void 0 : val.join(", ")}`;
            }
            ul.append(li);
        }
    });

    return ul;
}

export default parseTranslationsToUList;

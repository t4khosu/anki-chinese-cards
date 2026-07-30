import shuffle from "./shuffle";

const parseTranslationsToUList = (translationsFieldContent: string): HTMLUListElement => {
    const cleanTranslationFieldContent = translationsFieldContent.split('<br>').join(' ')

    const translationJson = JSON.parse(cleanTranslationFieldContent);

    const sortedJson = sortJson(shuffleJson(translationJson));
    const ul = jsonToHtmlList(sortedJson);

    if (ul.children.length === 1) {
        ul.children[0].classList.add('hide-bullet-point');
    }

    return ul;
}

const shuffleJson = (json: any): object =>
    Object.fromEntries(shuffle(Object.entries(json), new Date()));

const sortJson = (json: any): object =>
    Object.fromEntries(Object.entries(json).sort((a, b) => {
        if (a[0] === 'mw' || a[0] === 'hint') return 1;
        if (b[0] === 'mw' || b[0] === 'hint') return -1;
        return 0;
    }));

const jsonToHtmlList = (obj: object): HTMLUListElement => {
    const ul = document.createElement("ul");

    Object.entries(obj).forEach(([key, val]) => {
        const li = document.createElement("li");
        if (val !== null && typeof val == 'object' && !Array.isArray(val)) {
            li.innerText = `[${key}]`
            ul.append(li);
            ul.append(jsonToHtmlList(val));
        } else {
            const joined = (val ?? []).join(", ");
            if (key === "mw") {
                li.innerHTML = `<i>[${key}] ${joined}</i>`;
            } else if (key === "hint") {
                li.innerText = `💡 ${joined}`;
            } else {
                li.innerText = `[${key}] ${joined}`;
            }
            ul.append(li);
        }
    });

    return ul;
}

export default parseTranslationsToUList;

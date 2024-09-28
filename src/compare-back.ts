import deserialize from "./utils/deserialize";

try {
    const entries = deserialize(`{{Json}}`);

    const ul = document.createElement("ul");

    entries.forEach((e: any) => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${e.word}</strong> ${e.pinyin}`;

        const subUl = document.createElement("ul");

        const exampleLi = document.createElement("li");
        exampleLi.innerText = e.example;
        subUl.append(exampleLi);

        const transLi = document.createElement("li");
        transLi.innerText = e.trans;
        subUl.append(transLi);

        li.append(subUl)
        ul.appendChild(li);
    });

    const content = document.getElementById("content");
    content.append(ul);
} catch (e) {
    const errorElement = document.getElementById("error");
    errorElement.innerText = `Error: ${e}`;
}



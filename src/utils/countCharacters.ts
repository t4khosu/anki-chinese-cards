const countCharacters = (textWithCharacters: string) => {
    let count = 0;
    
    [...textWithCharacters].forEach(c => {
        if (c.match(/[\u3400-\u9FBF]/)) {
            count += 1;
        }
    })

    return count;
}

export default countCharacters;

const countCharacters = (text: string): number =>
    (text.match(/[\u3400-\u9FBF]/g) ?? []).length;

export default countCharacters;

import CharacterCounter from "../src/utils/CharacterCounter";

describe("CharacterCounter", () => {
    it("Empty text returns 0", () => {
        expect(CharacterCounter("")).toBe(0);
    });

    it("Text without characters returns 0", () => {
        expect(CharacterCounter("Some random text without characters")).toBe(0);
    });

    it("Text with one character returns 1", () => {
        expect(CharacterCounter("好")).toBe(1);
    });

    it("Text with two characters returns 2", () => {
        expect(CharacterCounter("你好")).toBe(2);
    });

    it("Text with only characters returns text length", () => {
        expect(CharacterCounter("你好你叫什么名字")).toBe(8);
    });

    it("Ignore chinese punctuation", () => {
        expect(CharacterCounter("？。，、")).toBe(0);
    });

    it("Combination of Characters and non-characters", () => {
        expect(CharacterCounter("你好，你好吗？")).toBe(5);
    });

    it("Combination of Characters and non-character letters", () => {
        expect(CharacterCounter("你好，wie gehts?")).toBe(2);
    });
})


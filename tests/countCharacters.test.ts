import countCharacters from "../src/utils/countCharacters";

describe("countCharacters", () => {
    it("Empty text returns 0", () => {
        expect(countCharacters("")).toBe(0);
    });

    it("Text without characters returns 0", () => {
        expect(countCharacters("Some random text without characters")).toBe(0);
    });

    it("Text with one character returns 1", () => {
        expect(countCharacters("好")).toBe(1);
    });

    it("Text with two characters returns 2", () => {
        expect(countCharacters("你好")).toBe(2);
    });

    it("Text with only characters returns text length", () => {
        expect(countCharacters("你好你叫什么名字")).toBe(8);
    });

    it("Ignore chinese punctuation", () => {
        expect(countCharacters("？。，、")).toBe(0);
    });

    it("Combination of Characters and non-characters", () => {
        expect(countCharacters("你好，你好吗？")).toBe(5);
    });

    it("Combination of Characters and non-character letters", () => {
        expect(countCharacters("你好，wie gehts?")).toBe(2);
    });
})


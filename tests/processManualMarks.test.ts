import processManualMarks from "../src/utils/processManualMarks";

describe("processManualMarks", () => {
    it("returns plain sentence unchanged", () => {
        expect(processManualMarks("你好", "hide")).toBe("你好");
    });

    it("hides {{...}} chars on front", () => {
        expect(processManualMarks("我{{去}}图书馆", "hide")).toBe("我__ 图书馆");
    });

    it("unwraps {{...}} chars on back", () => {
        expect(processManualMarks("我{{去}}图书馆", "show")).toBe("我去图书馆");
    });

    it("handles multiple marks", () => {
        expect(processManualMarks("{{你}}好{{吗}}", "hide")).toBe("__ 好__ ");
    });

    it("highlights {{...}} chars", () => {
        expect(processManualMarks("我{{去}}图书馆", "highlight")).toBe('我<span class="font-bold">去</span>图书馆');
    });
});

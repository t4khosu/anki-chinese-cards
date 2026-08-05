import processManualMarks from "../src/utils/processManualMarks";

describe("processManualMarks", () => {
    it("returns plain sentence unchanged", () => {
        expect(processManualMarks("你好", true)).toBe("你好");
    });

    it("hides {{...}} chars on front", () => {
        expect(processManualMarks("我{{去}}图书馆", true)).toBe("我__ 图书馆");
    });

    it("unwraps {{...}} chars on back", () => {
        expect(processManualMarks("我{{去}}图书馆", false)).toBe("我去图书馆");
    });

    it("handles multiple marks", () => {
        expect(processManualMarks("{{你}}好{{吗}}", true)).toBe("__ 好__ ");
    });
});

import { sum } from "../../utils/math.utils.js";
import { describe, it, expect } from "@jest/globals";
describe("test sum function", () => {
    it("should adds 4 and 3 equals to 7", () => {
        expect(sum(4, 3)).toBe(7);
    });
});

import { describe, it } from "@jest/globals";
import { sum } from "../utils/math.utils.ts";

describe("sum function", () => {
  it("add 2 and 4 to equal 6", () => {
    expect(sum(2, 4)).toBe(6);
  });
});

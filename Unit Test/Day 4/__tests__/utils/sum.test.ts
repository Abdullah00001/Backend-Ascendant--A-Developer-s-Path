import makeSum from "../../src/utils/sum.utils";

describe("makeSum", () => {
  test("its should be return 4", () => {
    expect(makeSum()).toBe(4);
  });
});

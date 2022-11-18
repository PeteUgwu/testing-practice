const { stringLength } = require("./index");

test("should output stringLength", () => {
  const length = stringLength("");
  expect(length).toBe(length);
});

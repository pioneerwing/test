const factorial = require("../src");

describe("Factorial function", () => {
  it("correctly computes factorial of a positive integer number", () => {
    expect(factorial(3)).toEqual(6); // `toEqal` → `toEqual`로 수정
  });

  it("throws an error if a negative input is provided", () => {
    expect(() => {
      factorial(-1);
    }).toThrow("Factorial is only defined for non-negative integers!"); // 오타 수정
  });
});

// Computes a factorial of a given positive integer
function factorial(n) {
  if (n < 0) {
    throw new Error("Factorial is only defined for non-negative integers!");
  }

  if (n === 0) {
    // 수정: 비교 연산자 === 사용
    return 1;
  }
  return n * factorial(n - 1);
}

module.exports = factorial;

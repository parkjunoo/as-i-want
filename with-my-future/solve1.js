const [n] = process.argv.slice(2);

// 0, 1 나오는 횟수를 추적하면서 피보나치 수열을 구하는 함수
// 메모이제이션 활용

// n: 0 <= 40 자연수

// [0][0] 은 피포나치 수
// [0][1] 은 0의 개수
// [0][2] 은 1의 개수
const memo = Array.from(Array(41), () => Array(3));

// 초기값 설정
memo[0][0] = 0;
memo[0][1] = 1;
memo[0][2] = 0;

memo[1][0] = 1;
memo[1][1] = 0;
memo[1][2] = 1;

function fibonacci(n) {
  if (memo[n][0] != null || n === 0 || n === 1) {
    return memo[n][0];
  }

  memo[n][0] = fibonacci(n - 1) + fibonacci(n - 2);
  memo[n][1] = memo[n - 1][1] + memo[n - 2][1];
  memo[n][2] = memo[n - 1][2] + memo[n - 2][2];

  return memo[n][0];
}

fibonacci(Number(n));

// node solve1.js 40
// answer: 63245986 102334155
console.log(memo[n][1] + " " + memo[n][2]);

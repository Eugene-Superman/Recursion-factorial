// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  const prevNumber = number - 1;

  return prevNumber > 1
    ? number * findFactorialRecursive(prevNumber)
    : number;
}

function findFactorialIterative(number) {
  let answer = number;
  for (let i = number - 1; i > 1; i--) {
    answer *= i;
  }
  return answer;
}

import { playGame, getRandomNumber } from '../index.js';

function getGcd(a, b) {
  // Base case: If b is 0, the GCD is a
  if (b === 0) {
    return a;
  }
  // Otherwise, recursively call gcd with b and the remainder of a divided by b
  return getGcd(b, a % b);
}

function generateQuestion() {
  const number1 = getRandomNumber(1, 50);
  const number2 = getRandomNumber(1, 50);

  const question = `${number1} ${number2}`;
  const correctAnswer = `${getGcd(number1, number2)}`;

  return [question, correctAnswer];
}

export default function playGcdGame() {
  const rules = 'Find the greatest common divisor of given numbers.';
  playGame(rules, generateQuestion);
}

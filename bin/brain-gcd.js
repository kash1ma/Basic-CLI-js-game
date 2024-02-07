import readlineSync from 'readline-sync';

import { getRandomNumber } from '../src/index.js';
import { name } from '../src/cli.js';

console.log('Find the greatest common divisor of given numbers.');

function gcd(a, b) {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  

  export function playGcdGame() {
    const rounds = 3;
    for (let index = 0; index < rounds; index++) {
      const num1 = getRandomNumber(1, 100);
      const num2 = getRandomNumber(1, 100);
      const correctAnswer = gcd(num1, num2);
    }
    console.log(`Question: ${num1}, ${num2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (parseInt(userAnswer) === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return
    }
    console.log(`Congratulations, ${name}!`);
  }

playGCDGame();

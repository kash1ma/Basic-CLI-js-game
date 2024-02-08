#!/usr/bin/env node
import readlineSync from 'readline-sync';

import greetingWithNameReturn, { getRandomNumber } from '../src/index.js';

const name = greetingWithNameReturn();

function gcd(a, b) {
  // Base case: If b is 0, the GCD is a
  if (b === 0) {
    return a;
  }
  // Otherwise, recursively call gcd with b and the remainder of a divided by b
  return gcd(b, a % b);
}

function playGcdGame() {
  console.log('Find the greatest common divisor of given numbers.');
  const rounds = 3;

  for (let i = 0; i < rounds; i += 1) {
    const num1 = getRandomNumber(1, 100);
    const num2 = getRandomNumber(1, 100);
    const correctAnswer = gcd(num1, num2);

    console.log(`Question: ${num1} ${num2}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(userAnswer) === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}

playGcdGame();

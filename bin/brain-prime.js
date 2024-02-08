#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetingWithNameReturn, { getRandomNumber } from '../src/index.js';

const name = greetingWithNameReturn();

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Function to play the prime number game
function playPrimeGame() {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const rounds = 3;

  for (let i = 0; i < rounds; i += 1) {
    const number = getRandomNumber(1, 100);
    const isNumberPrime = isPrime(number);
    const correctAnswer = isNumberPrime ? 'yes' : 'no';

    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer.toLowerCase() === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}

playPrimeGame();

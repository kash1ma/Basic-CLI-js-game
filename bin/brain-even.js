#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetingWithNameReturn, { getRandomNumber } from '../src/index.js';

const name = greetingWithNameReturn();

// Function to check if a number is even
const isEven = (number) => number % 2 === 0;

// Function to play the game
const playEvenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomNumber(1, 50);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

    if (userAnswer.toLowerCase() === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

// Run the game
playEvenGame();

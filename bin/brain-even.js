import readlineSync from 'readline-sync';

import { getRandomNumber } from '../src/index.js';

// Function to check if a number is even
const isEven = (number) => number % 2 === 0;

// Function to play the game
export const playEvenGame = () => {
  console.log(`Answer "yes" if the number is even, otherwise answer "no".`);

  for (let i = 0; i < 3; i++) {
    const randomNumber = getRandomNumber();
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

    if (userAnswer.toLowerCase() === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again!`);
      return;
    }
  }

  console.log(`Congratulations! You've won!`);
};

// Run the game
playEvenGame();

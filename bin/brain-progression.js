#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetingWithNameReturn from '../src/index.js';

const name = greetingWithNameReturn();

// Function to generate an arithmetic progression with a missing element
function generateProgression() {
  const progressionLength = Math.floor(Math.random() * 6) + 5; // Random length between 5 and 10
  const progression = [];
  const missingIndex = Math.floor(Math.random() * progressionLength);

  for (let i = 0; i < progressionLength; i += 1) {
    if (i === missingIndex) {
      progression.push('..');
    } else {
      progression.push(i * 2 + 5);
    }
  }

  return { progression, missingNumber: missingIndex * 2 + 5 };
}

function playProgressionGame() {
  console.log('What number is missing in the progression?');
  const rounds = 3;

  for (let i = 0; i < rounds; i += 1) {
    const { progression, missingNumber } = generateProgression();

    console.log(`Question: ${progression.join(' ')}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(userAnswer) === missingNumber) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${missingNumber}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}

playProgressionGame();

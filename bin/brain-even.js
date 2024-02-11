#!/usr/bin/env node
import { getRandomNumber, playgame } from '../src/index.js';

function generateQuestion() {
  const question = getRandomNumber(1, 50);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';

  return [question, correctAnswer];
}

function playEvenGame() {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  playgame(rules, generateQuestion);
}

// Run the game
playEvenGame();

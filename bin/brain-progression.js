#!/usr/bin/env node
import { playgame, getRandomNumber } from "../src/index.js";

// Function to generate an arithmetic progression with a missing element
function generateProgression() {
  const progressionLength = Math.floor(Math.random() * 6) + 5; // Random length between 5 and 10
  const progression = [];
  const firstEl = getRandomNumber(1, 20);
  const diff = getRandomNumber(1, 20);


  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstEl + diff * i);
  }
  
  return progression
}

function generateQuestion() {
  const progression = generateProgression();
  const missingNum = getRandomNumber(0, progression.length - 1);
  const correctAnswer = `${progression[missingNum]}`;
  progression[missingNum] = '..';
  const question = progression.join(' ')
  return [question, correctAnswer]
}

function playProgressionGame() {
  const rules = 'What number is missing in the progression?';
  playgame(rules, generateQuestion)
}

playProgressionGame();

import { getRandomNumber, playGame } from '../index.js';

function generateQuestion() {
  const question = getRandomNumber(1, 50);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';

  return [question, correctAnswer];
}

export default function playEvenGame() {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  playGame(rules, generateQuestion);
}

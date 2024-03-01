import { playGame, getRandomNumber } from '../index.js';

// Генерация случайного математического выражения
function generateQuestion() {
  let question = '';
  let correctAnswer = '';

  const number1 = getRandomNumber(20, 0);
  const number2 = getRandomNumber(20, 0);
  const operator = getRandomNumber(0, 2);

  if (operator === 0) {
    question = `${number1} + ${number2}`;
    correctAnswer = `${number1 + number2}`;
  } else if (operator === 1) {
    question = `${number1} - ${number2}`;
    correctAnswer = `${number1 - number2}`;
  } else {
    question = `${number1} * ${number2}`;
    correctAnswer = `${number1 * number2}`;
  }

  return [question, correctAnswer];
}

// Основная функция игры
export default function playCalculatorGame() {
  const rules = 'What is the result of the expression?';
  playGame(rules, generateQuestion);
}

import readlineSync from 'readline-sync';

import { getRandomNumber } from '../src/index.js';

// Генерация случайной операции (+, -, *)
function getRandomOperator() {
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomNumber(0, operators.length - 1);
  return operators[randomIndex];
}

// Генерация случайного математического выражения
function generateRandomExpression() {
  const num1 = getRandomNumber(1, 50);
  const num2 = getRandomNumber(1, 50);
  const operator = getRandomOperator();

  return `${num1} ${operator} ${num2}`;
}

// Вычисление результата выражения
function calculateExpression(expression) {
  return eval(expression);
}

// Основная функция игры
export function playCalculatorGame() {
  let score = 0;
  const rounds = 3; // Количество раундов

  console.log('Добро пожаловать в игру "Калькулятор"!\n');

  for (let round = 1; round <= rounds; round++) {
    const expression = generateRandomExpression();
    const userAnswer = readlineSync.question(`Раунд ${round}: ${expression} = `);
    const correctAnswer = calculateExpression(expression);

    if (parseInt(userAnswer) === correctAnswer) {
      console.log('Правильно!\n');
      score += 1;
    } else {
      console.log(`Неправильно! Правильный ответ: ${correctAnswer}\n`);
    }
  }

  console.log(`Игра завершена. Ваш счет: ${score} из ${rounds}`);
}

// Запуск игры
playCalculatorGame();

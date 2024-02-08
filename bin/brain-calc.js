#!/usr/bin/env node
import readlineSync from 'readline-sync';

import greetingWithNameReturn, { getRandomNumber } from '../src/index.js';

const name = greetingWithNameReturn();

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

  return {
    expression: `${num1} ${operator} ${num2}`, num1, operator, num2,
  };
}

// Вычисление результата выражения
function calculateExpression(num1, operator, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unsupported operator: ${operator}`);
  }
}
// Основная функция игры
function playCalculatorGame() {
  const rounds = 3; // Количество раундов

  console.log('What is the result of the expression?');

  for (let round = 1; round <= rounds; round += 1) {
    const {
      expression, num1, operator, num2,
    } = generateRandomExpression();
    console.log(`Question: ${expression} `);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = calculateExpression(num1, operator, num2);

    if (Number(userAnswer) === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}

// Запуск игры
playCalculatorGame();

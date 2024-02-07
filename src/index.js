// Функция выбора игры
import readlineSync from 'readline-sync';
import { playCalculatorGame } from '../bin/brain-calc.js';
import { playEvenGame } from '../bin/brain-even.js';

export function chooseGame() {
    console.log('Выберите игру:');
    console.log('1. Калькулятор');
    console.log('2. Четность числа');
  
    const choice = readlineSync.question('Введите номер выбранной игры: ');
  
    switch (choice) {
      case '1':
        playCalculatorGame();
        break;
      case '2':
        playEvenGame();
        break;
      default:
        console.log('Некорректный выбор.');
    }
  }
  
  // Запуск выбора игры
  chooseGame();
  
export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

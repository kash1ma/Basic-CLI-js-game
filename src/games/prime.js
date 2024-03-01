import { playGame, getRandomNumber } from '../index.js';

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function generateQuestion() {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
}

// Function to play the prime number game
export default function playPrimeGame() {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  playGame(rules, generateQuestion);
}

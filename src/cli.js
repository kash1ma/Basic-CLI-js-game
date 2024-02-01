import readlineSync from 'readline-sync';

export function getUserName() {
  // Use the `question` function to prompt the user for input
  const name = readlineSync.question("What is your name? ")

  return name;
}

const userName = getUserName();
console.log("Hello, " + userName + "!");

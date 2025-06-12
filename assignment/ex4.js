// Instructions: https://github.com/HackYourFuture/UsingAPIs-assignment-week2#instructions--ex4

// ! Do not remove these lines
import { rollDie } from '../helpers/pokerDiceRoller.js';
/** @import {DieFace} from "../helpers/pokerDiceRoller.js" */

export function rollDice() {
  const dice = [1, 2, 3, 4, 5];
  // TODO#1
  rollDie(1);
}

// Refactor this function to use async/await and try/catch
function main() {
  // TODO#2
  rollDice()
    .then((results) => console.log('Resolved!', results))
    .catch((error) => console.log('Rejected!', error.message));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}

// TODO#3
export const explanation = `
Replace this placeholder with your explanation of why some dice continue rolling 
for an undetermined time after the promise returned by Promise.race() resolves.
`;

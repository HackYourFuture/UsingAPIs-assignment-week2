// Instructions: https://github.com/HackYourFuture/UsingAPIs-assignment-week2#instructions-ex3

// ! Do not change or remove the next two lines
import { rollDie } from '../helpers/pokerDiceRoller.js';
/** @import {DieFace} from "../helpers/pokerDiceRoller.js" */

/**
 * Rolls a die until the desired value is rolled.
 * @param {DieFace} desiredValue
 * @returns {Promise<DieFace>}
 */
export function rollDieUntil(desiredValue) {
  // TODO#1
  return rollDie().then((value) => {
    if (value !== desiredValue) {
      return rollDieUntil(desiredValue);
    }
    return value;
  });
}

// TODO#2
function main() {
  rollDieUntil('ACE')
    .then((results) => console.log('Resolved!', results))
    .catch((error) => console.log('Rejected!', error.message));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}

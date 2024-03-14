#!/usr/bin/env node
import readlineSync from 'readline-sync';
import hi from '../../src/cli.js';

console.log('brain-calc');
const name = hi();
console.log('What is the result of the expression?');

const arrayCalc = ['-', '+', '*'];
let i = 0;
while (i < 3) {
  const number1 = (Math.floor(Math.random() * 25) + 1);
  const number2 = (Math.floor(Math.random() * 25) + 1);
  const randomCalc = (Math.floor(Math.random() * 3));
  console.log(`Question: ${number1} ${arrayCalc[randomCalc]} ${number2}`);
  let absoluteResult = 0;
  switch (arrayCalc[randomCalc]) {
    case '-':
      absoluteResult = number1 - number2;
      break;
    case '+':
      absoluteResult = number1 + number2;
      break;
    case '*':
      absoluteResult = number1 * number2;
      break;
    default:
      break;
  }
  const answer = readlineSync.question('Your answer: ');
  if (arrayCalc[randomCalc] === '-' && absoluteResult === Number(answer)) {
    console.log('Correct!');
    i += 1;
  } else if (arrayCalc[randomCalc] === '+' && absoluteResult === Number(answer)) {
    console.log('Correct!');
    i += 1;
  } else if (arrayCalc[randomCalc] === '*' && absoluteResult === Number(answer)) {
    console.log('Correct!');
    i += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${absoluteResult}'. Let's try again, ${name}!`);
    i = 0;
    break;
  }
}
if (i === 3) {
  console.log(`Congratulations, ${name}!`);
  i = 0;
}

#!/usr/bin/env node
import readlineSync from 'readline-sync';
import hi from '../../src/cli.js';

console.log('brain-gcd');
const name = hi();
console.log('Find the greatest common divisor of given numbers.');

function findOD(number1, number2) {
  let num1 = number1;
  let num2 = number2;
  while (num2 !== 0) {
    const mb = num2;
    num2 = num1 % num2;
    num1 = mb;
  }
  return num1;
}

let i = 0;
while (i < 3) {
  const number1 = (Math.floor(Math.random() * 25) + 1);
  const number2 = (Math.floor(Math.random() * 25) + 1);
  const number3 = findOD(number1, number2);
  console.log(`Question: ${number1} ${number2}`);
  const answer = readlineSync.question('Your answer: ');
  if (Number(answer) === Number(number3)) {
    console.log('Correct!');
    i += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${number3}'. Let's try again, ${name}!`);
    i = 0;
    break;
  }
}
if (i === 3) {
  console.log(`Congratulations, ${name}!`);
  i = 0;
}

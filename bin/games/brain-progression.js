import readlineSync from 'readline-sync';
import hi from '../../src/cli.js';

console.log('brain-progression');
const name = hi();
console.log('What number is missing in the progression?');

let i = 0;
let m = 0;
let d = 0;
let dobavlenie = 0;
const mass = [];
while (i < 3) {
  const number1 = (Math.floor(Math.random() * 10) + 1);
  const number2 = (Math.floor(Math.random() * 15) + 1);
  const randomId = (Math.floor(Math.random() * 10));
  dobavlenie = number1;
  mass.push(number1);
  while (m < 9) {
    dobavlenie += number2;
    mass.push(dobavlenie);
    m += 1;
  }
  const osoznanie = mass[randomId];
  mass[randomId] = '..';
  console.log(`Question: ${mass}`);
  const answer = readlineSync.question('Your answer: ');
  if (Number(answer) === Number(osoznanie)) {
    console.log('Correct!');
    m = 0;
    i += 1;
    while (d < 10) {
      mass.pop();
      d += 1;
    }
    d = 0;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${osoznanie}'. Let's try again, ${name}!`);
    i = 0;
    m = 0;
    while (d < 10) {
      mass.pop();
      d += 1;
    }
    d = 0;
    break;
  }
}
if (i === 3) {
  console.log(`Congratulations, ${name}!`);
  i = 0;
}

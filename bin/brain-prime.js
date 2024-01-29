import readlineSync from 'readline-sync';
import hi from '../src/cli.js';

console.log('brain-prime');
const name = hi();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

let i = 0;
while (i < 3) {
  const number = (Math.floor(Math.random() * 25) + 1);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  if ((number === 2 || number === 3 || number === 5 || number === 7) && answer.toLowerCase() === 'yes') {
    console.log(1);
    console.log('Correct!');
    i += 1;
  } else if ((number === 2 || number === 3 || number === 5 || number === 7) && answer.toLowerCase() === 'no') {
    console.log(2);
    console.log(`"${answer}" is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${name}!`);
    i = 0;
    break;
  } else if ((number % 2 !== 0 && number % 3 !== 0 && number % 4 !== 0 && number % 5 !== 0 && number % 6 !== 0 && number % 7 !== 0 && number % 8 !== 0 && number % 9 !== 0) && answer.toLowerCase() === 'yes') {
    console.log(3);
    console.log('Correct!');
    i += 1;
  } else if ((number % 2 === 0 || number % 3 === 0 || number % 4 === 0 || number % 5 === 0 || number % 6 === 0 || number % 7 === 0 || number % 8 === 0 || number % 9 === 0) && answer.toLowerCase() === 'no') {
    console.log(3);
    console.log('Correct!');
    i += 1;
  } else {
    console.log(4);
    console.log(`"${answer}" is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${name}!`);
    i = 0;
    break;
  }
}

if (i === 3) {
  console.log(`Congratulations, ${name}!`);
  i = 0;
}

import readlineSync from 'readline-sync';
import hi from '../src/cli.js';

console.log('brain-even');
const name = hi();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let i = 0;
while (i < 3) {
  const number = (Math.floor(Math.random() * 20) + 1);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  if ((answer.toLowerCase() === 'yes' && number % 2 === 0)) {
    console.log('Correct!');
    i += 1;
  } else if ((answer.toLowerCase() === 'no' && number % 2 !== 0)) {
    console.log('Correct!');
    i += 1;
  } else if ((answer.toLowerCase() === 'yes' && number % 2 !== 0)) {
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${name}!`);
    i = 0;
    break;
  } else if (answer.toLowerCase() === 'no' && number % 2 === 0) {
    console.log(`'no' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${name}!`);
    i = 0;
    break;
  } else {
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${name}!`);
    i = 0;
    break;
  }
}

if (i === 3) {
  console.log(`Congratulations, ${name}!`);
}

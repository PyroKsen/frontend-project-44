#!/usr/bin/env node

import readlineSync from 'readline-sync';
import gameLogic from '../../src/index.js';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const random = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const randomNumber = Math.floor(Math.random() * 20) + 1;
  console.log(`Question: ${randomNumber}`);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  const answer = readlineSync.question('Your answer?: ');
  gameLogic(correctAnswer, answer, random);
};

random();

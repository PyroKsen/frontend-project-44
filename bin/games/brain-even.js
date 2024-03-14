#!/usr/bin/env node

import readlineSync from 'readline-sync';
import gameLogic from '../../src/index.js';

const random = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const randomNumber = Math.floor(Math.random() * 20) + 1;
  console.log(`Question: ${randomNumber}`);
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  const answer = readlineSync.question('Your answer?: ');

  gameLogic(correctAnswer, answer, random);
};

random();

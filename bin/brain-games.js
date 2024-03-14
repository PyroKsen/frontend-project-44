import hi from '../src/cli.js';

const userName = hi();

const welcome = () => {
  console.log('Welcome to the Brain Games!');
  console.log(userName);
};

export default welcome;
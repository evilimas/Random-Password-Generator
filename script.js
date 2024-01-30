const characters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '~',
  '`',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '-',
  '+',
  '=',
  '{',
  '[',
  '}',
  ']',
  ',',
  '|',
  ':',
  ';',
  '<',
  '>',
  '.',
  '?',
  '/',
];

let passwordLength = 15;

//generate random character
function generateRandomCharecters() {
  return characters[Math.floor(Math.random() * characters.length)];
}

//generate random password from random characters
function generateRandomPasswords() {
  let randomPasswords = '';
  for (let i = 0; i < passwordLength; i++) {
    randomPasswords += generateRandomCharecters();
  }
  return randomPasswords;
}

//render input fields with random password when clicked the button

const generateBtn = document.getElementById('btn');
const passwordOne = document.getElementById('password-one');
const passwordTwo = document.getElementById('password-two');

generateBtn.addEventListener('click', function () {
  passwordOne.textContent = generateRandomPasswords();
  passwordTwo.textContent = generateRandomPasswords();
});
// copyn selected input

passwordOne.addEventListener('click', function () {
  navigator.clipboard.writeText(passwordOne.textContent);
});
passwordTwo.addEventListener('click', function () {
  navigator.clipboard.writeText(passwordTwo.textContent);
});

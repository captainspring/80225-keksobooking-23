const checkNumber = (number, sourceNumber) => (number > sourceNumber) ? Math.floor(number) : number;

const getRandomNumber = (min, max) => {
  let number;

  if (min > max) {
    number = Math.random() * (min - max + 1) + max;
    return checkNumber(number, min);
  }

  number = Math.random() * (max - min + 1) + min;
  return checkNumber(number, max);
};

// from MDN Math.random() page
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive
const getRandomInteger = (firstNumber, secondNumber) => {
  if (typeof firstNumber === 'number' && typeof secondNumber === 'number') {
    if (firstNumber >= 0 && secondNumber >= 0) {
      firstNumber = Math.ceil(firstNumber);
      secondNumber = Math.floor(secondNumber);

      return Math.floor(getRandomNumber(firstNumber, secondNumber));
    }
  }
};

// from Dr. Derek Austin’s article
// https://medium.com/swlh/how-to-round-to-a-certain-number-of-decimal-places-in-javascript-ed74c471c1b8
const getCoordinate = (firstNumber, secondNumber, decimalPlaces) => {
  if (typeof firstNumber === 'number' && typeof secondNumber === 'number' && typeof decimalPlaces === 'number') {
    if (firstNumber >= 0 && secondNumber >= 0) {
      const factorOfTen = Math.pow(10, decimalPlaces);
      const number = getRandomNumber(firstNumber, secondNumber);

      return Math.round(number * factorOfTen) / factorOfTen;
    }
  }
};

getRandomInteger(0, 134723);
getCoordinate(0, 134723, 6);

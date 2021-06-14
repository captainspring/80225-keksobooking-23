// from MDN Math.random() page
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive
const getRandomInteger = (min, max) => {
  if (typeof min === 'number' && typeof max === 'number') {
    if (min >= 0 && max >= 0) {
      min = Math.ceil(min);
      max = Math.floor(max);

      if (min > max) {
        const swap = max;
        max = min;
        min = swap;
      }

      const result = Math.random() * (max - min + 1) + min;

      return Math.floor(result);
    }
  }
};

export {getRandomInteger};

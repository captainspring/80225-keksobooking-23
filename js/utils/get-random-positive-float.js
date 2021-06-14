// from https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
const getRandomFloatNumber = (min, max, decimalPlaces) => {
  if (typeof min === 'number' && typeof max === 'number' && typeof decimalPlaces === 'number') {
    if (min >= 0 && max >= 0) {
      if (min > max) {
        const swap = max;
        max = min;
        min = swap;
      }

      const result = Math.random() * (max - min) + min;

      return result.toFixed(decimalPlaces);
    }
  }
};

export {getRandomFloatNumber};

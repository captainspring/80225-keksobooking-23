// source https://gist.github.com/realmyst/1262561
const CASES = [2, 0, 1, 1, 1, 2];

function declOfNum(number, titles) {
  return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : CASES[(number % 10 < 5) ? number % 10 : 5]];
}

export {declOfNum};

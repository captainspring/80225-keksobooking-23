//// Helper functions
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

//// Offers generator
const TITLES = [
  'Дворец под ваши нужды',
  'Уютная квартирка',
  'Надежный приют',
  'Для взыскательных хозяев',
  'Вы привыкли к комфорту и избалованы возможностями современной техники?',
  'Остров хорошего настроения',
  'Уют без стереотипов',
  'Квартира в двух уровнях — почти свой дом в центре',
  'Квартира будет в ВАШЕМ распоряжении',
  'Никто не ходит по Вашим головам (9/9 эт)',
];
const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];
const TIMES = [
  '12:00',
  '13:00',
  '14:00',
];
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const DESCRIPTIONS = [
  'Дух и атмосфера 80-х надолго задержались в этой квартире в 10-ти минутах пешком от авто и ж/д вокзалов. 1.5-спальная кровать, ТВ, библиотека содержит в себе произведения авторов эпохи социализма — Карла Маркса и Энгельса, Ленина и Маяковского, Ахматовой и Гумилева.',
  'Сдаю просторную однокомнатную квартиру с ремонтом и свежей мебелью в стиле 60-х.',
  'Однокомнатная квартира для любителей тяжелого рока в доме рядом с супермаркетом. Сосед — бас-гитарист группы, играет в составе своей группы с 20-00 до 03-00 за стенкой — в это время вы забудете о своем сне и получите великолепные впечатления от тяжелой музыки.',
  'Тихий зеленый район, очень спокойно, никто не грабит.',
  'Прекрасное состояние квартиры, можно войти и жить, ничего не делая.',
  'В каждой комнате разные потолки, в одной многоуровневые в виде сердца, в другой — натяжные, в коридоре — вообще произведение искусства. Эту квартиру нужно один раз увидеть, чем много раз слышать.',
  'Остаются мебель, бытовая техника. Могут остаться квартиранты.',
  'Красивая уютная с ремонтом квартирка, балкон плавно переходит в комнату.',
  'С балкона открывается прекрасный вид на парк и набережную. А налево можно и не смотреть (там стоит нефтеперерабатывающий завод).',
  'Рядом имеется рынок для комфортного проживания.',
];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const SIMILAR_OFFERS_COUNT = 10;

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const getRandomArray = (array) => {
  const randomArray = [];

  // eslint-disable-next-line id-length
  for (let i = 0; i < array.length; i++) {
    const newElement = getRandomArrayElement(array);

    if (i > 0) {
      const elementExists = randomArray.some((existingElement) => existingElement === newElement);

      if (elementExists) {
        break;
      } else {
        randomArray[i] = newElement;
      }
    } else {
      randomArray[i] = newElement;
    }
  }

  return randomArray;
};

const avatars = [];
const getAvatarsArray = () => {
  let number = 1;
  const twoDigit = 10;

  // eslint-disable-next-line id-length
  for (let i = 0; i < SIMILAR_OFFERS_COUNT; i++) {
    let avatar;

    if (number < twoDigit) {
      avatar = `img/avatars/user0${number}.png`;
      number++;
      avatars[i] = avatar;
    } else {
      avatar = `img/avatars/user${number}.png`;
      number++;
      avatars[i] = avatar;
    }
  }

  return avatars;
};

getAvatarsArray();

const createOffer = (index) => {
  const lat = getCoordinate(35.65000, 35.70000, 5);
  const lng = getCoordinate(139.70000, 139.80000, 5);

  let checkInTime = getRandomArrayElement(TIMES);
  const checkOutTime = getRandomArrayElement(TIMES);

  if (checkInTime < checkOutTime) {
    checkInTime = checkOutTime;
  }

  return {
    author: {
      avatar: avatars[index],
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: `${lat}, ${lng}`,
      price: getRandomInteger(1, 500000),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomInteger(1, 6),
      guests: getRandomInteger(1, 10),
      checkin: checkInTime,
      checkout: checkOutTime,
      features: getRandomArray(FEATURES),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getRandomArray(PHOTOS),
    },
    location: {
      lat: lat,
      lng: lng,
    },
  };
};

const similarOffers = new Array(SIMILAR_OFFERS_COUNT).fill(null).map((element, index) => createOffer(index));

similarOffers;

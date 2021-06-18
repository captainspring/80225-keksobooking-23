import {getRandomInteger, getRandomFloatNumber} from './utils/utils.js';

const AVATAR_DIGITS_QTY = 2;
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
const LAT_MIN = 35.65000;
const LAT_MAX = 35.70000;
const LAT_DECIMAL_PLACES = 5;
const LNG_MIN = 139.70000;
const LNG_MAX = 139.80000;
const LNG_DECIMAL_PLACES = 5;
const PRICE_MIN = 1;
const PRICE_MAX = 50000;
const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];
const ROOMS_MIN_QTY = 1;
const ROOMS_MAX_QTY = 6;
const GUESTS_MIN_QTY = 1;
const GUESTS_MAX_QTY = 10;
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

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const getRandomArray = (array) => {
  const randomArray = [];

  for (let i = 0; i < array.length; i++) {
    const newElement = getRandomArrayElement(array);

    if (i > 0) {
      const elementExists = randomArray.some((existingElement) => existingElement === newElement);

      if (elementExists) {
        break;
      } else {
        randomArray.push(newElement);
      }
    } else {
      randomArray.push(newElement);
    }
  }

  return randomArray;
};

const createOffer = (index) => {
  const avatarNumber = (index + 1).toString().padStart(AVATAR_DIGITS_QTY, '0');

  const lat = getRandomFloatNumber(LAT_MIN, LAT_MAX, LAT_DECIMAL_PLACES);
  const lng = getRandomFloatNumber(LNG_MIN, LNG_MAX, LNG_DECIMAL_PLACES);

  let checkInTime = getRandomArrayElement(TIMES);
  const checkOutTime = getRandomArrayElement(TIMES);

  if (checkInTime < checkOutTime) {
    checkInTime = checkOutTime;
  }

  return {
    author: {
      avatar: `img/avatars/user${avatarNumber}.png`,
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: `${lat}, ${lng}`,
      price: getRandomInteger(PRICE_MIN, PRICE_MAX),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomInteger(ROOMS_MIN_QTY, ROOMS_MAX_QTY),
      guests: getRandomInteger(GUESTS_MIN_QTY, GUESTS_MAX_QTY),
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

const createOffers = (count) => new Array(count).fill(null).map((element, index) => createOffer(index));

export {createOffers};

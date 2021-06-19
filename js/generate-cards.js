import {declOfNum} from './utils/utils.js';

const templateFragment = document.querySelector('#card').content;
const template = templateFragment.querySelector('.popup');
const fragment = document.createDocumentFragment();

const types = {
  'flat': 'Квартира',
  'bungalow': 'Бунгало',
  'house': 'Дом',
  'palace': 'Дворец',
  'hotel': 'Отель',
};

const getFeatures = (features, list) => {
  features.forEach((feature) => {
    const li = document.createElement('LI');
    li.classList.add('popup__feature');
    li.classList.add(`popup__feature--${feature}`);

    list.appendChild(li);
  });

  return list;
};

const getPhotos = (photos, photoTemplate, list) => {
  photos.forEach((photo) => {
    const item = photoTemplate.cloneNode(false);
    item.src = photo;
    list.appendChild(item);
  });

  return list;
};

const generateCards = (data) => {
  for (let i = 0; i < data.length; i++) {
    const card = template.cloneNode(true);
    const featuresListTemplate = card.querySelector('.popup__features').cloneNode(false);
    const photosListTemplate = card.querySelector('.popup__photos').cloneNode(false);

    const avatar = card.querySelector('.popup__avatar');
    const title = card.querySelector('.popup__title');
    const address = card.querySelector('.popup__text--address');
    const price = card.querySelector('.popup__text--price');
    const type = card.querySelector('.popup__type');
    const capacity = card.querySelector('.popup__text--capacity');
    const time = card.querySelector('.popup__text--time');
    const description = card.querySelector('.popup__description');
    const featuresList = card.querySelector('.popup__features');
    const photosList = card.querySelector('.popup__photos');
    const photoItem = card.querySelector('.popup__photo');

    const offer = data[i].offer;

    avatar.src = data[i].author.avatar;
    title.textContent = offer.title;
    address.textContent = offer.address;
    price.innerHTML = `${offer.price} <span>₽/ночь</span>`;
    type.textContent = types[offer.type];
    capacity.textContent = `${offer.rooms} ${declOfNum(offer.rooms, ['комната', 'комнаты', 'комнат'])} для ${offer.guests} ${declOfNum(offer.guests, ['гостя', 'гостей', 'гостей'])}`;
    time.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
    description.textContent = offer.description;
    card.replaceChild(getFeatures(offer.features, featuresListTemplate), featuresList);
    card.replaceChild(getPhotos(offer.photos, photoItem, photosListTemplate), photosList);

    fragment.appendChild(card);
  }

  return fragment;
};

export {generateCards};

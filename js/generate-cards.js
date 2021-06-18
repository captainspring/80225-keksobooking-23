const templateFragment = document.querySelector('#card').content;
const template = templateFragment.querySelector('.popup');
const fragment = document.createDocumentFragment();

const generateCards = (data) => {
  for (let i = 0; i < data.length; i++) {
    const card = template.cloneNode(true);
    const featureListTemplate = card.querySelector('.popup__features').cloneNode(false);
    const photosListTemplate = card.querySelector('.popup__photos');
    const photoItemTemplate = card.querySelector('.popup__photo').cloneNode(false);

    const avatar = card.querySelector('.popup__avatar');
    const title = card.querySelector('.popup__title');
    const address = card.querySelector('.popup__text--address');
    const price = card.querySelector('.popup__text--price');
    const type = card.querySelector('.popup__type');
    const capacity = card.querySelector('.popup__text--capacity');
    const time = card.querySelector('.popup__text--time');
    const featureItems = card.querySelectorAll('.popup__feature');
    const description = card.querySelector('.popup__description');
    const photosList = card.querySelector('.popup__photos').cloneNode(false);

    const offer = data[i].offer;

    const getType = (dataType) => {
      switch (dataType) {
        case 'flat': return 'Квартира';
        case 'bungalow': return 'Бунгало';
        case 'house': return 'Дом';
        case 'palace': return 'Дворец';
        case 'hotel': return 'Отель';
      }
    };

    const getRoomsWordEnding = () => {
      if (offer.rooms === 1) {
        return 'а';
      } else if (offer.rooms > 1 && offer.rooms < 5) {
        return 'ы';
      } else {
        return '';
      }
    };

    const getGuestsWordEnding = () => {
      if (offer.guests === 1) {
        return 'я';
      } else {
        return 'ей';
      }
    };

    const getFeatures = (features) => {
      for (const feature of features) {
        for (let j = 0; j < featureItems.length; j++) {
          const featureItem = featureItems[j];

          if (featureItem.classList[1] === `popup__feature--${feature}`) {
            featureListTemplate.appendChild(featureItem);
          }
        }
      }

      return featureListTemplate;
    };

    const getPhotos = (photos) => {
      for (const photo of photos) {
        const newItem = photoItemTemplate.cloneNode(true);
        newItem.src = photo;
        photosList.appendChild(newItem);
      }

      return photosList;
    };

    avatar.src = data[i].author.avatar;
    title.textContent = offer.title;
    address.textContent = offer.address;
    price.innerHTML = `${offer.price} <span>₽/ночь</span>`;
    type.textContent = getType(offer.type);
    capacity.textContent = `${offer.rooms} комнат${getRoomsWordEnding()} для ${offer.guests} гост${getGuestsWordEnding()}`;
    time.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
    description.textContent = offer.description;
    getFeatures(offer.features);
    card.replaceChild(getPhotos(offer.photos), photosListTemplate);

    fragment.appendChild(card);
  }

  return fragment;
};

export {generateCards};

import {createOffers} from './data.js';
import {generateCards} from './generate-cards.js';
import {activateForm} from './utils/activate-form.js';

const SIMILAR_OFFERS_COUNT = 1;

const form = document.querySelector('.ad-form');
const formElements = form.querySelectorAll('.ad-form__element, #avatar');
const filter = document.querySelector('.map__filters');
const filters = filter.querySelectorAll('.map__filter, .map__features');

const offers = createOffers(SIMILAR_OFFERS_COUNT);
const card = generateCards(offers);

document.querySelector('#map-canvas').appendChild(card);

activateForm('false', form, formElements);
activateForm('false', filter, filters);

activateForm('true', form, formElements);
activateForm('true', filter, filters);

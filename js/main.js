import {createOffers} from './data.js';
import {generateCards} from './generate-cards.js';

const SIMILAR_OFFERS_COUNT = 10;

const offers = createOffers(SIMILAR_OFFERS_COUNT);
const cards = generateCards(offers);
const firstOffer = cards.querySelector('.popup');

document.querySelector('#map-canvas').appendChild(firstOffer);

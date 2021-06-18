import {createOffers} from './data.js';
import {generateCards} from './generate-cards.js';

const SIMILAR_OFFERS_COUNT = 1;

const offers = createOffers(SIMILAR_OFFERS_COUNT);
const card = generateCards(offers);

document.querySelector('#map-canvas').appendChild(card);

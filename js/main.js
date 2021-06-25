import {createOffers} from './data.js';
import {generateCards} from './generate-card.js';
import {disableForm, enableForm} from './form.js';
import {disableFilters, enableFilters, showCard} from './map.js';

const SIMILAR_OFFERS_COUNT = 10;

const offers = createOffers(SIMILAR_OFFERS_COUNT);
const card = generateCards(offers[0]);

showCard(card);

disableForm();
disableFilters();

enableForm();
enableFilters();

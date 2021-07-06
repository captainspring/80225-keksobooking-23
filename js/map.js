
import {activateForm} from './utils/utils.js';

const map = document.querySelector('#map-canvas');
const filter = document.querySelector('.map__filters');
const filters = filter.querySelectorAll('.map__filter, .map__features');

const disableFilters = () => {
  activateForm(false, filter, filters);
};

const enableFilters = () => {
  activateForm(true, filter, filters);
};

const showCard = (card) => {
  map.appendChild(card);
};

export {disableFilters, enableFilters, showCard};

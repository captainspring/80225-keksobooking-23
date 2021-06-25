import {activateForm} from './utils/utils.js';

const form = document.querySelector('.ad-form');
const formElements = form.querySelectorAll('.ad-form__element, #avatar');
const filter = document.querySelector('.map__filters');
const filters = filter.querySelectorAll('.map__filter, .map__features');

const disableForm = () => {
  activateForm(false, form, formElements);
};

const enableForm = () => {
  activateForm(true, form, formElements);
};

const disableFilters = () => {
  activateForm(false, filter, filters);
};

const enableFilters = () => {
  activateForm(true, filter, filters);
};

export {disableForm, enableForm, disableFilters, enableFilters};

import {declOfNum, activateForm} from './utils/utils.js';

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE = 1000000;
const MAX_ROOMS = 100;

const form = document.querySelector('.ad-form');
const formElements = form.querySelectorAll('.ad-form__element, #avatar');
const filter = document.querySelector('.map__filters');
const filters = filter.querySelectorAll('.map__filter, .map__features');

const titleInput = form.querySelector('#title');
const priceInput = form.querySelector('#price');
const roomsQtyInput = form.querySelector('#room_number');
const guestsQtyInput = form.querySelector('#capacity');
const guestsQtyOptions = form.querySelectorAll('#capacity option');

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

titleInput.addEventListener('input', () => {
  const valueLength = titleInput.value.length;
  const valueTooShort = MIN_TITLE_LENGTH - valueLength;
  const valueTooLong = valueLength - MAX_TITLE_LENGTH;

  if (valueLength < MIN_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Ещё ${valueTooShort} ${declOfNum(valueTooShort, ['символ', 'символа', 'символов'])}`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Удалите ${valueTooLong} ${declOfNum(valueTooLong, ['лишний символ', 'лишних символа', 'лишних символов'])}`);
  } else {
    titleInput.setCustomValidity('');
  }

  titleInput.reportValidity();
});

priceInput.addEventListener('invalid', () => {
  const value = priceInput.value;

  if (value < 0) {
    priceInput.setCustomValidity('Цена за ночь не может быть меньше 0 рублей');
  } else if (value > MAX_PRICE) {
    priceInput.setCustomValidity(`Цена за ночь не может быть больше ${MAX_PRICE} рублей`);
  } else {
    priceInput.setCustomValidity('');
  }
});

const disableOptionsOnCondition = (options, minRefValue, maxRefValue) => {
  options.forEach((option) => parseInt(option.value, 10) !== minRefValue && parseInt(option.value, 10) <= maxRefValue ? option.disabled = false : option.disabled = true);
};

roomsQtyInput.addEventListener('change', () => {
  const roomsQty = parseInt(roomsQtyInput.value, 10);

  if (roomsQty < MAX_ROOMS) {
    guestsQtyInput.setCustomValidity(`В ${roomsQty} ${declOfNum(roomsQty, ['комнате', 'комнтах', 'комнатах'])} не может быть больше ${roomsQty} ${declOfNum(roomsQty, ['гостя', 'гостей', 'гостей'])} и меньше 1 гостя`);

    disableOptionsOnCondition(guestsQtyOptions, 0, roomsQty);
  } else {
    guestsQtyInput.setCustomValidity(`В ${roomsQty} комнатах гостей вообще не ждут`);
    guestsQtyOptions.forEach((option) => parseInt(option.value, 10) === 0 ? option.disabled = false : option.disabled = true);
  }
});

export {disableForm, enableForm, disableFilters, enableFilters};

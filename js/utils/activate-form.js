import {activateElementsInArray} from './activate-elements-in-array.js';

const activateForm = (isActive, form, elements) => {
  if (typeof isActive === 'string') {
    const formClass = form.classList[0];

    if (isActive === 'true') {
      if (form.classList.contains(`${formClass}--disabled`)) {
        form.classList.remove(`${formClass}--disabled`);
      }
    } else {
      form.classList.add(`${formClass}--disabled`);
    }

    activateElementsInArray(isActive, elements);
  }
};

export {activateForm};

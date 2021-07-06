const activateForm = (isActive, form, formElements) => {
  const formClass = form.classList[0];

  form.classList.toggle(`${formClass}--disabled`, !isActive);

  formElements.forEach((element) => element.disabled = !isActive);
};

export {activateForm};

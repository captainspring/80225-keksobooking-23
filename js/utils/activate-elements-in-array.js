const activateElementsInArray = (isActive, array) => {
  if (typeof isActive === 'string') {
    if (isActive === 'true') {
      array.forEach((element) => {
        if (element.hasAttribute('disabled')) {
          element.removeAttribute('disabled');
        }
      });
    } else {
      array.forEach((element) => {
        element.setAttribute('disabled', '');
      });
    }
  }
};

export {activateElementsInArray};

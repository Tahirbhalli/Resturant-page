/* eslint-disable import/prefer-default-export */
const Div = (id = '', classes = '', data = '') => {
  const div = document.createElement('div');
  div.id = id;
  div.classList = classes;
  if (data !== '') {
    div.setAttribute('data-ride', data);
  }
  return div;
};
export { Div };
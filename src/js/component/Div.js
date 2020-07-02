/* eslint-disable import/prefer-default-export */
const Div = (id = '', classes = '') => {
  const div = document.createElement('div');
  div.id = id;
  div.classList = classes;
  return div;
};
export { Div };
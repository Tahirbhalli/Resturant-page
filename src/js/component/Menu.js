/* eslint-disable import/prefer-default-export */
import { Card } from './Card';
import { Div } from './Div';

const Menu = (items) => {
  const body = Div('menu', 'container-fluid row pt-5');
  items.forEach(element => {
    body.appendChild(Card(element[0], element[1]));
  });
  return body;
};
export { Menu };
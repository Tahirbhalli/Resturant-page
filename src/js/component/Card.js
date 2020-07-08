/* eslint-disable global-require */
/* eslint-disable import/prefer-default-export */
import { Div } from './Div';

const Card = (title, image) => {
  const card = Div('', 'card col-lg-4 col-md-6 col-12');
  // card.style.width = '400px';
  const body = Div('', 'card-body');
  const h4 = document.createElement('h2');
  h4.innerText = title;
  h4.classList = 'card-title text-capitalize';
  body.appendChild(h4);
  const img = document.createElement('img');
  img.classList = 'card-img-bottom';
  // eslint-disable-next-line import/no-dynamic-require
  img.src = require(`../../img/${image}`);
  card.appendChild(body);
  card.appendChild(img);
  return card;
};
export { Card };
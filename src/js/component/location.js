/* eslint-disable import/prefer-default-export */
import { Div } from './Div';

export const location = () => {
  const root = Div('Location');
  const img = document.createElement('img');
  // eslint-disable-next-line global-require
  img.src = require('../../img/map.jpg');
  img.style.width = '100%';
  root.style.height = '300px';
  img.style.height = '300px';
  root.appendChild(img);
  return root;
};
/* eslint-disable import/no-dynamic-require */
/* eslint-disable import/prefer-default-export */
import { Div } from './Div';

const Slider = (images) => {
  const div = Div('myCarousel', 'carousel slide', 'carousel');
  const sec = Div('', 'carousel-inner');
  let i = 0;
  let d3;
  images.forEach(element => {
    if (i === 0) { d3 = Div('', 'carousel-item active'); } else { d3 = Div('', 'carousel-item'); }
    i += 1;
    const img = document.createElement('img');
    // eslint-disable-next-line global-require
    img.src = require(`../../img/${element}`);
    img.style.width = '100%';
    d3.appendChild(img);
    sec.appendChild(d3);
  });
  const a1 = document.createElement('a');
  a1.classList = 'left carousel-control';
  a1.href = '#myCarousel';
  a1.setAttribute('data-slide', 'prev');
  const s1 = document.createElement('span');
  s1.classList = 'glyphicon glyphicon-chevron-left';
  const s2 = document.createElement('span');
  s2.classList = 'sr-only';
  s2.innerText = 'Previous';
  a1.appendChild(s1);
  a1.appendChild(s2);
  div.appendChild(sec);
  div.appendChild(a1);
  return div;
};
export { Slider };

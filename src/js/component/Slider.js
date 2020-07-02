/* eslint-disable import/prefer-default-export */
import { Div } from './Div';

const Slider = (images) => {
  const div = Div('carouselExampleSlidesOnly', 'carousel slide');
  const sec = Div('', 'carousel-inner');
  images.forEach(element => {
    const d3 = Div('', 'carousel-item active');
    const img = document.createElement('img');
    img.src = require(`../../img/${element}`);
    d3.appendChild(img);
    sec.appendChild(d3);
  });
  div.appendChild(sec);
  return div;
};
export { Slider };
{ /* <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="..." alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide">
    </div>
  </div>
</div> */ }
/* eslint-disable import/prefer-default-export */
import { Navbar } from './component/Navbar';
import { Slider } from './component/Slider';
import { Menu } from './component/Menu';

const App = () => {
  const div = document.createElement('div');
  div.appendChild(Navbar(['menu', 'contact', 'Location']));
  div.appendChild(Slider(['cover.jpg', 's3.jpeg', 's4.jpeg']));
  div.appendChild(Menu([['bindi', 'b.png'], ['bindi', 'b.png'], ['bindi', 'b.png']]));
  return div;
};

export { App };
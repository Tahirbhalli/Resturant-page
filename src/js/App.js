/* eslint-disable import/prefer-default-export */
import { Navbar } from './component/Navbar';
import { Slider } from './component/Slider';

const App = () => {
  const div = document.createElement('div');
  div.appendChild(Navbar(['menu', 'contact', 'Location']));
  div.appendChild(Slider(['cover.jpg', 's3.jpeg', 's4.jpeg']));

  return div;
};

export { App };
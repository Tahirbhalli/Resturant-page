/* eslint-disable import/prefer-default-export */
import { Navbar } from './component/Navbar';
import { Slider } from './component/Slider';
import { Menu } from './component/Menu';
import { location } from './component/location';

const App = () => {
  const div = document.createElement('div');
  div.appendChild(Navbar(['menu', 'contact', 'Location']));
  div.appendChild(Slider(['cover.jpg', 's3.jpeg', 's4.jpeg']));
  div.appendChild(Menu([['Chicken Kharai', 's1.jpeg'], ['khabab', 's2.jpg'], ['Makroni', 's3.jpeg']]));
  div.appendChild(location());
  return div;
};

export { App };
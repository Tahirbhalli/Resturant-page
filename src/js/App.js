/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from './component/Navbar';
import { Slider } from './component/Slider';

const App = () => {
  const div = document.createElement('div');
  div.appendChild(Navbar(['menu', 'contact', 'Location']));
  div.appendChild(Slider(['s1.jpeg', 's2.jpg', 's3.jpeg', 's4.jpeg']));

  return div;
};

export { App };
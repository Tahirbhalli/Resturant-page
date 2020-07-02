import { App } from './js/App';
import './style/main.scss';

const index = () => {
  const main = document.querySelector('main');
  main.appendChild(App());
};
index();
import { App } from './js/App';
import './style/main.scss';
import { Footer } from './js/component/Footer';

const index = () => {
  const main = document.querySelector('main');
  main.appendChild(App());
  const body = document.querySelector('body');
  body.appendChild(Footer());
};
index();
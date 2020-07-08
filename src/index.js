import { App } from './js/App';
import './style/main.scss';
import { Footer } from './js/component/Footer';

const index = () => {
  const main = document.querySelector('#content');
  main.appendChild(App());
  document.body.appendChild(Footer());
};
index();
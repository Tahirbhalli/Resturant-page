import { App } from './js/App';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';

const index = () => {
  const div = document.createElement('div');
  const body = document.querySelector('body');
  div.appendChild(App());
  body.appendChild(div);
};
index();
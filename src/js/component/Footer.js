/* eslint-disable import/prefer-default-export */
import { Contact } from './Contact';

const Footer = () => {
  const foot = document.createElement('footer');
  foot.id = 'contact';
  foot.style.background = 'orange';
  foot.style.width = '100%';
  foot.style.height = 'auto';
  foot.classList = 'text-center font-weight-bold p-3';
  foot.innerText = 'Contact';
  foot.appendChild(Contact(['name', 'email', 'msg']));
  return foot;
};
export { Footer };
/* eslint-disable import/prefer-default-export */

import { Div } from './Div';

const Contact = (items) => {
  const form = document.createElement('form');
  form.classList = 'w-50 pt-4';
  form.style.margin = '0 auto';
  items.forEach(element => {
    const temp = Div('', 'form-group');
    const inpu = document.createElement('input');
    inpu.type = element;
    inpu.placeholder = `Enter the ${element}`;
    inpu.required = true;
    inpu.classList = 'form-control text-center';
    temp.appendChild(inpu);
    form.appendChild(temp);
  });
  const btn = document.createElement('button');
  btn.classList = 'btn btn-primary';
  btn.innerText = 'Send message';
  btn.type = 'submit';
  const temp = Div('', 'form-group');
  temp.appendChild(btn);
  form.appendChild(temp);

  return form;
};

export { Contact };
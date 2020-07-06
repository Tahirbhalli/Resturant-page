/* eslint-disable import/prefer-default-export */
const createlinks = (link) => {
  const li = document.createElement('li');
  li.classList = 'nav-item';
  const a = document.createElement('a');
  a.classList = 'nav-link btn';
  a.onclick = () => {
    const elmnt = document.getElementById(link);
    elmnt.scrollIntoView();
  };
  a.innerText = link;
  li.appendChild(a);
  return li;
};
export const Navbar = (elements) => {
  const nav = document.createElement('ul');
  nav.classList = 'nav font-weight-bold bg-dark text-capitalize';
  nav.style = 'justify-content: center;';
  elements.forEach(element => {
    nav.appendChild(createlinks(element));
  });
  return nav;
};

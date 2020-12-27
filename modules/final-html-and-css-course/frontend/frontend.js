export const createFrontend = () => {
  const main = document.createElement('main');
  const h1 = document.createElement('h1');
  h1.innerText = '¿Qué hace un front?';
  main.appendChild(h1);
  return main;
};

export const createFinalHtmlAndCssCourse = () => {
  const main = document.createElement('main');
  const h1 = document.createElement('h1');
  h1.innerText = 'Funciona!';
  main.appendChild(h1);
  return main;
};

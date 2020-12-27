import { createList } from '../../elements/index.js';

export const createFinalHtmlAndCssCourse = ({ router, routeId }) => {
  const main = document.createElement('main');
  const ul = createList({
    data: router.getRoutes.filter((route) => route.father === routeId),
    onItemClick: (path) => router.goTo({ url: path() }),
  });
  main.appendChild(ul);
  return main;
};

import { List } from '../../elements/index.js';

export const Root = ({ router, routeId }) => {
  const main = document.createElement('main');
  main.appendChild(List({
    data: router.getRoutes.filter((route) => route.father === routeId),
    onItemClick: (path) => router.goTo({ url: path() }),
  }));
  return main;
};

import { createLink } from '../../elements/index.js';

export const createRoot = ({ router, routeId }) => {
  const main = document.createElement('main');
  const ul = document.createElement('ul');
  router.getRoutes.filter((route) => route.father === routeId)
    .forEach(({ title, path }) => {
      ul.appendChild(createLink({
        title,
        onClick: () => {
          router.goTo(path());
        },
      }));
    });
  main.appendChild(ul);
  return main;
};

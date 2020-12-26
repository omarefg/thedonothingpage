/* eslint-disable import/extensions */
import Router from './routes/Router.js';
import routes from './routes/routes.js';

const router = new Router(routes);
const routesContainer = document.getElementById('routes');

const createLink = ({ title, onClick }) => {
  const li = document.createElement('li');
  const button = document.createElement('button');
  button.innerText = title;
  button.addEventListener('click', onClick);
  li.appendChild(button);
  return li;
};

routes.forEach(({ title, path }) => {
  routesContainer.appendChild(createLink({
    title,
    onClick: () => {
      router.loadRoute(path);
    },
  }));
});

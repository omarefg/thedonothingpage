import Miru from '@omarefg/miru';
import { Accordion } from '../accordion/Accordion';
import { HomeLink } from '../homeLink/HomeLink';
import styles from './Sidebar.module.scss';

function View() {
  const { routes, router } = this.props;

  const firstLevel = routes.filter(({ father }) => father !== null && father === 0);
  const children = routes.filter(({ father }) => father !== null);

  const container = document.createElement('nav');
  container.classList.add(styles.container);
  container.appendChild(HomeLink({ router }));

  firstLevel.forEach(({ title, id }) => {
    if (children.filter(({ father }) => father === id).length) {
      container.appendChild(Accordion({
        title,
        onChildClick: (path) => router.goTo({ url: path() }),
        children: children.filter(({ father }) => father === id),
      }));
    }
    /**
     * @TODO create list item for first level without children :)
     */
  });

  return container;
}

export const SideBar = (props) => new Miru(View, {
  props,
  defaultProps: {
    routes: [],
    router: null,
  },
});

import { Component } from '../../decorators';
import { Accordion } from '../accordion/Accordion';
import { HomeLink } from '../homeLink/HomeLink';
import styles from './Sidebar.module.scss';

function SideBarComponent(props) {
  const { routes, router } = this.getProps(props, this.defaultProps);

  const firstLevel = routes.filter(({ father }) => father !== null && father === '0');
  const children = routes.filter(({ father }) => father !== null);

  const container = document.createElement('nav');
  container.classList.add(styles.container);
  container.appendChild(HomeLink({ router }));

  firstLevel.forEach(({ title, id }) => {
    container.appendChild(Accordion({
      title,
      onChildClick: (path) => router.goTo({ url: path() }),
      children: children.filter(({ father }) => father === id),
    }));
  });

  return container;
}

export const SideBar = new Component(SideBarComponent, {
  defaultProps: {
    routes: [],
    router: null,
  },
});

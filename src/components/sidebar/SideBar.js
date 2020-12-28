import { Component } from '../../decorators';
import { Accordion } from '../accordion/Accordion';
import { HomeLink } from '../homeLink/HomeLink';
import { Icon } from '../icon/Icon';
import styles from './Sidebar.module.scss';

const breakpointNumber = Number(styles.breakpointMedium.replace('px', ''));

const handleSidebarResize = (container) => {
  window.addEventListener('resize', () => {
    const { innerWidth: width } = window;
    if (width < breakpointNumber) {
      container.classList.add(styles.hide);
      container.classList.remove(styles.show);
    } else {
      container.classList.add(styles.show);
      container.classList.remove(styles.hide);
    }
  });
};

function SideBarComponent(props) {
  const { routes, router } = this.getProps(props, this.defaultProps);

  const firstLevel = routes.filter(({ father }) => father !== null && father === '0');
  const children = routes.filter(({ father }) => father !== null);

  const container = document.createElement('nav');
  container.classList.add(styles.container);
  container.appendChild(HomeLink({ router }));
  container.appendChild(Icon({ className: 'devicon-babel-plain colored' }));

  firstLevel.forEach(({ title, id }) => {
    container.appendChild(Accordion({
      title,
      onChildClick: (path) => router.goTo({ url: path() }),
      children: children.filter(({ father }) => father === id),
    }));
  });

  handleSidebarResize(container);

  return container;
}

export const SideBar = new Component(SideBarComponent, {
  defaultProps: {
    routes: [],
    router: null,
  },
});

import { Accordion } from '../accordion/Accordion';
import { Link } from '../link/Link';
import Logo from '../../assets/logo.png';
import styles from './Sidebar.module.scss';

function HomeLink({ router }) {
  const container = document.createElement('div');
  container.classList.add(styles.homeLinkContainer);
  const logo = document.createElement('img');
  const title = document.createElement('code');
  const link = Link({ onClick: () => router.goTo({ url: '/' }), children: container });
  logo.src = Logo;
  logo.width = 48;
  title.innerText = 'The do nothing page';
  container.appendChild(logo);
  container.appendChild(title);
  return link;
}

export function SideBar({ routes, router }) {
  const container = document.createElement('nav');
  container.classList.add(styles.container);
  const firstLevel = routes.filter(({ father }) => father !== null && father === '0');
  const children = routes.filter(({ father }) => father !== null);
  const homeLink = HomeLink({ router });

  window.addEventListener('resize', () => {
    const { innerWidth: width } = window;
    const breakpointNumber = Number(styles.breakpointMedium.replace('px', ''));
    if (width < breakpointNumber) {
      container.classList.add(styles.hide);
      container.classList.remove(styles.show);
    } else {
      container.classList.add(styles.show);
      container.classList.remove(styles.hide);
    }
  });

  container.appendChild(homeLink);

  firstLevel.forEach(({ title, id }) => {
    container.appendChild(Accordion({
      title,
      onChildClick: (path) => router.goTo({ url: path() }),
      children: children.filter(({ father }) => father === id),
    }));
  });

  return container;
}

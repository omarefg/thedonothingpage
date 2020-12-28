import { Component } from '../../decorators';
import Logo from '../../assets/logo.png';
import { Link } from '../link/Link';
import styles from './HomeLink.module.scss';

function HomeLinkComponent(props) {
  const {
    router,
    titleText,
    logoSrc,
    logoWidth,
    url,
  } = this.getProps(props, this.defaultProps);

  const container = document.createElement('div');
  const logo = document.createElement('img');
  const title = document.createElement('code');

  container.classList.add(styles.homeLinkContainer);

  logo.src = logoSrc;
  logo.width = logoWidth;

  title.innerText = titleText;

  container.appendChild(logo);
  container.appendChild(title);

  return Link({ onClick: () => router.goTo({ url }), children: container });
}

export const HomeLink = new Component(HomeLinkComponent, {
  defaultProps: {
    router: null,
    titleText: 'The do nothing page',
    logoSrc: Logo,
    logoWidth: 48,
    url: '/',
  },
});

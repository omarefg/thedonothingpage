import { Component } from '../../decorators';
import LogoLeftside from '../../assets/logoLeftSide.png';
import LogoRightSide from '../../assets/logoRightSide.png';
import { Link } from '../link/Link';
import styles from './HomeLink.module.scss';

function HomeLinkComponent(props) {
  const {
    router,
    titleText,
    logoWidth,
    url,
    logoLeftsideSrc,
    logoRightSideSrc,
  } = this.getProps(props, this.defaultProps);

  const container = document.createElement('div');
  const logoLeftside = document.createElement('img');
  const logoRightSide = document.createElement('img');
  const title = document.createElement('code');

  container.classList.add(styles.homeLinkContainer);

  logoLeftside.src = logoLeftsideSrc;
  logoLeftside.width = logoWidth;

  logoRightSide.src = logoRightSideSrc;
  logoRightSide.width = logoWidth;

  title.innerText = titleText;

  container.appendChild(logoLeftside);
  container.appendChild(title);
  container.appendChild(logoRightSide);

  return Link({ onClick: () => router.goTo({ url }), children: container });
}

export const HomeLink = new Component(HomeLinkComponent, {
  defaultProps: {
    router: null,
    titleText: 'The do nothing page',
    logoWidth: 16,
    url: '/',
    logoLeftsideSrc: LogoLeftside,
    logoRightSideSrc: LogoRightSide,
  },
});

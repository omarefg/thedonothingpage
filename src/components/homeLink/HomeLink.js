import { Component } from '../../decorators';
import LogoLeftside from '../../assets/images/logoLeftSide.png';
import LogoRightSide from '../../assets/images/logoRightSide.png';
import { Link } from '../link/Link';
import styles from './HomeLink.module.scss';

function View() {
  const {
    router,
    titleText,
    logoWidth,
    url,
    logoLeftsideSrc,
    logoRightSideSrc,
  } = this.props;

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

/**
 *
 * @param {{
 *  router: {},
 *  titleText: string,
 *  logoWidth: number,
 *  url: string,
 *  logoLeftsideSrc: string,
 *  logoRightSideSrc: string
 * }} props
 * @author Omar Flores <dev@omarefg.com>
 */
export const HomeLink = (props) => new Component(View, {
  props,
  defaultProps: {
    router: null,
    titleText: 'The do nothing page',
    logoWidth: 16,
    url: '/',
    logoLeftsideSrc: LogoLeftside,
    logoRightSideSrc: LogoRightSide,
  },
});

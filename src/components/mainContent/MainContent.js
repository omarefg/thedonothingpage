import { Component } from '../../decorators';
import styles from './MainContent.modules.scss';

const breakpointNumber = Number(styles.breakpointMedium.replace('px', ''));

const handleMainContentResize = (container) => {
  window.addEventListener('resize', () => {
    const { innerWidth: width } = window;
    if (width < breakpointNumber) {
      container.classList.add(styles.full);
    } else {
      container.classList.remove(styles.full);
    }
  });
};

function MainContentComponent() {
  const main = document.createElement('main');
  main.classList.add(styles.container);
  handleMainContentResize(main);
  return main;
}

export const MainContent = new Component(MainContentComponent, {
  defaultProps: {},
});

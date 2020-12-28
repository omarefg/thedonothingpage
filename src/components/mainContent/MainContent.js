import { Component } from '../../decorators';
import styles from './MainContent.modules.scss';

function MainContentComponent() {
  const main = document.createElement('main');
  main.classList.add(styles.container);
  return main;
}

export const MainContent = new Component(MainContentComponent, {
  defaultProps: {},
});

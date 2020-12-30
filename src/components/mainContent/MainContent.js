import Miru from '@omarefg/miru';
import styles from './MainContent.modules.scss';

function View() {
  const main = document.createElement('main');
  main.classList.add(styles.container);
  return main;
}

export const MainContent = (props) => new Miru(View, {
  props,
  defaultProps: {},
});

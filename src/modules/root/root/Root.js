import Miru from '@omarefg/miru';
import styles from './Root.module.scss';

function View() {
  const div = document.createElement('div');
  return div;
}

export const Root = (props) => new Miru(View, {
  props,
  defaultProps: {},
});

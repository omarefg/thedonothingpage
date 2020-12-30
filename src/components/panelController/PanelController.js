import Miru from '@omarefg/miru';
import styles from './PanelController.module.scss';

function View() {
  const { onClick } = this.props;
  const panel = document.createElement('div');
  panel.classList.add(styles.panel);
  panel.addEventListener('click', () => {
    document.body.removeChild(panel);
    onClick();
  });
  return panel;
}

export const PanelController = (props) => new Miru(View, {
  props,
  defaultProps: {
    onClick: () => {},
  },
});

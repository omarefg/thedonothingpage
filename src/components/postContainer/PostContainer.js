import Miru from '@omarefg/miru';
import style from './PostContainer.module.scss';

function View() {
  const { innerHTML } = this.props;
  const container = document.createElement('div');
  container.classList.add(style.postContainer);
  container.innerHTML = innerHTML;
  return container;
}

export const PostContainer = (props) => new Miru(View, {
  props,
  defaultProps: {
    innerHTML: '',
  },
});

import Miru from '@omarefg/miru';
import style from './PostImage.module.scss';

function View() {
  const { src, width, height } = this.props;
  const container = document.createElement('figure');
  const img = document.createElement('img');

  img.src = src;
  if (width) {
    img.style.width = width;
  }
  if (height) {
    img.style.height = height;
  }

  container.classList.add(style.container);
  img.classList.add(style.image);

  container.appendChild(img);

  return container;
}

/**
 *
 * @param {{
 *  src: string,
 *  width: string,
 *  height: string
 * }} props
 */
export const PostImage = (props) => new Miru(View, {
  props,
  defaultProps: {
    src: '',
    width: null,
    height: null,
  },
});

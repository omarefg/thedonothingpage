import { Component } from '../../decorators';
import style from './PostImage.module.scss';

function View() {
  const { src } = this.props;
  const container = document.createElement('figure');
  const img = document.createElement('img');

  img.src = src;

  container.classList.add(style.container);
  img.classList.add(style.image);

  container.appendChild(img);

  return container;
}

/**
 *
 * @param {{
 *  src: string
 * }} props
 */
export const PostImage = (props) => new Component(View, {
  props,
  defaultProps: {
    src: '',
  },
});

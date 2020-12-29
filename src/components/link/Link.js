import { Component } from '../../decorators';

function View() {
  const {
    title,
    onClick,
    children,
    classList,
  } = this.props;

  const a = document.createElement('a');
  a.classList.add(...classList);

  if (children) {
    a.appendChild(children);
  } else {
    a.innerText = title;
  }

  a.addEventListener('click', onClick);

  return a;
}

export const Link = (props) => new Component(View, {
  props,
  defaultProps: {
    title: '',
    onClick: () => {},
    children: null,
    classList: [],
  },
});

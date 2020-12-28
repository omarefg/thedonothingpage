import { Component } from '../../decorators';

function LinkComponent(props) {
  const { title, onClick, children } = this.getProps(props, this.defaultProps);
  const a = document.createElement('a');
  if (children) {
    a.appendChild(children);
  } else {
    a.innerText = title;
  }
  a.addEventListener('click', onClick);
  return a;
}

export const Link = new Component(LinkComponent, {
  defaultProps: {
    title: '',
    onClick: () => {},
    children: null,
  },
});

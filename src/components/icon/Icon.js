import { Component } from '../../decorators';

function IconComponent(props) {
  const icon = document.createElement('i');
  const { size, className } = this.getProps(props, this.defaultProps);
  icon.style.fontSize = size;
  icon.className = className;

  return icon;
}

export const Icon = new Component(IconComponent, {
  defaultProps: {
    className: '',
    size: '2rem',
  },
});

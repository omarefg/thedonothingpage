import { Component } from '../../decorators';

function View() {
  const { size, className } = this.props;
  const icon = document.createElement('i');
  icon.style.fontSize = size;
  icon.className = className;

  return icon;
}

export const Icon = (props) => new Component(View, {
  props,
  defaultProps: {
    className: '',
    size: '2rem',
  },
});

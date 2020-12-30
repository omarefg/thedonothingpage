import { Component } from '../../../decorators';

function View() {
  const div = document.createElement('div');
  return div;
}

export const Queues = (props) => new Component(View, {
  props,
  defaultProps: {},
});

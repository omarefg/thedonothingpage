import Miru from '@omarefg/miru';

function View() {
  const div = document.createElement('div');
  return div;
}

export const Stacks = (props) => new Miru(View, {
  props,
  defaultProps: {},
});

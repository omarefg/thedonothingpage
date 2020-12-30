import Miru from '@omarefg/miru';

function View() {
  const div = document.createElement('div');
  return div;
}

export const Root = (props) => new Miru(View, {
  props,
  defaultProps: {},
});

import Miru from '@omarefg/miru';
import { PostContainer } from '../../../components';

function View() {
  return PostContainer({
    innerHTML: `
      <h1>Hierarchy</h1>
    `,
  });
}

export const Hierarchy = (props) => new Miru(View, {
  props,
  defaultProps: {},
});

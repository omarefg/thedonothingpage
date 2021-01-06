import Miru from '@omarefg/miru';
import { PostContainer } from '../../../components';

function View() {
  return PostContainer({
    innerHTML: `
      <h1>Graphs</h1>
    `,
  });
}

export const Graphs = (props) => new Miru(View, {
  props,
  defaultProps: {},
});

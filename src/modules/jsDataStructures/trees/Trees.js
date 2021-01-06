import Miru from '@omarefg/miru';
import { PostContainer } from '../../../components';

function View() {
  return PostContainer({
    innerHTML: `
      <h1>Trees</h1>
    `,
  });
}

export const Trees = (props) => new Miru(View, {
  props,
  defaultProps: {},
});

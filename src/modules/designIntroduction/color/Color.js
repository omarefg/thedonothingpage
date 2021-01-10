import Miru from '@omarefg/miru';
import { PostContainer } from '../../../components';

function View() {
  return PostContainer({
    innerHTML: `
      <h1>Color</h1>
    `,
  });
}

export const Color = (props) => new Miru(View, {
  props,
  defaultProps: {},
});

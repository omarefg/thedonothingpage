import Miru from '@omarefg/miru';
import { PostContainer } from '../../../components';

function View() {
  return PostContainer({
    innerHTML: `
      <h1>Composition</h1>
    `,
  });
}

export const Composition = (props) => new Miru(View, {
  props,
  defaultProps: {},
});

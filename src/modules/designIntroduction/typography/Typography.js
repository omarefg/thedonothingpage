import Miru from '@omarefg/miru';
import { PostContainer } from '../../../components';

function View() {
  return PostContainer({
    innerHTML: `
      <h1>Typography</h1>
    `,
  });
}

export const Typography = (props) => new Miru(View, {
  props,
  defaultProps: {},
});

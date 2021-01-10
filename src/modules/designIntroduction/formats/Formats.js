import Miru from '@omarefg/miru';
import { PostContainer } from '../../../components';

function View() {
  return PostContainer({
    innerHTML: `
      <h1>Formats</h1>
    `,
  });
}

export const Formats = (props) => new Miru(View, {
  props,
  defaultProps: {},
});

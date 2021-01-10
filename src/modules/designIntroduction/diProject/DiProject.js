import Miru from '@omarefg/miru';
import { PostContainer } from '../../../components';

function View() {
  return PostContainer({
    innerHTML: `
      <h1>DiProject</h1>
    `,
  });
}

export const DiProject = (props) => new Miru(View, {
  props,
  defaultProps: {},
});

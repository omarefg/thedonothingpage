import Miru from '@omarefg/miru';
import { PostContainer } from '../../../components';

function View() {
  return PostContainer({
    innerHTML: `
      <h1>DiRoutes</h1>
    `,
  });
}

export const DiRoutes = (props) => new Miru(View, {
  props,
  defaultProps: {},
});

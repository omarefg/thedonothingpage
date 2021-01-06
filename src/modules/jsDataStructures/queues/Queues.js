import Miru from '@omarefg/miru';
import { PostContainer } from '../../../components';

function View() {
  return PostContainer({
    innerHTML: `
      <h1>Queues</h1>
    `,
  });
}

export const Queues = (props) => new Miru(View, {
  props,
  defaultProps: {},
});

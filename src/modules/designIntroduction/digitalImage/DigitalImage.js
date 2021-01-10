import Miru from '@omarefg/miru';
import { PostContainer } from '../../../components';

function View() {
  return PostContainer({
    innerHTML: `
      <h1>DigitalImage</h1>
    `,
  });
}

export const DigitalImage = (props) => new Miru(View, {
  props,
  defaultProps: {},
});

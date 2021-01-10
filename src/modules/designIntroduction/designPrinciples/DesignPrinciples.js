import Miru from '@omarefg/miru';
import { PostContainer } from '../../../components';

function View() {
  return PostContainer({
    innerHTML: `
      <h1>DesignPrinciples</h1>
    `,
  });
}

export const DesignPrinciples = (props) => new Miru(View, {
  props,
  defaultProps: {},
});

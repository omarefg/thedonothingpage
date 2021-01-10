import Miru from '@omarefg/miru';
import { PostContainer } from '../../../components';

function View() {
  return PostContainer({
    innerHTML: `
      <h1>IntroductionToDesign</h1>
    `,
  });
}

export const IntroductionToDesign = (props) => new Miru(View, {
  props,
  defaultProps: {},
});

import Miru from '@omarefg/miru';
import { PostContainer } from '../../../components';

function View() {
  return PostContainer({
    innerHTML: `
    <h1>Linked List</h1>
  `,
  });
}

export const LinkedList = (props) => new Miru(View, {
  props,
  defaultProps: {},
});

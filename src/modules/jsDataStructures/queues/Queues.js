import Miru from '@omarefg/miru';
import { PostContainer, PostImage, CodeBlock } from '../../../components';
import { filterClassCodeBlock, filterCodeBlock } from '../../../utils/filters';
import image1 from './assets/1.png';
import image2 from './assets/2.png';
import queue from './queuecode';

function View() {
  return PostContainer({
    innerHTML: `
      <h1>Queues</h1>
      <p>Es una estructura de datos muy similar a los stacks pero con una ligera diferencia.</p>
      ${PostImage({ src: image1 }).outerHTML}
      <p>En el queue el primero en entrar es el primero en salir.</p>
      <p>Veamos que métodos nos permiten manipular esta estructura de datos:</p>
      ${PostImage({ src: image2 }).outerHTML}
      <h2>Code time!</h2>
      ${CodeBlock({ code: filterClassCodeBlock(filterCodeBlock(queue[1].toString())) }).outerHTML}
      ${CodeBlock({ code: filterCodeBlock(queue[2].toString(), 2) }).outerHTML}
    `,
  });
}

export const Queues = (props) => new Miru(View, {
  props,
  defaultProps: {},
});

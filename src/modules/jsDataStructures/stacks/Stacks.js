/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-webpack-loader-syntax */
import Miru from '@omarefg/miru';
import { PostContainer, PostImage, CodeBlock } from '../../../components';
import stack from '!./stackscode';
import image1 from './assets/1.png';
import image2 from './assets/2.png';
import { filterClassCodeBlock, filterCodeBlock } from '../../../utils/filters';

function View() {
  return PostContainer({
    innerHTML: `
      <h1>Stacks</h1>
      <p>Para entender un poco la lógica detrás de los stacks veamos el siguiente ejemplo:</p>
      ${PostImage({ src: image1 }).outerHTML}
      <p>Volvamos al ejemplo de la ropa, la forma en la que acomodas la ropa se asemeja mucho a la estructura de un stack, se apila una prenda encima de otra.</p>
      <p>La razón por la cual los stacks se representan de esta manera es por su más grande característica, LIFO, Last In First Out, que quiere decir que el último dato en entrar es el primero en salir.</p>
      <p>Como toda estructura de datos también cuenta con sus métodos</p>
      ${PostImage({ src: image2 }).outerHTML}
      <h2>Code time!</h2>
      ${CodeBlock({ code: filterClassCodeBlock(filterCodeBlock(stack[1].toString())) }).outerHTML}
      ${CodeBlock({ code: filterCodeBlock(stack[2].toString(), 2) }).outerHTML}
    `,
  });
}

export const Stacks = (props) => new Miru(View, {
  props,
  defaultProps: {},
});

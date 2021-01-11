import Miru from '@omarefg/miru';
import { PostContainer, PostImage, CodeBlock } from '../../../components';
import { filterClassCodeBlock, filterCodeBlock } from '../../../utils/filters';
import image1 from './assets/1.png';
import image2 from './assets/2.png';
import image3 from './assets/3.png';
import image4 from './assets/4.png';
import image5 from './assets/5.png';
import queue from './treecode';

function View() {
  return PostContainer({
    innerHTML: `
      <h1>Trees</h1>
      <p>Esta estructura de datos nos permite generar una ramificación de datos, su anatomía sería algo parecido a esto:</p>
      ${PostImage({ src: image1 }).outerHTML}
      <p>Un binary tree bien formado se ve de la siguiente manera</p>
      ${PostImage({ src: image2 }).outerHTML}
      <p>Un binary tree perfecto siempre se va a ver de la siguiente forma, el nodo superior cuando se ramifica hacia abajo siempre se va a multiplicar. A eso se le conoce como binary tree balanceado porque vamos a tener la misma cantidad de nodos de ambos lados (izquierdo y derecho).</p>
      <p>Hay diferentes variantes de trees en estructuras de datos, una de las más utilizadas es el binary search tree que tree nos ayuda para poder buscar información</p>
      ${PostImage({ src: image3 }).outerHTML}
      <p>Esta es la forma en la que los datos se acomodan para generar el tree.</p>
      <p>Es un arbol balanceado, una de sus reglas principales es que los números que van en aumento vienen del lado derecho y los números que van en decremento vienen del lado izquierdo. Esta regla aplica para todo en la ramificación del arbol.</p>
      <p>Esta regla es muy importante porque nos ayuda a generar la técnica divide y vencerás (divide and conquer), esta técnica nos ayuda a hacer una búsqueda rápida entre muchos datos.</p>
      <p>También existen árboles que no están balanceados</p>
      ${PostImage({ src: image4 }).outerHTML}
      <p>Sólo hay incrementación al lado derecho pero no sigue la regla de multiplicar al ramificar, existen ciertos algoritmos par balancear un árbol, esto es importante porque debemos balancear el árbol para poder hacer una búsqueda o para poder utilizarlo de forma más eficiente.</p>
      <p>Estos son los métodos que nos permiten manipular esta estructura de datos:</p>
      ${PostImage({ src: image5 }).outerHTML}
      <h2>Code time!</h2>
      ${CodeBlock({ code: filterClassCodeBlock(filterCodeBlock(queue[1].toString())) }).outerHTML}
      ${CodeBlock({ code: filterCodeBlock(queue[2].toString(), 2) }).outerHTML}
    `,
  });
}

export const Trees = (props) => new Miru(View, {
  props,
  defaultProps: {},
});

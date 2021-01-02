import Miru from '@omarefg/miru';
import { PostContainer, PostImage } from '../../../components';
import image1 from './assets/1.png';
import image2 from './assets/2.png';
import image3 from './assets/3.png';
import image4 from './assets/4.png';
import image5 from './assets/5.png';

function View() {
  return PostContainer({
    innerHTML: `
      <h1>Hash tables</h1>
      <p>Esta estructura de datos no existe propiamente en JS como en otros lenguajes de programación.</p>
      <p>¿Como podríamos definir un hash table en diferentes lenguajes?</p>
      ${PostImage({ src: image1 }).outerHTML}
      <p>Podríamos decir que en JS lo más cercano son los objetos o maps, aún les falta un poco para llegar a ser hash tables pero son muy similares.</p>
      <p>Entonces, ¿cuál es la diferencia entre una hash table y un objeto en JS?</p>
      ${PostImage({ src: image2 }).outerHTML}
      <p>De entrada son similares porque también manejan este concepto de llave-valor.</p>
      <p>La diferencia radica en un paso extra, la hash function, y esto es básicamente poder asegurar un hash que se convierte en el address para poder poder acceder al valor</p>
      ${PostImage({ src: image3 }).outerHTML}
      <p>¿Cómo funciona esto?</p>
      <ul>
      <li>Le envío mi llave y mi valor al hash function</li>
      <li>El hash function me devuelve el número que me da acceso al valor, si yo le mando la misma llave me devuelve el mismo número</li>
      </ul>
      <p>También cuenta con sus métodos que nos permiten manipularlo</p>
      ${PostImage({ src: image4 }).outerHTML}
      <p>En ocasiones trabajar con hash tables puede convertirse en un problema por algo que se llama colisión de Hash Table</p>
      ${PostImage({ src: image5 }).outerHTML}
      <p>En ocasiones, pasar un key distinto podría generarnos el mismo hash y eso haría que tenga dos elementos guardados en un mismo bucket, no hay forma de evitar esto, es como funciona, dependiendo de cuantos buckets libres tengamos nos va a regresar este hash para guardar la información. Casi siempre es imposible evitar una colisición, pero es importante saber como podemos tratar una colisión, la idea es enviar la llave y el hash table regresará el valor.</p>
  `,
  });
}

export const HashTable = (props) => new Miru(View, {
  props,
  defaultProps: {},
});

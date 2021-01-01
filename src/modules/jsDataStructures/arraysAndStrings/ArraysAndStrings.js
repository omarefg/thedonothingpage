/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-webpack-loader-syntax */
import Miru from '@omarefg/miru';
import { CodeBlock, PostContainer, PostImage } from '../../../components';
import image1 from './assets/1.png';
import image2 from './assets/2.png';
import image3 from './assets/3.png';
import image4 from './assets/4.png';
import image5 from './assets/5.png';
import image6 from './assets/6.png';
import image7 from './assets/7.gif';
import image8 from './assets/8.gif';
import image9 from './assets/9.png';
import array from '!./array';
import { filterCodeBlock } from '../../../utils/filters';

function View() {
  return PostContainer({
    innerHTML: `
      <h1>Arrays</h1>
      <p>Quizás una de las estructuras de datos más conocida y utilizada</p>
      <p>Un array es simplemente una colección de datos, podríamos representarla de la siguiente manera:</p>
      ${PostImage({ src: image1 }).outerHTML}
      <p>De esta manera nosotros generamos un índice para cada uno de los valores que están siendo almacenados, estos son de forma consecutiva.</p>
      <p>A los arrays también se les conoce como listas.</p>
      <p>También tienen métodos que nos ayudan a manipularlos</p>
      ${PostImage({ src: image2 }).outerHTML}
      <p>Estos métodos por debajo tienen cierta lógica, recordemos que no es lo mismo añadir un elemento al final de un array, que al principio</p>
      <p>Existen dos tipos de array:</p>
      <ul>
        <li>Arrays Dinámicos</li>
        <li>Arrays Estáticos</li>
      </ul>
      <p>Viendo podríamos preguntarnos, ¿entonces cómo se cual es el array que estoy manejando? ¿Cómo puedo manejar alguno de los dos en JS?</p>
      <blockquote>JavaScript maneja por default siempre arrays dinámicos. Cuando inicializamos un Array, no decidimos que tan largo va a ser ese Array.</blockquote>
      <p>Existen otros lenguajes de programación, por ejemplo C, donde cuando iniciamos una lista, le decimos cuantos elementos va a tener esa lista.</p>
      <p>Esto lo hacemos para que el computador sepa cuantos slots de memoria tiene que asignarle a esta lista y éste ya no podría mutar.</p>
      <p>Una vez armamos un array estático, ya no podemos modificarlo .</p>
      <p>En JS funciona un poco diferente, cuando generas un Array puedes mutarlo, puedes agregarle nuevos valores, cambiar los elementos, quitar elementos. Cambiar el array a tu antojo.</p>
      <p>Esto es importante, porque el desarrollador no está manejando la complejidad de cómo guardamos la información en la memoria.</p>
      <p>Bien, entonces, ¿cómo impacta a la memoria el comportamiendo de un array dinámico y uno estático?</p>
      ${PostImage({ src: image3 }).outerHTML}
      <p>En la imagen anterior vemos un array estático.</p>
      <p>Ahora bien, ¿qué sucede por debajo?</p>
      ${PostImage({ src: image4 }).outerHTML}
      <p>El computador asigna slots específicos para cada valor almacenado en cada índice.</p>
      <p>Del slot 2 al 9 almacena el valor del índice 0.</p>
      <p>Del slot 10 al 17 almacena el valor del índice 1.</p>
      <p>Del slot 18 al 25 almacena el valor del índice 2.</p>
      <p>De esta manera cuando nosotros pedimos el valor del índice 0, 1 o 2, ya sabe en que slots va a buscar.</p>
      <p>Ahora bien, ¿qué pasa si nosotros queremos mutar el array?</p>
      <p>Supongamos que queremos que sea más grande.</p>
      <p>Lo que debemos hacer es borrar toda esta información, clonarla en otro espacio y agregarle los nuevos slots.</p>
      <p>¿Y cómo funcionan los dinámicos? (The JS way)</p>
      ${PostImage({ src: image5 }).outerHTML}
      <p>Cuando nosotros generamos una lista o array inicial, con, por ejemplo 3 elementos, JS lo que va a hacer es tener la siguiente conversación con el computador</p>
      ${PostImage({ src: image6 }).outerHTML}
      <p><strong>JS</strong>: - Oye, tengo 3 elementos que quiero almacenar pero necesito 6 slots</p>
      ${PostImage({ src: image7 }).outerHTML}
      <p><strong>PC</strong>: - ¿Por qué?</p>
      ${PostImage({ src: image8 }).outerHTML}
      <p><strong>JS</strong>: - Porque puede ser que el array crezca</p>
      <p>De eso se trata un array dinámico, nosotros no sabemos cuantos elementos va a tener, JS tampoco lo sabe pero para estar preparado va a duplicar la cantidad de elementos que podría tener éste array.</p>
      <p>Bien, ahora, ¿Qué pasa si nos da los 6 y resulta que ahora hay un séptimo elemento?</p>
      ${PostImage({ src: image9 }).outerHTML}
      <p>Ahora lo que va a hacer el computador es agarrar esos 6 slots, borrarlos, buscarles un espacio donde puedan ser ubicados y en lugar de regresar 6 slots disponibles, regresa 12. Los antiguos seis slots quedan como memoria libre.</p>
      <h1>Code Time!</h1>
      <p>Vamos a construir nuestro propio array, y le vamos a dar sus propios métodos como lo hace JS con el push, pop, shift, entre otros.</p>
      <p>Pero antes</p>
      <p>¿Cómo generamos un array de manera tradicional?</p>
      <p>Creamos una variable que tenga un nombre igual al array que queremos crear</p>
      <p>Y dentro podemos empezar a almacenar valores</p>
      ${CodeBlock({ code: filterCodeBlock(array[1].toString(), 2) }).outerHTML}
      <p>Y dentro podemos empezar a almacenar valores separados por coma</p>
      ${CodeBlock({ code: filterCodeBlock(array[2].toString(), 2) }).outerHTML}
      <p>Y si nosotros accedemos a ese array nos devuelve su resultado</p>
      ${CodeBlock({ code: filterCodeBlock(array[3].toString(), 2) }).outerHTML}
      <p>También podríamos acceder a un índice del array nos daría el valor almacenado en ese índice</p>
      ${CodeBlock({ code: filterCodeBlock(array[4].toString(), 2) }).outerHTML}
      <p>Y si queremos agregar un elemento al final podríamos utilizar hacerlo utilizando los métodos que nos ofrece el lenguaje, en este caso utilizaríamos un push</p>
      ${CodeBlock({ code: filterCodeBlock(array[5].toString(), 2) }).outerHTML}
      <p>Ahora bien, todo esto nos lo ofrece JavaScript por defecto, lo que vamos a hacer nosotros es crear nuestro propio arreglo con una clase que venga con sus propios métodos</p>
      ${CodeBlock({ code: filterCodeBlock(array[6].toString()).replace('return ', '') }).outerHTML}
      <p>Bien, ahora probemos la instancia que acabamos de hacer</p>
      ${CodeBlock({ code: filterCodeBlock(array[7].toString(), 2) }).outerHTML}
    `,
  });
}

export const ArrayAndStrings = (props) => new Miru(View, {
  props,
  defaultProps: {},
});

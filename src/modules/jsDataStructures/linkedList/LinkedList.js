/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-webpack-loader-syntax */
import Miru from '@omarefg/miru';
import { PostContainer, PostImage, CodeBlock } from '../../../components';
import linkedList from '!./linkedlistcode';
import image1 from './assets/1.png';
import image2 from './assets/2.png';
import image3 from './assets/3.png';
import image4 from './assets/4.png';
import image5 from './assets/5.png';
import image6 from './assets/6.png';
import { filterClassCodeBlock, filterCodeBlock } from '../../../utils/filters';

function View() {
  return PostContainer({
    innerHTML: `
    <h1>Linked List</h1>
    ${PostImage({ src: image1 }).outerHTML}
    <p>Esta es la estructura de una linked list, podemos ver que tenemos ciertos nodos.</p>
    <p>Uno de ellos es el nodo principial que se convierte en la cabeza, y un último nodo que es la cola</p>
    <p>Los nodos entre estos dos son nodos secundarios.</p>
    <p>Podemos ver que luego de la cola existe null y que cada nodo tiene una flecha apuntando a la derecha.</p>
    <p>Esa flecha representa la conexión que existe entre cada nodo.</p>
    <p>Esto es muy importante porque es el comportamiento principal de las Linked List</p>
    <p>Existen dos tipos de Linked List</p>
    <h2>Singly Linked List</h2>
    ${PostImage({ src: image2 }).outerHTML}
    <p>Como toda estructura de datos tiene ciertos métodos que nos permiten manipularla.</p>
    <p>Se diferencia de un hash table o un array en que no podemos pasarle un índice o un key para encontrar un elemento, debemos recorrer toda la lista para encontrarlo.</p>
    ${PostImage({ src: image3 }).outerHTML}
    <p>¿Cómo funciona? Cada nodo se compone de dos factores principales, el valor y el valor siguiente, es así como empezamos a ligar los nodos y como se genera una linked list.</p>
    <p>¿Y por qué funciona de esta manera?</p>
    <p>Muchas veces el porqué viene dado por la manera en como se guardan los datos</p>
    ${PostImage({ src: image4 }).outerHTML}
    <p>Esta es una representación gráfica de como se guardarían estos datos en memoria, vemos que tenemos un memory slot que tiene un pointer a otro memory slot y así sucesivamente, incluso podemos diferenciar entre el head y el tail.</p>
    <p>La PC no sabe cual es el address de cada memory slot, sólo conoce el address del head, y a partir de ahí empieza a recorrer slots para encontrar el valor que se está buscando.</p>
    <h3>Code time!</h3>
    <p>Vamos a generar una estructura similar a esto</p>
    <p>1 ➝ 2 ➝ 3 ➝ 4 ➝ 5 ➝ 6 ➝ null</p>
    <p>Los números representan los valores dentro de la lista y las flechas el pointer que dirige al siguiente valor y vemos que el 6, que vendría siendo la cola apunta a un valor nulo.</p>
    <p>Si lo representáramos como un objeto de JS se vería más o menos de la siguiente manera:</p>
    ${CodeBlock({ code: filterCodeBlock(linkedList[3].toString(), 2) }).outerHTML}
    <p>Ahora, generemos una clase que represente la estructura de datos para verla de manera más formal</p>
    <p>Pero antes, recordemos como funcionan las Linked List, se genera una lista y existen nodos dentro de ella que apuntan al siguiente nodo y así sucesivamente, para evitar repetir código, generemos una clase llamada Node</p>
    ${CodeBlock({ code: filterClassCodeBlock(filterCodeBlock(linkedList[4].toString())) }).outerHTML}
    ${CodeBlock({ code: filterClassCodeBlock(filterCodeBlock(linkedList[1].toString())) }).outerHTML}
    ${CodeBlock({ code: filterCodeBlock(linkedList[2].toString(), 2) }).outerHTML}
    <p>Es importante entender también que cuando generamos un objeto en JS y luego igualamos otra variable a la variable anterior lo que hacemos es que apuntamos desde las dos variables al mismo espacio en memoria, por eso cuando decimos:</p>
    ${CodeBlock({ code: filterCodeBlock(linkedList[5].toString(), 2) }).outerHTML}
    <p>Cada vez que hagamos un cambio en this.tail ese cambio también va a afectar a this.head, por eso en el método append, cuando le decimos:</p>
    ${CodeBlock({ code: filterCodeBlock(linkedList[6].toString(), 2) }).outerHTML}
    <p>A su vez también cambiamos el valor this.head.next, luego hacemos que this.tail apunte al espacio en memoria de newNode diciéndole:</p>
    ${CodeBlock({ code: filterCodeBlock(linkedList[7].toString(), 2) }).outerHTML}
    <p>La próxima vez que cambiemos this.tail ya no va a afectar a this.head. Gracias a esto es que podemos aplicar los métodos append y prepend de esta manera, esto lo podemos probar haciendo en el constructor de SinglyLinkedList lo siguiente:</p>
    ${CodeBlock({ code: filterCodeBlock(linkedList[8].toString(), 2) }).outerHTML}
    <p>De esa manera this.tail ya no estará apuntando al espacio en memoria que ocupa this.head sino que pasará a ocupar uno nuevo, y los cambios que se hagan en this.tail no afectaran a this.head por ende el método de append la primera vez que se llama no hará que mute this.head. Esto es un problema porque no es el comportamiento que queremos, pero es importante que entendamos que no siempre la mutabilidad en JS es mala (aunque la querramos evitar en la mayoría de los casos) y qué podemos sacarle provecho sabiéndola utilizar. La otra opción es evitar que los objetos muten y tener control sobre lo que ocurre tanto en this.tail como en this.head.</p>
    <h2>Double Linked List</h2>
    <p>La estructura de la Double Linked List es parecida a la Singly, pero...</p>
    ${PostImage({ src: image5 }).outerHTML}
    <p>Tienen, además de un atributo next, uno prev, apuntando al nodo anterior.</p>
    <p>La manera en que se guardan en memoria también es similar, PERO...</p>
    ${PostImage({ src: image6 }).outerHTML}
    <p>Nuevamente, ahora el memory slot tiene el address del slot anterior y siguiente.</p>
    <p>Bien, ahora veamos como aplicamos una Double Linked List en código.</p>
    <p>Primero hagamos nuestra clase nodo</p>
    ${CodeBlock({ code: filterClassCodeBlock(filterCodeBlock(linkedList[10].toString())) }).outerHTML}
    <p>Ahora hagamos nuestra lista</p>
    ${CodeBlock({ code: filterClassCodeBlock(filterCodeBlock(linkedList[9].toString())) }).outerHTML}
  `,
  });
}

export const LinkedList = (props) => new Miru(View, {
  props,
  defaultProps: {},
});

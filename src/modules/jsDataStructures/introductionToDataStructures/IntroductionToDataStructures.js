import Miru from '@omarefg/miru';
import { PostImage, CodeBlock, PostContainer } from '../../../components';
import image1 from './assets/1.png';
import image2 from './assets/2.png';
import image3 from './assets/3.png';
import image4 from './assets/4.png';
import image5 from './assets/5.png';
import image6 from './assets/6.png';
import image7 from './assets/7.png';
import image8 from './assets/8.png';

function View() {
  return PostContainer({
    innerHTML: `
      <h1>¿Qué son las estructuras de datos?</h1>
      <p>Sin importar que lenguaje de programación utilices, las estructuras de datos te van a ayudar a solucionar problemas.</p>
      <p>Te permiten almacenar la información, el software se compone de ella en su mayoría.</p>
      <h2>La ropa y el armario</h2>
      <p>Nos entregan un montón de ropa para guardar en nuestro armario.</p>
      <p>En el mejor de los casos la ropa llegará ordenada, en el peor de los casos estará desornada.</p>
      ${PostImage({ src: image1 }).outerHTML}
      <p>Ordenarla y guardarla será nuestro trabajo.</p>
      <p>Esta es una actividad que realizamos todo el tiempo, trabajar con estructuras de datos nos permite almacenar no sólo información sino muchas otras cosas, cómo la ropa.</p>
      <p>Si guardamos la ropa en bruto podríamos terminar con un escenario como el siguiente:</p>
      ${PostImage({ src: image2 }).outerHTML}
      <p>Metimos la ropa, quedó como pudo y si el armario cierra nuestro trabajo está listo, para nosotros es funcional porque somos quienes utilizan la ropa.</p>
      <p>Ahora bien, ¿cuál es el problema acá?</p>
      <p>Si una persona externa abre el armario ya sea para buscar alguna prenda o para dártela, esta persona no entendría bien donde buscar, quizás si nosotros la buscamos nos costaría un poco de trabajo pero la encontraríamos.</p>
      <p>Esto no quiere decir que esta manera de guardar la ropa sea mala, simplemente es una estructura, pero posiblemente no sea la mejor manera de hacerlo para llevar a cabo el propósito de encontrar una prenda.</p>
      <p>Para ello existen modelos que nos permiten guardar la ropa de una manera en la que sea más fácil encontrarla</p>
      ${PostImage({ src: image3 }).outerHTML}
      <p>Estos modelos lo que hacen es optimizar la manera en que la ropa es almacenada para poder acceder a ella de una manera más sencilla, ya sea por color o por otro atributo.</p>
      <p>Con estas estructuras no sólo empezamos a notar que es más fácil acceder a la ropa, sino que también va apareciendo espacio.</p>
      <p>Esto es un modelo de estructura de datos</p>
      <p>Existen diferentes formas de almacenar información</p>
      ${PostImage({ src: image4 }).outerHTML}
      <p>Cada una de estas formas nos ayuda a resolver problemas específicos, no todas son buenas para todo.</p>
      <p>JavaScript no tiene algunas estructuras de datos construidas, por ende nosotros debemos construirlas para poderlas utilizar.</p>
      <blockquote>Las estructuras de datos son colecciones de valores, las relaciones entre ellos y las funciones u operaciones que se pueden aplicar a los datos</blockquote>
      <p>Hay muchos lenguajes que ya tienen estructuras de datos construidas y hay otros como JavaScript donde nosotros debemos construirlas para poder trabajar con ellas.</p>
      <h1>Memoria y cómo se guardan los datos</h1>
      <p>Hablar de memoria es un tema extenso, porque es como se guarda toda la información y como el computador trabaja la memoria, podríamos hablar de:</p>
      <ul>
        <ol>Memoria RAM</ol>
        <ol>Disco duro</ol>
      </ul>
      <p>Entre otros, hay muchas fuentes</p>
      <p>En esta ocasión vamos a ver de manera general como se guardan en la memoria los datos que generamos en JavaScript.</p>
      <p>Podría ser que la forma de guardar estos datos sea distinta dependiendo del lenguaje que estemos utilizando.</p>
      <p>Primero hagamos una representación de cómo se vería una memoria, para ello utilicemos la siguiente imagen:</p>
      ${PostImage({ src: image5 }).outerHTML}
      <p>Cada cuadro de la memoria es un espacio en la memoria llamado "Memory Slot".</p>
      <p>Si nos acercamos a este memory slot vamos a notar que está compuesto por bits:</p>
      ${PostImage({ src: image6 }).outerHTML}
      <p>Cada 8 bits forman un byte, si sacamos la cuenta podremos ver que este memory slot está compuesto por 14 bytes, o 112 bits.</p>
      <p>Y se están ocupando 16 bits (2 bytes) en memoria para almacenar la variable</p>
      <p>Entonces cada vez que escribimos</p>
      ${CodeBlock({ code: 'const edad = 25' }).outerHTML}
      <p>Estamos ocupando un memory slot que a su vez ocupa 2 bytes</p>
      <p>Es importante recalcar que nosotros no decidimos cuales espacios en memoria se van a ocupar, esto lo decide la computadora.</p>
      <p>¿Y cómo sabemos donde se guarda esta información?</p>
      <p>Esto sucede gracias a direcciones o addresses.</p>
      ${PostImage({ src: image7 }).outerHTML}
      <p>Acá vemos otro ejemplo con la constante saludo cuyo valor es "Hola"</p>
      <p>El computador lo que va a hacer es decir: </p>
      <p>"Ok, tengo esta constante que ocupa 4 bits, voy a buscar en algún slot 4 bits disponibles para utilizar."</p>
      <p>Y luego va a buscar 4 bits continuos para almacenar esa información.</p>
      <p>Cada cuadro representa una dirección, entonces nosotros al pedir el valor de la constante saludo, el computador va a reconocer que dirección del slot y el consecutivo que forma el valor de saludo y eso es lo que nos regresa.</p>
      <p>Para entenderlo un poco mejor veamos la siguiente imagen:</p>
      ${PostImage({ src: image8 }).outerHTML}
      <p>A la izquierda vemos las direcciones y a su lado los datos que se están almacenando</p>
    `,
  });
}

export const IntroductionToDataStructures = (props) => new Miru(View, {
  props,
  defaultProps: {},
});

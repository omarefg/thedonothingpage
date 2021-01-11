import Miru from '@omarefg/miru';
import { PostContainer, PostImage } from '../../../components';
import image1 from './assets/1.png';
import image2 from './assets/2.png';
import image3 from './assets/3.png';
import image4 from './assets/4.png';
import image5 from './assets/5.png';
import image6 from './assets/6.png';
import image7 from './assets/7.png';
import image8 from './assets/8.png';
import image9 from './assets/9.png';

function View() {
  return PostContainer({
    innerHTML: `
      <h1>Principios del diseño</h1>
      <h2>Comunicación efectiva</h2>
      <p>El diseño cuenta con un nivel de procesamiento visual y mental, nuestro trabajo es hacer lo más depurada y exacta esa comunicación.</p>
      ${PostImage({ src: image1, width: '250px' }).outerHTML}
      <p>En el poster anterior podemos observar un poster que nos habla del fin de la guerra, su mensaje puede ser efectivo en cualquier lugar del mundo.</p>
      ${PostImage({ src: image2, width: '250px' }).outerHTML}
      ${PostImage({ src: image3, width: '250px' }).outerHTML}
      <p>El diseño también responde a ciertos contratos sociales que hemos pactado basándonos en nuestra necesidad de informar.</p>
      ${PostImage({ src: image4, width: '250px' }).outerHTML}
      <p>Todo lo que ha sido creado por el humano ha pasado por un proceso de diseño</p>
      <h2>El concepto</h2>
      <p>Es nuestro punto de partida en todo proyecto.</p>
      <p>Es nuestra narrativa, es la historia que estamos contando dentro del diseño.</p>
      <p>El concepto nos ayuda a darle alma al diseño.</p>
      <p>Sin concepto el diseño no puede cumplir su objetivo de comunicar.</p>
      ${PostImage({ src: image5, width: '250px' }).outerHTML}
      ${PostImage({ src: image6, width: '250px' }).outerHTML}
      ${PostImage({ src: image7, width: '250px' }).outerHTML}
      <strong>Para poder crear un buen concepto debemos:</strong>
      <ul>
      <li>Conocer e investigar sobre el tema</li>
      <li>Tomar los puntos más importantes</li>
      <li>Definir la comunicación visual</li>
      </ul>
      <h2>Diseño universal</h2>
      ${PostImage({ src: image8, width: '250px' }).outerHTML}
      ${PostImage({ src: image9, width: '250px' }).outerHTML}
      <p>El diseño debe comunicar un mensaje sin importar cualquier sesgo cultural o geográfico.</p>
      <p>Ya tenemos códigos sociales establecidos para poder comunicar.</p>
      <strong>El diseño universal:</strong>
      <ul>
        <li>Se entiende sin necesidad de explicación.</li>
        <li>Comunica el mensaje sin importar el idioma.</li>
      </ul>
    `,
  });
}

export const DesignPrinciples = (props) => new Miru(View, {
  props,
  defaultProps: {},
});

import Miru from '@omarefg/miru';
import { PostContainer, PostImage } from '../../../components';
import image1 from './assets/1.png';

function View() {
  return PostContainer({
    innerHTML: `
      <h1>Introducción al diseño</h1>
      <h2>¿Qué es el diseño?</h2>
      <p>Es un puente entre la funcionalidad y la estética.</p>
      <p>El objetivo principal del diseño siempre es resolver un problema.</p>
      <p>El punto de partida de un diseñador siempre es solucionar un problema o cubrir una necesidad sin importar el área.</p>
      <p>También se habla de estética porque el producto final es percibido por humanos, esta percepción es un problema de estética.</p>
      ${PostImage({ src: image1 }).outerHTML}
      <h2>Objetivos del diseño</h2>
      <ul class="default-spacing">
        <li class="default-spacing">
          Facilitar una comunicación efectiva
          <ul class="default-spacing">
            <li class="default-spacing">¿Qué quiero comunicar?</li>
          </ul>
        </li>
        <li class="default-spacing">Debe permanecer universal y atemporal</li>
        <li class="default-spacing">Luego del concepto viene el boceto y los elementos visuales de la composición</li>
        <li class="default-spacing">
          Elementos visuales:
          <ul class="default-spacing">
            <li class="default-spacing">Punto</li>
            <li class="default-spacing">Linea</li>
            <li class="default-spacing">Figuras geométricas</li>
            <li class="default-spacing">Color</li>
            <li class="default-spacing">Tipografía</li>
            <li class="default-spacing">Ilustración</li>
            <li class="default-spacing">Fotografía</li>
          </ul>
        </li>
        <li class="default-spacing">Menos es más, busca siempre la síntesis</li>
      </ul>
    `,
  });
}

export const IntroductionToDesign = (props) => new Miru(View, {
  props,
  defaultProps: {},
});

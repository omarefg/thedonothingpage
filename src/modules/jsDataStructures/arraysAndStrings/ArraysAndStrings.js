import { Component } from '../../../decorators';
import { PostContainer, PostImage } from '../../../components';
import image1 from './assets/1.png';
import image2 from './assets/2.png';

function View() {
  const { title } = this.state;
  return PostContainer({
    innerHTML: `
      <h1>${title}</h1>
      <p>Quizás una de las estructuras de datos más conocida y utilizada</p>
      <p>Un array es simplemente una colección de datos, podríamos representarla de la siguiente manera:</p>
      ${PostImage({ src: image1 }).innerHTML}
      <p>De esta manera nosotros generamos un índice para cada uno de los valores que están siendo almacenados, estos son de forma consecutiva.</p>
      <p>A los arrays también se les conoce como listas.</p>
      <p>También tienen métodos que nos ayudan a manipularlos</p>
      ${PostImage({ src: image2 }).innerHTML}
    `,
  });
}

export const ArrayAndStrings = (props) => new Component(View, {
  props,
  defaultProps: {},
  state: {
    title: 'Array',
  },
  onMount() {
    const self = this;
    setTimeout(() => {
      self.setState({ title: 'Pepito' });
    }, 3000);
  },
});

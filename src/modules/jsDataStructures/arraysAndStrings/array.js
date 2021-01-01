/* eslint-disable no-unused-vars */
const block = {
  1() {
    return () => {
      const array = [];
    };
  },
  2() {
    return () => {
      const array = ['Gato', 'Guacamaya'];
    };
  },
  3() {
    return () => {
      const array = ['Gato', 'Guacamaya'];
      console.log(array); // ['Gato', 'Guacamaya']
    };
  },
  4() {
    return () => {
      const array = ['Gato', 'Guacamaya'];
      console.log(array[0]); // 'Gato'
      console.log(array[1]); // 'Guacamaya'
    };
  },
  5() {
    return () => {
      const array = ['Gato', 'Guacamaya'];
      array.push('Perro');
      console.log(array); // ['Gato', 'Guacamaya', 'Perro']
    };
  },
  6() {
    return class MyArray {
      constructor() {
        this.length = 0; // Longitud inicial del array
        this.data = {}; // Acá vamos a estar agregando los elementos del array
      }

      // Este método nos va a servir para obtener un elemento del array
      // Recibe por parámetro el índice al cual queremos acceder
      get(index) {
        return this.data[index];
      }

      // Para hacer crecer nuestro array
      push(item) {
        this.data[this.length] = item;
        this.length += 1;
        return this.data;
      }

      // Método para eliminar el último elemento del arreglo
      pop() {
        this.length -= 1;
        const lastItem = this.data[this.length];
        delete this.data[this.length];
        return lastItem;
      }

      // Contiene la lógica necesaria para borrar un elemento del array
      // Consta de varios pasos:
      // 1. Generamos una constante con el valor del dato que vamos a borrar
      // 2. bajamos la longitud del arreglo
      // 3. Iteramos sobre el arreglo a partir del índice que queremos borrar
      // 4. Durante esta iteración convertimos el elemento sobre el que estamos iterando en el siguiente de la lista
      // 5. Al final nos quedaría un array donde el último valor es undefined y sin el valor que queremos eliminar
      // 6. Cómo el último valor es undefined, simplemente lo quitamos con la palabra reservada "delete"
      // 7. Retornamos el valor del índice que acabamos de borrar
      // 8. Ya 👀
      delete(index) {
        const item = this.data[index];
        this.length -= 1;
        for (let i = index; i < this.length; i += 1) {
          this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length];
        return item;
      }

      // Contiene la lógica necesaria para añadir elementos a un índice
      // La lógica consiste en:
      // 1. Recibimos un índice y un valor
      // 2. Iteramos el arreglo desde un índice mayor al último hasta el segundo índice
      // 3. Igualamos el índice actual con el anterior
      // 5. Aumentamos la longitud del arreglo
      // 6. Igualamos el valor en el índice 0 con el elemento que estamos recibiendo
      // 7. Retornamos la data
      // 8. Ya 👀
      add(index, element) {
        for (let i = this.length; i > 0; i -= 1) {
          this.data[i] = this.data[i - 1];
        }
        this.length += 1;
        this.data[0] = element;
        return this.data;
      }

      // Añade un elemento al principio de nuestro array
      shift(element) {
        return this.add(0, element);
      }

      // Elimina un elemento al principio de nuestro array
      unshift() {
        return this.delete(0);
      }
    };
  },
  7() {
    const MyArray = this[6]();

    return () => {
      const myArray = new MyArray();
      myArray.push('🦁'); // {0: '🦁'}
      // Y si añadirmos otro
      myArray.push('🐯'); // {0: '🦁', 1: '🐯'}
      console.log(myArray.length); // 2
      console.log(myArray.get(1)); // '🐯'
      console.log(myArray.get(0)); // '🦁'
      myArray.pop(); // '🐯'
      console.log(myArray.data); // { 0: '🦁' }
      myArray.push('🐶');
      console.log(myArray.data); // { 0: '🦁', 1: '🐶' }
      myArray.delete(0);
      console.log(myArray.data); // { 0: '🐶' }
      myArray.shift('🐱');
      console.log(myArray.data); // {0: '🐱', 1: '🐶'}
      myArray.unshift(); // '🐱'
      console.log(myArray.data); // {0: '🐶'}
    };
  },
};

export default block;

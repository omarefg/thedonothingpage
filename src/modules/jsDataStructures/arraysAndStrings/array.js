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

      // Funciona para eliminar un elemento del array
      delete() {

      }
    };
  },
  7() {
    const MyArray = this[6]();

    return () => {
      const myArray = new MyArray();
      myArray.push('León'); // {0: 'León'}
      // Y si añadirmos otro
      myArray.push('Tigre'); // {0: 'León', 1: 'Tigre}
      console.log(myArray.length); // 2
      console.log(myArray.get(1)); // 'Tigre'
      console.log(myArray.get(0)); // 'León'
      myArray.pop(); // 'Tigre'
      console.log(myArray.data); // { 0: 'León' }
      myArray.push('Jirafa');
      console.log(myArray.data); // { 0: 'León', 1: 'Jirafa' }
    };
  },
};

block[7]()();

export default block;

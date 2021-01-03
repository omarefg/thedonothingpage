/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const block = {
  1() {
    return () => {
      const saludo = 'Hola';
    };
  },
  2() {
    return () => {
      const saludo = 'Hola';
      console.log(saludo[0]); // 'H'
      console.log(saludo[1]); // 'o'
      // Y como los strings son imutables
      saludo[1] = 'T'; // No daría un error de tipo con el siguiente mensaje: Cannot assign to read only property '1' of string 'Hola'.
      // Read only es la clave, imutabilidad es sólo una palabra fancy o elegante para decir que no puede cambiar
    };
  },
};

export default block;

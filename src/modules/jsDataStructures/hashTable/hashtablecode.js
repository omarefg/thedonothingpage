/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const block = {
  1() {
    return class HashTable {
      constructor(size) {
        this.data = new Array(size);
      }

      // Hash function
      hashMethod(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i += 1) {
          hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
      }

      // Nos permite añadir un valor y una llave al hash table
      set(key, value) {
        const address = this.hashMethod(key);
        if (!this.data[address]) {
          this.data[address] = [];
        }
        if (this.data[address].find((element) => element[0] === key)) {
          for (let i = 0; i < this.data[address].length; i += 1) {
            if (this.data[address][i][0] === key) {
              this.data[address][i][1] = value;
            }
          }
        } else {
          this.data[address].push([key, value]);
        }
        return this.data;
      }

      // Nos permite obtener el valor a partir de una llave
      get(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
          for (let i = 0; i < currentBucket.length; i += 1) {
            if (currentBucket[i][0] === key) {
              return currentBucket[i][1];
            }
          }
          return currentBucket;
        }
        return undefined;
      }

      // Nos permite obtener todos los keys que existen en nuestro hash
      keys() {
        return this.data.map((bucket) => bucket.map((element) => element[0])).flat();
      }

      // Nos permite eliminar un valor de nuestra data
      remove(key) {
        this.data = this.data.map((bucket) => bucket.filter((element) => element[0] !== key));
      }
    };
  },
  2() {
    const HashTable = this[1]();

    return () => {
      const hashTable = new HashTable(50);
      hashTable.set('Manzanas', 25);
      hashTable.set('Peras', 32);
      hashTable.set('Manzanas', 30);
      console.log(hashTable.get('Manzanas')); // 30
      console.log(hashTable.keys()); // ['Manzanas', 'Peras']
      hashTable.remove('Manzanas');
      console.log(hashTable.keys()); // ['Peras']
    };
  },
};

block[2]()();

export default block;

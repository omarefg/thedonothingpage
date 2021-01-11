/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable max-classes-per-file */

const block = {
  1() {
    const Node = this[3]();
    return class Queue {
      constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
      }

      // Nos permite obtener el primer elemento en entrar
      peek() {
        return this.first;
      }

      // Nos permite agregar un elemento al final de nuestra fila
      enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
          this.first = newNode;
          this.last = newNode;
        } else {
          this.last.next = newNode;
          this.last = newNode;
        }
        this.length += 1;
        return this;
      }

      // Nos permite remover el primer elemento de la lista
      dequeue() {
        if (this.length > 0) {
          this.first = this.first.next;
          this.length -= 1;
          if (this.length === 0) {
            this.last = null;
          }
        }
      }
    };
  },
  2() {
    const Queue = this[1]();

    return () => {
      const queue = new Queue(1);
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      queue.dequeue();
      console.log(queue.peek());
    };
  },
  3() {
    return class Node {
      constructor(value) {
        this.value = value;
        this.next = null;
      }
    };
  },
};

block[2]()();

export default block;

/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable max-classes-per-file */

const block = {
  1() {
    const Node = this[3]();
    return class Stack {
      constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
      }

      // Nos permite obtener el último elemento en entrar
      peek() {
        return this.top;
      }

      // Nos permite agregar un elemento a nuestra pila
      push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
          this.top = newNode;
          this.bottom = newNode;
        } else {
          newNode.next = this.top;
          this.top = newNode;
        }
        this.length += 1;
        return this;
      }

      // Nos permite eliminar el último elemento
      pop() {
        if (this.length > 0) {
          this.top = this.top.next;
          this.length -= 1;
          if (this.length === 0) {
            this.bottom = null;
          }
        }
      }
    };
  },
  2() {
    const Stack = this[1]();

    return () => {
      const stack = new Stack(1);
      stack.push(1);
      stack.push(2);
      stack.push(3);
      stack.pop();
      console.log(stack.peek());
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

export default block;

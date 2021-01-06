/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable max-classes-per-file */

const block = {
  1() {
    const Node = this[4]();
    return class SinglyLinkedList {
      // Lo que hacemos es generar la cabeza de la lista apenas instanciamos la clase
      constructor(value) {
        this.head = new Node(value);
        // Como sólo existe la cabeza, entonces sólo hay un valor, eso quiere decir que la cabeza es también la cola, ya que es el primero y último elemento al ser el único.
        this.tail = this.head;
        // Cómo sólo hay un elemento, entonces el largo de la lista es igual a 1
        this.length = 1;
      }

      // Nos permite añadir un elemento al final de la lista para que pase a ocupar la cola
      append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length += 1;
        return this;
      }

      // Nos permite añadir un elemento al principio de la lista para que pase a ocupar la cabeza
      prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length += 1;
      }

      // Nos permite insertar un nodo en algún índice de la lista
      insert(index, value) {
        if (index >= this.length) {
          return this.append(value);
        }
        const newNode = new Node(value);
        const firstPointer = this.getNodeByIndex(index - 1);
        const holdingPointer = firstPointer.next;
        firstPointer.next = newNode;
        newNode.next = holdingPointer;
        this.length += 1;
        return this;
      }

      // Nos permite obtener un nodo a partir de un index
      getNodeByIndex(index) {
        let counter = 0;
        let currentNode = this.head;

        while (counter !== index) {
          currentNode = currentNode.next;
          counter += 1;
        }

        return currentNode;
      }

      // Nos permite eliminar un nodo de la lista
      remove(index) {
        const firstPointer = this.getNodeByIndex(index - 1);
        const nextPointer = this.getNodeByIndex(index + 1);
        firstPointer.next = nextPointer;
        this.length -= 1;
        return this;
      }
    };
  },
  2() {
    const SinglyLinkedList = this[1]();

    return () => {
      const linkedList = new SinglyLinkedList(1);
      linkedList.append(2);
      linkedList.append(4);
      linkedList.prepend(0);
      linkedList.insert(3, 3);
      linkedList.remove(3);
      console.log(linkedList);
    };
  },
  3() {
    return () => {
      const singlyLinkedList = {
        head: {
          value: 1,
          next: {
            value: 2,
            next: {
              value: 3,
              next: {
                value: 4,
                next: {
                  value: 5,
                  next: {
                    value: 6,
                    next: null,
                  },
                },
              },
            },
          },
        },
      };
    };
  },
  4() {
    return class Node {
      // Lo que hacemos es generar la cabeza de la lista apenas instanciamos la clase
      constructor(value) {
        this.value = value;
        this.next = null;
      }
    };
  },
  5() {
    return () => {
      this.head = new Node(value);
      this.tail = this.head;
    };
  },
  6() {
    return () => {
      this.tail.next = newNode;
    };
  },
  7() {
    return () => {
      this.tail = newNode;
    };
  },
  8() {
    return () => {
      this.head = {
        value,
        next: null,
      };
      this.tail = { ...this.head };
    };
  },
  9() {
    const Node = this[10]();
    return class DoubleLinkedList {
      constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
      }

      // Nos permite añadir un elemento al final de la lista para que pase a ocupar la cola
      append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length += 1;
        return this;
      }

      // Nos permite añadir un elemento al principio de la lista para que pase a ocupar la cabeza
      prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length += 1;
      }

      // Nos permite insertar un nodo en algún índice de la lista
      insert(index, value) {
        if (index >= this.length) {
          return this.append(value);
        }
        const newNode = new Node(value);
        const firstPointer = this.getNodeByIndex(index - 1);
        const holdingPointer = firstPointer.next;
        firstPointer.next = newNode;
        newNode.prev = firstPointer;
        newNode.next = holdingPointer;
        holdingPointer.prev = newNode;
        this.length += 1;
        return this;
      }

      // Nos permite obtener un nodo a partir de un index
      getNodeByIndex(index) {
        let counter = 0;
        let currentNode = this.head;

        while (counter !== index) {
          currentNode = currentNode.next;
          counter += 1;
        }

        return currentNode;
      }

      // Nos permite eliminar un nodo de la lista
      remove(index) {
        const firstPointer = this.getNodeByIndex(index - 1);
        const nextPointer = this.getNodeByIndex(index + 1);
        firstPointer.next = nextPointer;
        nextPointer.prev = firstPointer;
        this.length -= 1;
        return this;
      }
    };
  },
  10() {
    return class Node {
      constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
      }
    };
  },
  11() {
    const DoubleLinkedList = this[9]();
    return () => {
      const doubleLinkedList = new DoubleLinkedList(1);
      doubleLinkedList.append(2);
      doubleLinkedList.prepend(0);
      doubleLinkedList.append(4);
      console.log(doubleLinkedList);
      doubleLinkedList.insert(3, 3);
      console.log(doubleLinkedList);
      doubleLinkedList.remove(3);
      console.log(doubleLinkedList);
    };
  },
};

export default block;

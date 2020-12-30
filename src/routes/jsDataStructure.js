import {
  ArrayAndStrings,
  Graphs,
  HashTable,
  IntroductionToDataStructures,
  LinkedList,
  Queues,
  Stacks,
  Trees,
} from '../modules/jsDataStructures';

const arraysAndStringsPath = () => '/estructuras-de-datos-en-js/arrays-y-strings';
const arraysAndStringsTitle = 'Arrays y strings';

const graphsPath = () => '/estructuras-de-datos-en-js/graphs';
const graphsTitle = 'Graphs';

const hashTablePath = () => '/estructuras-de-datos-en-js/hash-table';
const hashTableTitle = 'Hash Table';

const introductionToDataStructurePath = () => '/estructuras-de-datos-en-js/introduccion-a-las-estructuras-de-datos';
const introductionToDataStructureTitle = 'Introducción a las estructuras de datos en JS';

const linkedListPath = () => '/estructuras-de-datos-en-js/linked-list';
const linkedListTitle = 'Linked List';

const queuesPath = () => '/estructuras-de-datos-en-js/queues';
const queuesTitle = 'Queues';

const stacksPath = () => '/estructuras-de-datos-en-js/stacks';
const stacksTitle = 'Stacks';

const treesPath = () => '/estructuras-de-datos-en-js/arboles';
const treesTitle = 'Trees';

export default [
  {
    path: introductionToDataStructurePath,
    title: introductionToDataStructureTitle,
    father: 1,
    element: IntroductionToDataStructures,
    id: 2,
  },
  {
    path: arraysAndStringsPath,
    title: arraysAndStringsTitle,
    father: 1,
    element: ArrayAndStrings,
    id: 3,
  },
  {
    path: hashTablePath,
    title: hashTableTitle,
    father: 1,
    element: HashTable,
    id: 4,
  },
  {
    path: linkedListPath,
    title: linkedListTitle,
    father: 1,
    element: LinkedList,
    id: 5,
  },
  {
    path: stacksPath,
    title: stacksTitle,
    father: 1,
    element: Stacks,
    id: 6,
  },
  {
    path: queuesPath,
    title: queuesTitle,
    father: 1,
    element: Queues,
    id: 7,
  },
  {
    path: graphsPath,
    title: graphsTitle,
    father: 1,
    element: Graphs,
    id: 8,
  },
  {
    path: treesPath,
    title: treesTitle,
    father: 1,
    element: Trees,
    id: 9,
  },
];

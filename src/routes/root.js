import { Root } from '../modules/root';

const modulesPath = () => '/';
const modulesTitle = 'Modules';

const jsStructureTitle = 'Estructuras de datos en JS';
const introductionToDesign = 'Introducción al diseño';

export default [
  {
    path: modulesPath,
    title: modulesTitle,
    father: null,
    element: Root,
    id: 0,
  },
  {
    title: jsStructureTitle,
    father: 0,
    id: 1,
  },
  {
    title: introductionToDesign,
    father: 0,
    id: 10,
  },
];

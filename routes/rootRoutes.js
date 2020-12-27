import { Root, FinalHtmlAndCssCourse } from '../modules/index.js';

const modulesPath = () => '/';
const modulesTitle = 'Modules';

const finalHtmlAndCssCoursePath = () => '/curso-definitivo-de-html-y-css';
const finalHtmlAndCssCourseTitle = 'Curso definitivo de HTML y CSS';

const rootRoutes = [
  {
    path: modulesPath,
    title: modulesTitle,
    father: null,
    element: Root,
    id: '0',
  },
  {
    path: finalHtmlAndCssCoursePath,
    title: finalHtmlAndCssCourseTitle,
    father: '0',
    element: FinalHtmlAndCssCourse,
    id: '1',
  },
];

export default rootRoutes;

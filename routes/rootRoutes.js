import { createRoot, createFinalHtmlAndCssCourse } from '../modules/index.js';

const modulesPath = () => '/';
const MODULES_TITLE = 'Modules';

const finalHtmlAndCssCoursePath = () => '/final-html-and-css-course';
const FINAL_HTML_AND_CSS_COURSE_TITLE = 'Curso definitivo de HTML y CSS';

const rootRoutes = [
  {
    path: modulesPath,
    title: MODULES_TITLE,
    father: null,
    element: createRoot,
    id: '0',
  },
  {
    path: finalHtmlAndCssCoursePath,
    title: FINAL_HTML_AND_CSS_COURSE_TITLE,
    father: '0',
    element: createFinalHtmlAndCssCourse,
    id: '1',
  },
];

export default rootRoutes;

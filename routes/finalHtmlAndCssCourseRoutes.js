import { createFrontend } from '../modules/index.js';

export const frontendPath = () => '/final-html-and-css-course/que-hace-un-front';
export const FRONTEND_TITLE = '¿Qué hace un front?';

const finalHtmlAndCssCourseRoutes = [
  {
    path: frontendPath,
    title: FRONTEND_TITLE,
    father: '1',
    element: createFrontend,
    id: '2',
  },
];

export default finalHtmlAndCssCourseRoutes;

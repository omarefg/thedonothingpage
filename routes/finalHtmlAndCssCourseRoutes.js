import { createFinalHtmlAndCssCourse } from '../modules/index.js';

export const finalHtmlAndCssCoursePath = () => '/final-html-and-css-course';
export const FINAL_HTML_AND_CSS_COURSE_TITLE = 'Curso definitivo de HTML y CSS';

const finalHtmlAndCssCourseRoutes = [
  {
    path: finalHtmlAndCssCoursePath,
    title: FINAL_HTML_AND_CSS_COURSE_TITLE,
    father: '0',
    element: createFinalHtmlAndCssCourse,
    id: '1',
  },
];

export default finalHtmlAndCssCourseRoutes;

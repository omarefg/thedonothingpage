import { FinalHtmlAndCssCourseFundamentals, FinalHtmlAndCssCourseHtml } from '../modules';

export const fundamentalsPath = () => '/curso-definitivo-de-html-y-css/fundamentos';
export const fundamentalsTitle = 'Fundamentos';

export const htmlPath = () => '/curso-definitivo-de-html-y-css/html';
export const htmlTitle = 'HTML';

const finalHtmlAndCssCourseRoutes = [
  {
    path: fundamentalsPath,
    title: fundamentalsTitle,
    father: '1',
    element: FinalHtmlAndCssCourseFundamentals,
    id: '2',
  },
  {
    path: htmlPath,
    title: htmlTitle,
    father: '1',
    element: FinalHtmlAndCssCourseHtml,
    id: '3',
  },
];

export default finalHtmlAndCssCourseRoutes;

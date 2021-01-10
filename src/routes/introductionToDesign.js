import {
  Color,
  Composition,
  DesignPrinciples,
  DigitalImage,
  DiProject,
  DiRoutes,
  Formats,
  Hierarchy,
  IntroductionToDesign,
  Typography,
} from '../modules/designIntroduction';

const colorPath = () => '/introduccion-al-diseno/color';
const colorTitle = 'Color';

const compositionPath = () => '/introduccion-al-diseno/composicion';
const compositionTitle = 'Composición';

const designPrinciplesPath = () => '/introduccion-al-diseno/principios-del-diseño';
const designPrinciplesTitle = 'Principios del diseño';

const digitalImagePath = () => '/introduccion-al-diseno/imagen-digital';
const digitalImageTitle = 'Imagen Digital';

const diProjectPath = () => '/introduccion-al-diseno/proyectos-de-fundamentos-de-diseño';
const diProjectTitle = 'Proyectos de Fundamentos de Diseño';

const diRoutesPath = () => '/introduccion-al-diseno/rutas-profesionales-en-diseño';
const diRoutesTitle = 'Rutas Profesionales en Diseño';

const formatsPath = () => '/introduccion-al-diseno/formatos';
const formatsTitle = 'Formatos';

const hierarchyPath = () => '/introduccion-al-diseno/jerarquia';
const hierarchyTitle = 'Jerarquía';

const introductionToDesignPath = () => '/introduccion-al-diseno/introduccion-al-diseno';
const introductionToDesignTitle = 'Introducción al Diseño';

const tipographyPath = () => '/introduccion-al-diseno/tipografia';
const tipographyTitle = 'Tipografía';

export default [
  {
    path: introductionToDesignPath,
    title: introductionToDesignTitle,
    father: 10,
    element: IntroductionToDesign,
    id: 11,
  },
  {
    path: designPrinciplesPath,
    title: designPrinciplesTitle,
    father: 10,
    element: DesignPrinciples,
    id: 15,
  },
  {
    path: compositionPath,
    title: compositionTitle,
    father: 10,
    element: Composition,
    id: 19,
  },
  {
    path: hierarchyPath,
    title: hierarchyTitle,
    father: 10,
    element: Hierarchy,
    id: 20,
  },
  {
    path: formatsPath,
    title: formatsTitle,
    father: 10,
    element: Formats,
    id: 17,
  },
  {
    path: digitalImagePath,
    title: digitalImageTitle,
    father: 10,
    element: DigitalImage,
    id: 12,
  },
  {
    path: colorPath,
    title: colorTitle,
    father: 10,
    element: Color,
    id: 14,
  },
  {
    path: tipographyPath,
    title: tipographyTitle,
    father: 10,
    element: Typography,
    id: 13,
  },
  {
    path: diProjectPath,
    title: diProjectTitle,
    father: 10,
    element: DiProject,
    id: 16,
  },
  {
    path: diRoutesPath,
    title: diRoutesTitle,
    father: 10,
    element: DiRoutes,
    id: 18,
  },
];

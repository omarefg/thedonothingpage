import { createRoot } from '../modules/index.js';

export const modulesPath = () => '/';
export const MODULES_TITLE = 'Modules';

const rootRoutes = [
  {
    path: modulesPath,
    title: MODULES_TITLE,
    father: null,
    element: createRoot,
    id: '0',
  },
];

export default rootRoutes;

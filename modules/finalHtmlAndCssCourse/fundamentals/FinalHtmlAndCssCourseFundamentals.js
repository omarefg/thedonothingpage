import { Topic } from './elements/index.js';

function addSection({
  title,
  description,
  rootElement,
  topics,
}) {
  const sectionTitle = document.createElement('h1');
  const sectionDescription = document.createElement('p');
  const sectionContainer = document.createElement('section');
  const topicsContainer = document.createElement('div');

  topics.forEach((topic) => { topicsContainer.appendChild(Topic(topic)); });

  sectionContainer.classList.add(
    'container',
    'mx-auto',
    'p-8',
    'shadow-md',
    'rounded-md',
    'my-8',
    'bg-white',
    'max-w-screen-lg',
  );
  sectionTitle.classList.add('text-3xl', 'text-center', 'font-bold');
  sectionDescription.classList.add('text-center', 'my-4');
  topicsContainer.classList.add('flex', 'justify-center', 'flex-wrap', 'items-start');

  sectionTitle.innerText = title;
  sectionDescription.innerText = description;

  sectionContainer.appendChild(sectionTitle);
  sectionContainer.appendChild(sectionDescription);
  sectionContainer.appendChild(topicsContainer);
  rootElement.appendChild(sectionContainer);
}

export function FinalHtmlAndCssCourseFundamentals() {
  const main = document.createElement('main');
  addSection({
    title: '¿Qué hace un Frontend?',
    rootElement: main,
    description: 'Trabaja las tecnologías del lado del cliente (navegador)',
    topics: [
      {
        title: 'Estándares',
        content: ['HTML', 'CSS', 'JS'],
      },
      {
        title: 'Frameworks de CSS',
        content: ['Bootstrap', 'Material', 'Foundation'],
      },
      {
        title: 'Frameworks y librerías de JS',
        content: ['Vue', 'React', 'Angular'],
      },
      {
        title: 'Preprocesadores de CSS',
        content: ['SASS', 'LESS', 'Stylus'],
      },
      {
        title: 'Empaquetadores de JS',
        content: ['Babel', 'Webpack'],
      },
    ],
  });
  addSection({
    title: '¿Qué hace un Backend?',
    rootElement: main,
    description: 'Trabaja la lógica del lado del servidor cada vez que el cliente hace una petición',
    topics: [
      {
        title: 'Lenguajes',
        content: ['Node', 'Python', 'PHP', '.NET', 'Ruby', 'Go', 'Java'],
      },
      {
        title: 'Framework',
        content: ['Django', 'Laravel', 'Rails', 'Express', 'Spring'],
      },
      {
        title: 'Infraestructura',
        content: ['Google Cloud', 'Digital Ocean', 'AWS', 'Heroku'],
      },
      {
        title: 'Bases de datos',
        content: ['Mongo', 'MySQL', 'PostgreSQL'],
      },
    ],
  });
  addSection({
    title: '¿Qué hace un Full Stack?',
    rootElement: main,
    description: 'Maneja todo el stack tecnológico pero tiene un área de especialidad',
    topics: [],
  });
  addSection({
    title: 'Página dinámica vs Página estática',
    rootElement: main,
    description: '',
    topics: [
      {
        title: 'Página estáticas',
        content: ['Información estática', 'Páginas informativas', 'Landing Pages'],
      },
      {
        title: 'Páginas dinámicas',
        content: ['Web Apps', 'BBDD'],
      },
    ],
  });
  return main;
}

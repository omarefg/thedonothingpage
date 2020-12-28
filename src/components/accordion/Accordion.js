import { Link } from '../link/Link';

export function Accordion({ title, children, onChildClick }) {
  const container = document.createElement('details');
  const summary = document.createElement('summary');
  const linksContainer = document.createElement('ul');
  summary.innerText = title;
  container.appendChild(summary);
  children.forEach(({ title: childrenTitle, path }) => {
    const li = document.createElement('li');
    li.appendChild(Link({
      title: childrenTitle,
      onClick: () => onChildClick(path),
    }));
    linksContainer.appendChild(li);
  });
  container.appendChild(linksContainer);
  return container;
}

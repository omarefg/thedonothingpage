import { Link } from './Link.js';

export function List({ data, onItemClick }) {
  const ul = document.createElement('ul');
  data.forEach(({ title, path }) => {
    ul.appendChild(Link({
      title,
      onClick: () => onItemClick(path),
    }));
  });
  return ul;
}

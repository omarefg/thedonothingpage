import { createLink } from './link.js';

export const createList = ({ data, onItemClick }) => {
  const ul = document.createElement('ul');
  data.forEach(({ title, path }) => {
    ul.appendChild(createLink({
      title,
      onClick: () => onItemClick(path),
    }));
  });
  return ul;
};

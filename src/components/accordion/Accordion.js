import { Component } from '../../decorators';
import { Link } from '../link/Link';
import styles from './Accordion.module.scss';

function AccordionComponent(props) {
  const { title, children, onChildClick } = this.getProps(props, this.defaultProps);

  const container = document.createElement('details');
  const summary = document.createElement('summary');
  const linksContainer = document.createElement('ul');

  summary.innerText = title;
  summary.classList.add(styles.summary);

  container.appendChild(summary);

  children.forEach(({ title: childrenTitle, path }) => {
    const li = document.createElement('li');
    li.appendChild(Link({
      title: childrenTitle,
      onClick: () => onChildClick(path),
      classList: [styles.anchor],
    }));
    linksContainer.appendChild(li);
  });
  container.appendChild(linksContainer);

  return container;
}

export const Accordion = new Component(AccordionComponent, {
  defaultProps: {
    title: '',
    children: [],
    onChildClick: () => {},
  },
});

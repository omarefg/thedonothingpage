import { Component } from '../../decorators';
import { Link } from '../link/Link';

function AccordionComponent(props) {
  const container = document.createElement('details');
  const summary = document.createElement('summary');
  const linksContainer = document.createElement('ul');
  const { title, children, onChildClick } = this.getProps(props, this.defaultProps);
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

export const Accordion = new Component(AccordionComponent, {
  defaultProps: {
    title: '',
    children: [],
    onChildClick: () => {},
  },
});

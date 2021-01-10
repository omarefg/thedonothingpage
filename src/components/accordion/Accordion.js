import Miru from '@omarefg/miru';
import { Link } from '../link/Link';
import styles from './Accordion.module.scss';

function View() {
  const {
    title, children, onChildClick,
  } = this.props;
  const { isOpen } = this.state;

  const container = document.createElement('details');
  const summary = document.createElement('summary');
  const linksContainer = document.createElement('ul');

  summary.innerText = title;
  summary.classList.add(styles.summary);
  container.open = isOpen;
  container.addEventListener('toggle', this.onOpen);

  container.appendChild(summary);

  children.forEach(({ title: childrenTitle, path }) => {
    const li = document.createElement('li');
    li.setAttribute('data-path', path());
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

/**
 * Accordion component
 * @param {{
 *  title: string,
 *  children: any[],
 *  onChildClick: Function
 * }} props - The props to receive
 * @author Omar Flores <dev@omarefg.com>
 */
export const Accordion = (props) => new Miru(View, {
  props,
  defaultProps: {
    title: '',
    children: [],
    onChildClick: () => {},
  },
  handlers: {
    onOpen(event) {
      const { title } = props;
      if (title) {
        localStorage.setItem(`section-${title.replaceAll(' ', '')}`, Number(event.target.open));
      }
    },
  },
  state: {
    isOpen: props.title ? Boolean(Number(localStorage.getItem(`section-${props.title.replaceAll(' ', '')}`))) : false,
  },
});

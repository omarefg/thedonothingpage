import Miru from '@omarefg/miru';
import styles from './Root.module.scss';

function View() {
  const container = document.createElement('div');
  container.innerHTML = `
    <div class="${styles.sticker}">
      <div class="${styles.innerSticker}">
        <h1 class="${styles.title}">THE DO NOTHING PAGE</h1>
        <hr class="${styles.line}"/>
        <hr class="${styles.line}"/>
        <p class="${styles.text}">100 sheets • 200 pages</p>
        <p class="${styles.text}">9¾ x 7¼ in/24.7 x 18.4 cm</p>
      </div>
    </div>
  `;

  container.classList.add(styles.container);
  return container;
}

export const Root = (props) => new Miru(View, {
  props,
  defaultProps: {},
});

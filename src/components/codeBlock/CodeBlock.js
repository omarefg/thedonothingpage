import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import Miru from '@omarefg/miru';
import styles from './CodeBlock.module.scss';

function View() {
  const { code, language } = this.props;
  const container = document.createElement('pre');
  container.classList.add(language, styles.container);
  container.innerHTML = `<code class="${language}">${Prism.highlight(code, Prism.languages.javascript, 'javascript')}</code>`;
  return container;
}

/**
 * CodeBlock component
 * @param {{
 *  code: string,
 *  language: string
 * }} props
 * @author Omar Flores <dev@omarefg.com>
 */
export const CodeBlock = (props) => new Miru(View, {
  props,
  defaultProps: {
    code: '',
    language: 'language-javascript',
  },
});

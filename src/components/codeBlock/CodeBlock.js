import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import { Component } from '../../decorators';
import styles from './CodeBlock.module.scss';

function View() {
  const { code, language } = this.props;
  const container = document.createElement('pre');
  container.classList.add(language, styles.container);
  container.innerHTML = `
    <code class="${language}">
      ${Prism.highlight(code, Prism.languages.javascript, 'javascript')}
    </code>
  `;
  return container;
}

export const CodeBlock = (props) => new Component(View, {
  props,
  defaultProps: {
    code: '',
    language: 'language-javascript',
  },
});

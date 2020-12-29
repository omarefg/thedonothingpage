import lodash from 'lodash';

function setHandlers(handlers) {
  if (lodash.isPlainObject(handlers)) {
    Object.keys(handlers).forEach((key) => {
      if (this[key] !== undefined) {
        throw new Error(`Cannot set handler ${key}, it's already declared in the instance.`);
      }
      this[key] = handlers[key].bind(this);
    });
  }
}

function setProps(props = {}, defaultProps = {}) {
  const resultingProps = {};
  Object.keys({ ...defaultProps, ...props }).forEach((key) => {
    resultingProps[key] = props[key] || defaultProps[key];
  });
  this.props = resultingProps;
}

/**
 *
 * @param {function} view
 * @param {{
 *  props: {},
 *  defaultProps: {},
 *  handlers: {}
 * }} config
 */
export function Component(view, config = {}) {
  setProps.bind(this)(config.props, config.defaultProps);
  setHandlers.bind(this)(config.handlers);

  return view.bind(this)();
}

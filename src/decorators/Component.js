/**
 *
 * @param {function} component
 * @param {{ defaultProps: {} }} config
 */
export function Component(component, config = {}) {
  Object.keys(config).forEach((key) => {
    if (config[key] !== undefined) {
      this[key] = config[key];
    }
  });

  return component.bind(this);
}

Component.prototype.getProps = (props = {}, defaultProps = {}) => {
  const resultingProps = {};
  Object.keys({ ...defaultProps, ...props }).forEach((key) => {
    resultingProps[key] = props[key] || defaultProps[key];
  });
  return resultingProps;
};

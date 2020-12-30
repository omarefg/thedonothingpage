/* eslint-disable no-underscore-dangle */
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

function setInitialState(state = {}) {
  this.state = state;
}

/**
 *
 * @param {function} view
 * @param {{
 *  props: {},
 *  defaultProps: {},
 *  handlers: {},
 *  state: {},
 *  onMount: function
 * }} config
 */
export function Component(view, config = {}) {
  setProps.bind(this)(config.props, config.defaultProps);
  setHandlers.bind(this)(config.handlers);
  setInitialState.bind(this)(config.state);
  this.__viewReferenceNode__ = view.bind(this)();
  this.__viewReferenceDef__ = view.bind(this);
  if (config.onMount) {
    config.onMount.bind(this)();
  }

  return this.__viewReferenceNode__;
}

Component.prototype.setState = function setState(state) {
  if (!state) {
    throw new Error('Cannot set an empty state');
  }
  if (!lodash.isPlainObject(state)) {
    throw new Error('State must be a plain object');
  }

  this.state = { ...this.state, ...state };

  const parent = this.__viewReferenceNode__.parentNode;
  const newReference = this.__viewReferenceDef__();
  parent.replaceChild(newReference, this.__viewReferenceNode__);
  this.__viewReferenceNode__ = newReference;
};

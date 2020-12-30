import Miru from '@omarefg/miru';

function View() {
  const { size, className } = this.props;
  const icon = document.createElement('i');
  icon.style.fontSize = size;
  icon.className = className;

  return icon;
}

export const Icon = (props) => new Miru(View, {
  props,
  defaultProps: {
    className: '',
    size: '2rem',
  },
});

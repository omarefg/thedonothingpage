import Miru from '@omarefg/miru';

function View() {
  const {
    size,
    color,
    xmlns,
    viewBox,
  } = this.props;
  const icon = document.createElementNS(xmlns, 'svg');
  const path = document.createElementNS(xmlns, 'path');

  path.setAttributeNS(null, 'd', 'M16 5H0V4h16v1zm0 8H0v-1h16v1zm0-4.008H0V8h16v.992z');
  icon.setAttributeNS(null, 'width', size);
  icon.setAttributeNS(null, 'height', size);
  icon.setAttributeNS(null, 'viewBox', viewBox);
  icon.setAttributeNS(null, 'fill', color);
  icon.appendChild(path);

  return icon;
}

export const MenuIcon = (props) => new Miru(View, {
  props,
  defaultProps: {
    size: '16',
    color: 'currentColor',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 16 16',
  },
});

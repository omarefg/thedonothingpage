import { Component } from '../../decorators';
import { MenuIcon } from '../menuIcon/MenuIcon';
import { PanelController } from '../panelController/PanelController';
import styles from './SideBarController.module.scss';

function View() {
  const controller = document.createElement('button');
  controller.classList.add(styles.controller);
  controller.addEventListener('click', this.onControllerClick);
  controller.appendChild(MenuIcon({ size: '24', color: styles.colorFontMain }));
  return controller;
}

export const SideBarController = (props) => new Component(View, {
  props,
  defaultProps: {
    sideBar: null,
  },
  handlers: {
    onControllerClick() {
      const { sideBar } = this.props;
      sideBar.classList.toggle(styles.sideBarOpen);
      document.body.appendChild(PanelController({ onClick: this.onPanelClick }));
    },
    onPanelClick() {
      const { sideBar } = this.props;
      sideBar.classList.toggle(styles.sideBarOpen);
    },
  },
});

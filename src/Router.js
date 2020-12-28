import { SideBar, MainContent } from './components';
import routes from './routes/routes';

export default class Router {
  constructor() {
    this.routes = routes;
    this.instance = null;
    this.sidebar = SideBar({ router: this, routes });
    this.content = MainContent();
    this.app = document.querySelector('[data-app]');
    this.app.appendChild(this.sidebar);
    this.app.appendChild(this.content);

    window.addEventListener('popstate', () => this.paintCurrentPage({ useReplace: true, forceUpdate: true }));
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new Router();
    }
    return this.instance;
  }

  paintCurrentPage({ useReplace, forceUpdate }) {
    this.goTo({ url: window.location.pathname, useReplace, forceUpdate });
  }

  getMatchedRoute(url) {
    return this.routes.find(({ path }) => path() === url);
  }

  goTo({ url, useReplace, forceUpdate }) {
    if (url !== window.location.pathname || forceUpdate) {
      const matchedRoute = this.getMatchedRoute(url);
      if (useReplace) {
        window.history.replaceState({}, '', url);
      } else {
        window.history.pushState({}, '', url);
      }
      this.content.innerHTML = '';

      const element = matchedRoute.element({
        router: this,
        routeId: matchedRoute.id,
        main: this.content,
      });

      if (typeof element === 'string') {
        this.content.innerHTML = element;
        return;
      }

      this.content.appendChild(element);
    }
  }

  get getRoutes() {
    return this.routes;
  }
}

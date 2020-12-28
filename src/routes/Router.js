import routes from './routes.js';

export default class Router {
  constructor() {
    this.routes = routes;
    this.instance = null;
    this.sidebar = document.createElement('nav');
    this.content = document.createElement('main');
    this.app = document.querySelector('[data-app]');
    this.app.appendChild(this.sidebar);
    this.app.appendChild(this.content);

    window.addEventListener('popstate', () => {
      this.goTo({
        url: window.location.pathname,
        useReplace: true,
      });
    });
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new Router();
    }
    return this.instance;
  }

  paintCurrentRoute() {
    this.goTo({ url: window.location.pathname });
  }

  getMatchedRoute(url) {
    return this.routes.find(({ path }) => path() === url);
  }

  goTo({ url, useReplace }) {
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
    });

    if (typeof element === 'string') {
      this.content.innerHTML = element;
      return;
    }

    this.content.appendChild(element);
  }

  get getRoutes() {
    return this.routes;
  }
}

import routes from './routes.js';

export default class Router {
  constructor() {
    this.routes = routes;
    this.instance = null;

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
    const app = document.querySelector('[data-app]');
    app.innerHTML = '';
    app.appendChild(matchedRoute.element({
      router: this,
      routeId: matchedRoute.id,
    }));
  }

  get getRoutes() {
    return this.routes;
  }
}

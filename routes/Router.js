import routes from './routes.js';

export default class Router {
  constructor() {
    this.routes = routes;
    this.instance = null;

    window.addEventListener('popstate', () => {
      this.paintCurrentRoute();
    });
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new Router();
    }
    return this.instance;
  }

  paintCurrentRoute() {
    this.goTo(window.location.pathname);
  }

  getMatchedRoute(url) {
    return this.routes.find(({ path }) => path() === url);
  }

  goTo(url) {
    const matchedRoute = this.getMatchedRoute(url);
    window.history.pushState({}, '', url);
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

export default class Router {
  constructor(routes) {
    this.routes = routes;
    this.loadInitialRoute();
  }

  loadInitialRoute() {
    this.loadRoute(window.location.pathname);
  }

  matchUrlToRoute(url) {
    return this.routes.find(({ path }) => path === url);
  }

  loadRoute(url) {
    const matchedRoute = this.matchUrlToRoute(url);
    window.history.pushState({}, '', url);
    const routerOutElement = document.querySelectorAll('[data-router]')[0];
    routerOutElement.innerHTML = matchedRoute.template;
  }
}

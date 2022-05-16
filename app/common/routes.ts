import { Router, Application } from 'express';

export abstract class CommonRoutesConfig {

  router: Router;
  name: string;

  constructor(app: Application, name: string, route: string) {
    this.name = name;
    this.router = Router();
    this.configureRoutes();
    app.use(route, this.router);
  }
  getName(): string {
    return this.name;
  }
  abstract configureRoutes(): void;
  
}

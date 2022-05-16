import AppendRouteController from '../../controller/append/append.controller';
import { Application } from 'express';
import { CommonRoutesConfig } from '../../common/routes';

const { appendRouteParams } = AppendRouteController;

export class AppendRoutes extends CommonRoutesConfig {
  constructor(app: Application) {
    super(app, 'AppendRoutes', '/append');
  } 

  configureRoutes() {
    this.router.get('/', appendRouteParams);
  }
}

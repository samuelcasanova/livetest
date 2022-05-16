import GetReverseController from '../../controller/reverse/reverse.controller';
import { Application } from 'express';
import { CommonRoutesConfig } from '../../common/routes';

const { reverseParams } = GetReverseController;

export class GetReverseRoutes extends CommonRoutesConfig {
  constructor(app: Application) {
    super(app, 'GetReverseRoutes', '/reverse');
  } 

  configureRoutes() {
    this.router.get('/:id', reverseParams);
  }
}

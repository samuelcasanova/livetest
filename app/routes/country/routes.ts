import GetController from '../../controller/country/country.controller';
import { Application } from 'express';
import { CommonRoutesConfig } from '../../common/routes';

const { getData } = GetController;

export class GetCountryDataRoutes extends CommonRoutesConfig {
  constructor(app: Application) {
    super(app, 'GetCountryDataRoutes', '/countries');
  }

  configureRoutes() {
    this.router.get('/', getData);
  }
  
}

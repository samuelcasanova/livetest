import { Application } from 'express';
import { GetCountryDataRoutes } from '../routes/country/routes';
import { GetReverseRoutes } from '../routes/reverse/routes';
import { AppendRoutes } from "../routes/append/routes"

const configureRoutes = (app: Application) => {



  new GetCountryDataRoutes(app);
  new GetReverseRoutes(app);
  new AppendRoutes(app);
  
};
export default configureRoutes;

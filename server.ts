import { configureExpress, configureRoutes } from './app/config';

const PORT = process.env.PORT

const initializeApp = () => {

  const app = configureExpress();
  configureRoutes(app);

  app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
};

initializeApp();

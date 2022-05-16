import express, { Express } from 'express';
import cors from 'cors';

const configureExpress = () => {

  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  return app;

};

export default configureExpress;

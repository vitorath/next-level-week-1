import express from 'express';
import { UserController } from '@controllers/UserController';

const app = express();

app.get('/', (request, response) => {
  new UserController();
  return response.json({ message: 'Hello World' });
});

app.listen(3333);

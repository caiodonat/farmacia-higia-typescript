import express from 'express';
import routers from './routes';

const app = express();

app.use(routers);

app.listen(3333);
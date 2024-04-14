import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import router from './router/routes.js';
import authRouter from './router/authRoutes.js';

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use(router);
app.use(authRouter);

export default app;
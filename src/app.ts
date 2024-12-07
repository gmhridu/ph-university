import express, { Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use('/api/v1', router);


app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the PH University!');
});

// global error handler
app.use(globalErrorHandler);

// not found
app.use(notFound);

export default app;

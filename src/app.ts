import cors from 'cors';
import httpStatus from 'http-status';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';
import express, { Application, NextFunction, Request, Response } from 'express';
import cookieParser from 'cookie-parser';

const app: Application = express();

app.use(cors());
app.use(cookieParser());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', routes);

// Api route entry point
app.get('/', (req, res) => {
  const earthCleaner = `
  <div style="text-align: center; font-family: Poppins, sans-serif;">
      <p style="font-size: 10rem;"> 🌏💧🏝🌏</p>
      <p style="font-size: 35px;"> Welcome to Earth Cleaner Backend. </p>
  </div>
`;
  res.send(earthCleaner);
});

//global error handler
app.use(globalErrorHandler);

//handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});

export default app;

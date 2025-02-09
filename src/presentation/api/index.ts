import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

dotenv.config();

import product from './product';
import { clerkMiddleware } from '../middleware/clerk';

function main() {
  const app = express();
  const port = process.env.PORT || 4000;

  const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Your API',
        version: '1.0.0',
        description: 'Automatically generated Swagger documentation',
      },
      servers: [
        {
          url: `http://localhost:${port}/api/v1`,
        },
      ],
    },
    apis: ['./src/presentation/api/**/*.ts'],
  };

  const swaggerSpec = swaggerJsdoc(options);
  app.use(cors());
  app.use(express.json());
  app.use(clerkMiddleware);
  app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get('/', (req, res) => {
    return res.json({
      message: 'Hello TutTrue',
    });
  });

  const apiRouter = express.Router();

  apiRouter.use('/products', product);

  app.use('/api/v1', apiRouter);
  app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.use((err: any, req: Request, res: Response, _next: NextFunction) => {
    const statusCode = err.status || 500;
    
    res.status(statusCode).json({
      message: err.message || "Internal Server Error",
      stack: process.env.NODE_ENV === "production" ? null : err.stack,
    });
  });

  app.listen(port, () => {
    console.log(`Listening: http://localhost:${port}`);
  });
}

export default main;

import express from 'express';
import cors from 'cors';
import { errorMiddleware } from './middlewares/error.middleware';

export const app = express();

// Global middlewares 
app.use(cors());
app.use(express.json());

// Temporary health check route
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Error handling middleware (must be last)
app.use(errorMiddleware);
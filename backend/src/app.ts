import express from 'express';
import cors from 'cors';
import { errorMiddleware } from './middlewares/error.middleware';
import authRoutes from './modules/auth/auth.routes';


export const app = express();

// Global middlewares 
app.use(cors());
app.use(express.json());
// Auth routes
app.use('/auth', authRoutes);


// Temporary health check route
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Error handling middleware (must be last)
app.use(errorMiddleware);
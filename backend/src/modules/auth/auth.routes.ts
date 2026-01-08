import { Router } from 'express';
import { register, login } from './auth.controller';
import { authMiddleware } from '../../middlewares/auth.middleware';
import { getMe } from './auth.me.controller';


const router = Router();

/**
 * Authentication routes.
 * Routes only delegate HTTP requests to controllers.
 */

// POST /auth/register
router.post('/register', register);

// POST /auth/login
router.post('/login', login);

// GET /auth/me
// Protected route to verify authentication middleware
// GET /auth/me
router.get('/me', authMiddleware, getMe);




export default router;


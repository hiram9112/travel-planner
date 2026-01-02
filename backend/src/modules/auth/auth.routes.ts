import { Router } from 'express';
import { register, login } from './auth.controller';

const router = Router();

/**
 * Authentication routes.
 * Routes only delegate HTTP requests to controllers.
 */

// POST /auth/register
router.post('/register', register);

// POST /auth/login
router.post('/login', login);

export default router;

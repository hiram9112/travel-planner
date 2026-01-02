import { Request, Response, NextFunction } from 'express';
import { registerUser, loginUser } from './auth.service';

/**
 * Handle user registration HTTP request.
 */
export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await registerUser();
    res.status(501).json({ message: 'Register not implemented yet' });
  } catch (error) {
    next(error);
  }
};

/**
 * Handle user login HTTP request.
 */
export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await loginUser();
    res.status(501).json({ message: 'Login not implemented yet' });
  } catch (error) {
    next(error);
  }
};

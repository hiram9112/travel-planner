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
    const { email, password } = req.body;

    const user = await registerUser({ email, password });

    res.status(201).json({
      id: user.id,
      email: user.email,
    });
  }  catch (error) {
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

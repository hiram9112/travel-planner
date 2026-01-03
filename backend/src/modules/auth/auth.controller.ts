import { Request, Response, NextFunction } from 'express';
import { registerUser, loginUser } from './auth.service';
import { registerSchema, loginSchema } from './auth.schemas';


/**
 * Handle user registration HTTP request.
 * Validates input using Zod and delegates business logic to the auth service.
 */
export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const parsedBody = registerSchema.parse(req.body);

    const user = await registerUser(parsedBody);

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
    const parsedBody = loginSchema.parse(req.body);

    const user = await loginUser(parsedBody);

    res.status(200).json({
      id: user.id,
      email: user.email,
    });
  } catch (error) {
    next(error);
  }
};

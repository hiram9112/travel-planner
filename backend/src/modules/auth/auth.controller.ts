import { Request, Response } from 'express';

/**
 * Handle user registration.
 * This controller receives the HTTP request and returns a response.
 * Business logic will be added later via a service layer.
 */
export const register = async (req: Request, res: Response) => {
  res.status(501).json({ message: 'Register not implemented yet' });
};

/**
 * Handle user login.
 * This controller receives the HTTP request and returns a response.
 * Business logic will be added later via a service layer.
 */
export const login = async (req: Request, res: Response) => {
  res.status(501).json({ message: 'Login not implemented yet' });
};

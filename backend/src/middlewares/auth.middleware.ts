import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

/**
 * Authentication middleware.
 * Verifies the JWT token sent by the client and attaches the user data
 * to the request object if the token is valid.
 */
export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: 'Authorization header missing' });
    }

    const [, token] = authHeader.split(' ');

    if (!token) {
      return res.status(401).json({ message: 'Token missing' });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as { userId: string };

    // Attach user information to the request object
    req.user = { id: decoded.userId };

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};

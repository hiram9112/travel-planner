import { Request, Response } from 'express';

/**
 * Return authenticated user information.
 * This controller assumes authMiddleware has already run.
 */
export const getMe = (req: Request, res: Response) => {
  res.status(200).json({
    userId: req.user?.id,
  });
};

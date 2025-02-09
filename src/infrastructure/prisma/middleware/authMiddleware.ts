import { Request, Response, NextFunction } from 'express';

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  try {

    if (!req.auth || !req.auth.userId)
      return res.status(401).json({ message: 'Unauthorized: Please log in.' });
    
    next();
  } catch (error) {
    return res.status(500).json({ message: 'Authentication error', error });
  }
};


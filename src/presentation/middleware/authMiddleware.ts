import { Request, Response, NextFunction } from "express";
import { AuthObject } from "@clerk/backend";

interface AuthenticatedRequest extends Request {
  auth?: AuthObject;
}

export const isAuthenticated = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    if (!req.auth || !req.auth.userId) {
      return res.status(401).json({ message: "Unauthorized: Please log in." });
    }

    if (!req.auth.sessionId) {
      return res.status(401).json({ message: "Session expired. Please log in again." });
    }
    next();
  } catch (error) {
    return res.status(500).json({ message: "Authentication error", error });
  }
};

import { AuthObject } from '@clerk/clerk-sdk-node';
import 'express';

declare module 'express' {
  interface Request {
    auth?: AuthObject;
  }
}

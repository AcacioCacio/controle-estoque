import { Request } from 'express';
import { UserDocument } from '../../user/entities/user.document';

export interface AuthRequest extends Request {
  user: UserDocument;
}

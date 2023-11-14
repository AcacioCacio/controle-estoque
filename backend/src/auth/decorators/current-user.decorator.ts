import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserDocument } from 'src/user/entities/user.document';
import { AuthRequest } from '../models/AuthRequest';

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): UserDocument => {
    const request = context.switchToHttp().getRequest<AuthRequest>();

    return request.user;
  },
);

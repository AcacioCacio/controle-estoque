import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { UnauthorizedError } from './err/unauthorized.error';
import { UserDocument } from 'src/user/entities/user.document';
import { UserPayload } from './models/UserPayload';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from './models/UserToken';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  login(user: UserDocument): UserToken {
    const payload: UserPayload = {
      email: user.email,
      name: user.name,
    };
    const jwtToken = this.jwtService.sign(payload);

    return {
      acess_token: jwtToken,
    };
  }

  async validateUser(email: string, password: string) {
    const user = await this.userService.findEmail(email);
    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (isPasswordValid) {
        return {
          ...user,
          password: undefined,
        };
      }
    }
    throw new UnauthorizedError(
      'Email address or password provided is incorrect.',
    );
  }
}

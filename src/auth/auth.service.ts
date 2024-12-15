import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User, UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signIn(email: string, password: string): Promise<string> {
    const user: User = await this.usersService.findUserByEmail(email);

    if (user?.password !== password) {
      throw new UnauthorizedException('Incorrect password');
    }

    return 'mytokenhere';
  }
}

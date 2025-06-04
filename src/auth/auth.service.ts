import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { SignInDto } from './dtos/sign-in.dto';

@Injectable()
export class AuthService {
    constructor(private usersService: UserService) {}

  async signIn(signInDto:SignInDto) {
    const { email, password } = signInDto;
    const user = await this.usersService.findOneByEmail(email);
    if (user?.password !== password) {
      throw new UnauthorizedException();
    }
    const { password:pass, ...result } = user;
    // TODO: Generate a JWT and return it here
    // instead of the user object
    return result["_doc"];
  }
}

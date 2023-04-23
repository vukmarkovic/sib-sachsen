import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../../dtos/create-user.dto';
import { JwtPayload } from '../../interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUserByPassword(loginAttempt: CreateUserDto): Promise<any> {
    let userToAttempt: any = await this.usersService.findOneByName(
      loginAttempt.username,
    );

    if (!userToAttempt) {
      userToAttempt = this.usersService.create({
        username: loginAttempt.username,
        password: 'survey',
      });
    }

    return new Promise((resolve) => {
      if (!userToAttempt) {
        resolve({ success: false, msg: 'User not found' });
      }
      userToAttempt.checkPassword(loginAttempt.password, (err, isMatch) => {
        if (err)
          resolve({
            success: false,
            msg: 'Unexpected error. Please try again later.',
          });

        if (isMatch) {
          // If there is a successful match, generate a JWT for the user
          resolve(this.createJwtPayload(userToAttempt));
        } else {
          resolve({ success: false, msg: 'Wrong password' });
        }
      });
    });
  }

  async validateUserByJwt(payload: JwtPayload) {
    // This will be used when the user has already logged in and has a JWT
    const user = await this.usersService.findOneByName(payload.username);

    if (user) {
      return this.createJwtPayload(user);
    } else {
      throw new UnauthorizedException();
    }
  }

  createJwtPayload(user: any) {
    const data: JwtPayload = {
      username: user.username,
    };

    const jwt = this.jwtService.sign(data);

    return {
      expiresIn: 3600,
      token: jwt,
    };
  }

  async login(user: any) {
    const payload = { username: user.username, password: user.password };
    return {
      accessToken: this.jwtService.sign(payload),
      // refreshToken: await this.generateRefreshToken(user.userId),
    };
  }
}

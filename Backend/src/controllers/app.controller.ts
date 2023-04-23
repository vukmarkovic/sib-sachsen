import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../services/auth/auth.service';
import { CreateUserDto } from '../dtos/create-user.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //Post / Login
  // @UseGuards(LocalAuthGuard)
  // @Post('/api/v2/users/login')
  // login(@Request() req: any): any {
  //   return this.authService.login({
  //     username: req.body.username,
  //     password: req.body.password,
  //   });
  // }
  @Post('/api/v2/users/login')
  async login(@Body() loginUserDto: CreateUserDto) {
    return await this.authService.validateUserByPassword(loginUserDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('api/v2/users/checktoken')
  checkToken() {
    return { res: 'ok' };
  }
}

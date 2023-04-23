import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AuthenticatedGuard } from '../../strategies/authenticated.guard';
import { UsersService } from '../../services/users/users.service';
import { AuthService } from '../../services/auth/auth.service';
import { CreateUserDto } from '../../dtos/create-user.dto';

@Controller('api/v2/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  //post / signup
  // @Post('/signup')
  // async create(@Body() createUserDto: CreateUserDto) {
  //   return await this.usersService.create(createUserDto);
  // }
}

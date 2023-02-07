import {
  Controller,
  Post,
  Body,
  Get,
  Render,
  Request,
  Response,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/users.entity';
import * as session from 'express-session';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  // Create a new user
  @Post()
  async create(@Body() user: User): Promise<User> {
    return this.usersService.create(user);
  }

  // Login a user
  @Post('login')
  async loginUser(@Body() user: User, @Request() req, @Response() res) {
    const userLogged = await this.usersService.login(
      user.usuario,
      user.password,
    );
    if (userLogged) {
      req.user = userLogged;
      res.redirect('/');
    } else {
      res
        .status(HttpStatus.UNAUTHORIZED)
        .json({ message: 'Invalid credentials' });
    }
  }

  @Get()
  @Render('register')
  async register() {
    return {};
  }

  @Get('login')
  @Render('login')
  async login() {
    return {};
  }
}

import { Body, Controller, UseInterceptors } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { CreateUserRequestDto } from './dto/create-user.request.dto';
import { UsersService } from './users.service';
import { NoFilesInterceptor } from '@nestjs/platform-express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post()
  @UseInterceptors(NoFilesInterceptor())
  createUser(@Body() request: CreateUserRequestDto) {
    return this.usersService.createUser(request);
  }
}

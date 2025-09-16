import { Body, Controller, UseGuards, UseInterceptors } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { CreateUserRequestDto } from './dto/create-user.request.dto';
import { UsersService } from './users.service';
import { NoFilesInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Get } from '@nestjs/common';
import { CurrentUser } from 'src/auth/current-user.decorator';
import type { TokenPayload } from 'src/auth/token-payload.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post()
  @UseInterceptors(NoFilesInterceptor())
  createUser(@Body() request: CreateUserRequestDto) {
    return this.usersService.createUser(request);
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  getMe(@CurrentUser() user: TokenPayload) {
    return user;
  }
}

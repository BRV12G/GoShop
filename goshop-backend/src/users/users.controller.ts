import { Controller } from '@nestjs/common';
import { Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Post()
  createUser() {}
}

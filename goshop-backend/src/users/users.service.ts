import { Injectable } from '@nestjs/common';
import { CreateUserRequestDto } from './dto/create-user.request.dto';

@Injectable()
export class UsersService {
  createUser(data: CreateUserRequestDto) {
    console.log('Creating user with data:', data);
  }
}

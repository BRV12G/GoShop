import { Injectable } from '@nestjs/common';
import { CreateUserRequestDto } from './dto/create-user.request.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}
  async createUser(data: CreateUserRequestDto): Promise<User> {
    return this.prismaService.user.create({
      data: {
        ...data,
        password: await bcrypt.hash(data.password, 10),
      },
    });
  }
}

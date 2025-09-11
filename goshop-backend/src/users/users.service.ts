import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { CreateUserRequestDto } from './dto/create-user.request.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}
  async createUser(data: CreateUserRequestDto): Promise<User> {
    try {
      return await this.prismaService.user.create({
        data: {
          ...data,
          password: await bcrypt.hash(data.password, 10),
        },
      });
    } catch (error) {
         //   console.error('Error creating user:', error);
      if (error.code === 'P2002') {
        throw new UnprocessableEntityException('Email already exists');
      }
      throw error;
    }
  }
}

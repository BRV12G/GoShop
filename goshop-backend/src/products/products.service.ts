import { Injectable } from '@nestjs/common';
import { CreateProductRequestDto } from './dto/create-product.request.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private readonly prismaService: PrismaService) {}
  async createProduct(data: CreateProductRequestDto, userId: number) {
    return this.prismaService.products.create({
      data: {
        ...data,
        userId,
      },
    });
}
}

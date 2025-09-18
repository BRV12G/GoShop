import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateProductRequestDto } from './dto/create-product.request.dto';
import { CurrentUser } from '../auth/current-user.decorator';
import type { TokenPayload } from '../auth/token-payload.interface';
import { ProductsService } from './products.service';
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async createProduct(
    @Body() body: CreateProductRequestDto,
    @CurrentUser() user: TokenPayload,
  ) {
    return this.productsService.createProduct(body, user.userId);
  }
}

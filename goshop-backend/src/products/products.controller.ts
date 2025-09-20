import { Body, Controller, FileTypeValidator, Get, MaxFileSizeValidator, ParseFilePipe, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { diskStorage } from 'multer';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateProductRequestDto } from './dto/create-product.request.dto';
import { CurrentUser } from '../auth/current-user.decorator';
import type { TokenPayload } from '../auth/token-payload.interface';
import { ProductsService } from './products.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
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

  @Post(':productId/image')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: 'public/products',
        filename: (req, file, callback) => {
          callback(
            null,
            `${req.params.productId}${extname(file.originalname)}`
          );
        },
      }),
    }),
  )
  uploadProductImage(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 500000 }),
          new FileTypeValidator({ fileType: 'image/jpeg' }),
        ],
      }),
    )
    _file: Express.Multer.File,
    @CurrentUser() user: TokenPayload,
  ) {}


  @Get()
  @UseGuards(JwtAuthGuard)
  async getProducts() {
    return this.productsService.getProducts();
  }
}

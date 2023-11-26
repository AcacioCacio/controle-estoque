import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @IsPublic()
  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    try {
      const result = await this.productsService.create(createProductDto);
      return { message: 'Produto adicionado com sucesso!', produto: result };
    } catch (error) {
      return { error: error.message, errorCode: error.code };
    }
  }

  @IsPublic()
  @Get()
  async findAll() {
    try {
      const result = await this.productsService.findAll();
      return { produtos: result };
    } catch (error) {
      return { error: error.message, errorCode: error.code };
    }
  }

  @IsPublic()
  @Get('/params')
  async findAllParams() {
    try {
      const result = await this.productsService.findAllParams();
      return { produtos: result };
    } catch (error) {
      return { error: error.message, errorCode: error.code };
    }
  }

  @IsPublic()
  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const result = await this.productsService.findOne(id);
      return { produto: result };
    } catch (error) {
      return { error: error.message, errorCode: error.code };
    }
  }

  @IsPublic()
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    try {
      const result = await this.productsService.update(id, updateProductDto);
      return { 'produto alterado': result };
    } catch (error) {
      return { error: error.message, errorCode: error.code };
    }
  }

  @IsPublic()
  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const result = await this.productsService.remove(id);
      return { message: result };
    } catch (error) {
      return { error: error.message };
    }
  }
}

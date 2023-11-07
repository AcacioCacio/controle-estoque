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

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    try {
      const result = await this.productsService.create(createProductDto);
      return { message: 'Produto adicionado com sucesso!', Produto: result };
    } catch (error) {
      return { error: error.message, errorCode: error.code };
    }
  }

  @Get()
  async findAll() {
    try {
      const result = await this.productsService.findAll();
      return { produtos: result };
    } catch (error) {
      return { error: error.message, errorCode: error.code };
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const result = await this.productsService.findOne(id);
      return { produto: result };
    } catch (error) {
      return { error: error.message, errorCode: error.code };
    }
  }

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

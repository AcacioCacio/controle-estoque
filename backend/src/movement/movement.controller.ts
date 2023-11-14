import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MovementService } from './movement.service';
import { CreateMovementDto } from './dto/create-movement.dto';
import { UpdateMovementDto } from './dto/update-movement.dto';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';

@Controller('movement')
export class MovementController {
  constructor(private readonly movementService: MovementService) {}

  @IsPublic()
  @Post()
  async create(@Body() createMovementDto: CreateMovementDto) {
    try {
      const result = await this.movementService.create(createMovementDto);
      return {
        message: 'Movimentação criada com sucesso!',
        movimentação: result,
      };
    } catch (error) {
      return { error: error.message };
    }
  }

  @IsPublic()
  @Get()
  async findAll() {
    try {
      const result = await this.movementService.findAll();
      return { movimentacoes: result };
    } catch (error) {
      return { error: error.message, errorCode: error.code };
    }
  }

  @IsPublic()
  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const result = await this.movementService.findOne(id);
      return { movimentacao: result };
    } catch (error) {
      return { error: error.message, errorCode: error.code };
    }
  }

  @IsPublic()
  @Get('/product/:id')
  async findPerIdProduct(@Param('id') id: string) {
    try {
      const result = await this.movementService.findPerIdProduct(id);
      return { movimentacoes: result };
    } catch (error) {
      return { error: error.message };
    }
  }

  @IsPublic()
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMovementDto: UpdateMovementDto,
  ) {
    try {
      const result = await this.movementService.update(id, updateMovementDto);
      return { 'movimentacao alterada': result };
    } catch (error) {
      return { error: error.message, errorCode: error.code };
    }
  }

  @IsPublic()
  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const result = await this.movementService.remove(id);
      return { message: result };
    } catch (error) {
      return { error: error.message };
    }
  }
}

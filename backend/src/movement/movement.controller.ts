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

@Controller('movement')
export class MovementController {
  constructor(private readonly movementService: MovementService) {}

  @Post()
  async create(@Body() createMovementDto: CreateMovementDto) {
    try {
      const result = await this.movementService.create(createMovementDto);
      return {
        message: 'Movimentação criada com sucesso!',
        movimentação: result,
      };
    } catch (error) {
      return { error: error.message, errorCode: error.code };
    }
  }

  @Get()
  async findAll() {
    try {
      const result = await this.movementService.findAll();
      return { movimentacoes: result };
    } catch (error) {
      return { error: error.message, errorCode: error.code };
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const result = await this.movementService.findOne(id);
      return { movimentacao: result };
    } catch (error) {
      return { error: error.message, errorCode: error.code };
    }
  }

  @Get('/product/:id')
  async findPerIdProduct(@Param('id') id: string) {
    try {
      const result = await this.movementService.findPerIdProduct(id);
      return { movimentacoes: result };
    } catch (error) {
      return { error: error.message };
    }
  }

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

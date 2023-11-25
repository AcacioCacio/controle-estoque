import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @IsPublic()
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      const result = await this.userService.create(createUserDto);
      return { message: result };
    } catch (error) {
      return { error: error.message };
    }
  }

  @Get()
  async findAll() {
    try {
      const result = await this.userService.findAll();

      return { message: result };
    } catch (error) {
      return { error: error.message };
    }
  }

  @Get('email')
  async findByEmail(@Query('email') email: string) {
    try {
      const result = await this.userService.findEmail(email);
      return { message: result };
    } catch (error) {
      return { error: error.message };
    }
  }
}

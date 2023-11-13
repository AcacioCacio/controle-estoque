import { IsString, MinLength, IsInt, Min } from 'class-validator';
import { MovementDocument } from '../entities/movement.document';

export class CreateMovementDto extends MovementDocument {
  @IsString()
  @MinLength(1)
  idProduct: string;

  @IsString()
  @MinLength(1)
  type: string;

  @IsInt()
  @Min(0)
  quant: number;
}

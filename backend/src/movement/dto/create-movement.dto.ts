import { IsString, MinLength } from 'class-validator';
import { MovementDocument } from '../entities/movement.document';

export class CreateMovementDto extends MovementDocument {
  @IsString()
  @MinLength(1)
  idProduct: string;

  @IsString()
  @MinLength(1)
  type: string;
}

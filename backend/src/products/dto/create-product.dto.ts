import { IsString, IsInt, MinLength, Min } from 'class-validator';
import { ProductDocument } from '../entities/product.document';

export class CreateProductDto extends ProductDocument {
  @IsString()
  @MinLength(1)
  name: string;

  @IsInt()
  @Min(0)
  quant: number;
}

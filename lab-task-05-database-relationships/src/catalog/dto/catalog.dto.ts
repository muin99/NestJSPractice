import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';
export class CreateCategoryDto { @IsString() @IsNotEmpty() name: string; }
export class CreateProductDto {
  @IsString() @IsNotEmpty() name: string;
  @Type(() => Number) @IsNumber() @IsPositive() price: number;
  @Type(() => Number) @IsInt() @IsPositive() categoryId: number;
}

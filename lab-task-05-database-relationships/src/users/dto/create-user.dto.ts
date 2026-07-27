import { Type } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
export class CreateProfileDto {
  @IsString() @IsNotEmpty() bio: string;
  @IsOptional() @IsString() phone?: string;
}
export class CreateUserDto {
  @IsString() @IsNotEmpty() name: string;
  @IsOptional() @ValidateNested() @Type(() => CreateProfileDto) profile?: CreateProfileDto;
}

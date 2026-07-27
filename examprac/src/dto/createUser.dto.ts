import { IsString, MinLength } from 'class-validator';

export class createUserDto {
  @IsString()
  @MinLength(2)
  name: string;
}
import { Type } from 'class-transformer'; import { ArrayNotEmpty, IsArray, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
export class CreateCourseDto { @IsString() @IsNotEmpty() name: string; @IsString() @IsNotEmpty() code: string; }
export class CreateStudentDto { @IsString() @IsNotEmpty() name: string; @IsArray() @ArrayNotEmpty() @Type(() => Number) @IsInt({ each: true }) courseIds: number[]; }
export class CreateEnrollmentDto { @Type(() => Number) @IsInt() studentId: number; @Type(() => Number) @IsInt() courseId: number; @IsOptional() @IsString() grade?: string; }

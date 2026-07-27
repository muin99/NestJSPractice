import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common'; import { AcademyService } from './academy.service'; import { CreateCourseDto, CreateEnrollmentDto, CreateStudentDto } from './dto/academy.dto';
@Controller() export class AcademyController { constructor(private service: AcademyService) {}
  @Post('courses') createCourse(@Body() dto: CreateCourseDto) { return this.service.createCourse(dto); } @Get('courses') courses() { return this.service.findCourses(); }
  @Post('students') createStudent(@Body() dto: CreateStudentDto) { return this.service.createStudent(dto); } @Get('students') students() { return this.service.findStudents(); }
  @Post('students/:studentId/courses/:courseId') add(@Param('studentId', ParseIntPipe) s: number, @Param('courseId', ParseIntPipe) c: number) { return this.service.addCourse(s, c); }
  @Delete('students/:studentId/courses/:courseId') remove(@Param('studentId', ParseIntPipe) s: number, @Param('courseId', ParseIntPipe) c: number) { return this.service.removeCourse(s, c); }
  @Post('enrollments') enroll(@Body() dto: CreateEnrollmentDto) { return this.service.createEnrollment(dto); } @Get('enrollments') enrollments() { return this.service.findEnrollments(); }
}

import { Controller, Delete, Get, Param } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':name')
  getCourseByName(@Param('name') name: string) {
    return this.coursesService.findByName(name);
  }

  @Delete('deleteColumn/:id')
  deleteCourse(@Param('id') id:string) {
    return this.coursesService.DeleteByid(id);
  }
}

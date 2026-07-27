import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Courses } from './entity/courses.entity';

@Injectable()
export class CoursesService {
    constructor(
        @InjectRepository(Courses) private readonly coursesRepo: Repository<Courses>) { }

    async findAll() {
        const data = await this.coursesRepo.find();
        return data;
    }

    async findByName(name: string) {
        const data = await this.coursesRepo.findOne({ where: { course_name: name } });
        return data;
    }

    async DeleteByid(id: string) {
        const d = await this.coursesRepo.delete(id);
        return d;
    }

}

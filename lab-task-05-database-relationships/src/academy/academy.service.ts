import { Injectable, NotFoundException } from '@nestjs/common'; import { InjectRepository } from '@nestjs/typeorm'; import { In, Repository } from 'typeorm';
import { CreateCourseDto, CreateEnrollmentDto, CreateStudentDto } from './dto/academy.dto'; import { Course } from './entities/course.entity'; import { Enrollment } from './entities/enrollment.entity'; import { Student } from './entities/student.entity';
@Injectable() export class AcademyService {
  constructor(@InjectRepository(Student) private students: Repository<Student>, @InjectRepository(Course) private courses: Repository<Course>, @InjectRepository(Enrollment) private enrollments: Repository<Enrollment>) {}
  createCourse(dto: CreateCourseDto) { return this.courses.save(this.courses.create(dto)); }
  findCourses() { return this.courses.find({ relations: { students: true } }); }
  async createStudent(dto: CreateStudentDto) { const courses = await this.courses.findBy({ id: In(dto.courseIds) }); if (courses.length !== new Set(dto.courseIds).size) throw new NotFoundException('One or more courses not found'); return this.students.save(this.students.create({ name: dto.name, courses })); }
  findStudents() { return this.students.find({ relations: { courses: true } }); }
  async addCourse(studentId: number, courseId: number) { const student = await this.students.findOne({ where: { id: studentId }, relations: { courses: true } }); const course = await this.courses.findOneBy({ id: courseId }); if (!student || !course) throw new NotFoundException('Student or course not found'); if (!student.courses.some(c => c.id === courseId)) student.courses.push(course); return this.students.save(student); }
  async removeCourse(studentId: number, courseId: number) { const student = await this.students.findOne({ where: { id: studentId }, relations: { courses: true } }); if (!student) throw new NotFoundException('Student not found'); student.courses = student.courses.filter(c => c.id !== courseId); return this.students.save(student); }
  async createEnrollment(dto: CreateEnrollmentDto) { const student = await this.students.findOneBy({ id: dto.studentId }); const course = await this.courses.findOneBy({ id: dto.courseId }); if (!student || !course) throw new NotFoundException('Student or course not found'); return this.enrollments.save(this.enrollments.create({ student, course, grade: dto.grade })); }
  findEnrollments() { return this.enrollments.find({ relations: { student: true, course: true } }); }
}

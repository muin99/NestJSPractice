import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { Course } from './course.entity'; import { Student } from './student.entity';
@Entity('enrollments') @Unique(['student', 'course']) export class Enrollment {
  @PrimaryGeneratedColumn() id: number;
  @ManyToOne(() => Student, (student) => student.enrollments, { onDelete: 'CASCADE' }) student: Student;
  @ManyToOne(() => Course, (course) => course.enrollments, { onDelete: 'CASCADE' }) course: Course;
  @CreateDateColumn() enrollmentDate: Date; @Column({ nullable: true }) grade?: string; @Column({ default: 'active' }) status: string;
}

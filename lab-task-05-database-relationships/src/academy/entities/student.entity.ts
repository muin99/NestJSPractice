import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Course } from './course.entity'; import { Enrollment } from './enrollment.entity';
@Entity('students') export class Student {
  @PrimaryGeneratedColumn() id: number; @Column() name: string;
  @ManyToMany(() => Course, (course) => course.students)
  @JoinTable({ name: 'student_courses', joinColumn: { name: 'studentId' }, inverseJoinColumn: { name: 'courseId' } }) courses: Course[];
  @OneToMany(() => Enrollment, (enrollment) => enrollment.student) enrollments: Enrollment[];
}

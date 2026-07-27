import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Student } from './student.entity'; import { Enrollment } from './enrollment.entity';
@Entity('courses') export class Course {
  @PrimaryGeneratedColumn() id: number; @Column() name: string; @Column({ unique: true }) code: string;
  @ManyToMany(() => Student, (student) => student.courses) students: Student[];
  @OneToMany(() => Enrollment, (enrollment) => enrollment.course) enrollments: Enrollment[];
}

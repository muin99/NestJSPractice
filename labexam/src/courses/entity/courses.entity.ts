import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Courses {
  @PrimaryColumn()
  id: number;

  @Column()
  course_name: string;

  @Column()
  credit:number;

  @Column()
  department: number;
  
}


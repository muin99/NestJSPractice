import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
@Entity('profiles')
export class Profile {
  @PrimaryGeneratedColumn() id: number;
  @Column() bio: string;
  @Column({ nullable: true }) phone?: string;
  @OneToOne(() => User, (user) => user.profile) user: User;
}

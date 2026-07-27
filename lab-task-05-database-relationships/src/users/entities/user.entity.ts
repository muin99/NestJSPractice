import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Profile } from './profile.entity';
@Entity('users')
export class User {
  @PrimaryGeneratedColumn() id: number;
  @Column() name: string;
  @OneToOne(() => Profile, (profile) => profile.user, { cascade: ['insert', 'update'], nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'profileId' }) profile: Profile | null;
}

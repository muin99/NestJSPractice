import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly repo: Repository<User>) {}
  create(dto: CreateUserDto) { return this.repo.save(this.repo.create(dto)); }
  findAll() { return this.repo.find({ relations: { profile: true } }); }
  async findOne(id: number) {
    const user = await this.repo.findOne({ where: { id }, relations: { profile: true } });
    if (!user) throw new NotFoundException(`User ${id} not found`);
    return user;
  }
  async unlinkProfile(id: number) {
    const user = await this.findOne(id); user.profile = null; return this.repo.save(user);
  }
}

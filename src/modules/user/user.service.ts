import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../../common/entityes/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from '../../common/dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userEntityRepository: Repository<UserEntity>,
  ) {}

  async findAll() {
    return await this.userEntityRepository.find();
  }

  async create(body: CreateUserDto) {
    return await this.userEntityRepository.save(body);
  }

  async update(id: number, body: UpdateUserDto) {
    return this.userEntityRepository.update(id, body);
  }

  async remove(id: number) {
    const data = await this.userEntityRepository.findOne(id);
    return this.userEntityRepository.remove(data);
  }
}

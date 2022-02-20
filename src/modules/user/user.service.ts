import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../../entityes/user.entity';
import { Repository } from 'typeorm';
import { UpdateUserDto } from '../../common/dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userEntityRepository: Repository<UserEntity>,
  ) {}

  async findAll() {
    return await this.userEntityRepository.find();
  }

  async update(id: number, body: UpdateUserDto) {
    return this.userEntityRepository.update(id, body);
  }

  async remove(id: number) {
    const data = await this.userEntityRepository.findOne(id);
    return this.userEntityRepository.remove(data);
  }
}

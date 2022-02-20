import { Injectable, NotFoundException, Optional } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto, LoginUserDto } from './common/dto';
import { UserEntity } from './entityes/user.entity';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(UserEntity)
    // 为可选依赖
    @Optional()
    private readonly userEntityRepository: Repository<UserEntity>,

    private readonly jwtService: JwtService,
  ) {}

  async login({ username, password }: LoginUserDto) {
    // 获取用户
    const user = await this.userEntityRepository.findOne({ username });
    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) throw new NotFoundException('wrong account or password');
    const payload = { username: user.username, sub: user.id };
    // 更新登录时间
    this.userEntityRepository.update(user.id, { loginTime: new Date().toISOString() });
    return { access_token: this.jwtService.sign(payload) };
  }

  async register(body: CreateUserDto) {
    return await this.userEntityRepository.save(body);
  }
}

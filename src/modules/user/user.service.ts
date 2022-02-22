import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterUserDto, LoginUserDto, UpdateUserDto } from '../../dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserEntity } from '../../entityes';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userEntity: Repository<UserEntity>,
    private readonly jwtService: JwtService,
  ) {}

  async findAll() {
    return await this.userEntity.find({ select: ['id', 'role', 'description', 'avatar', 'username', 'loginTime', 'createTime', 'updateTime'] });
  }

  async login({ username, password }: LoginUserDto) {
    // 获取用户
    const user = await this.userEntity.findOne({ username });
    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) throw new NotFoundException('wrong account or password');
    const payload = { username: user.username, sub: user.id };
    // 更新登录时间
    await this.userEntity.update(user.id, { loginTime: new Date().toISOString() });
    const newUser = await this.userEntity.findOne({ username }, { select: ['id', 'role', 'avatar', 'username', 'loginTime', 'createTime', 'updateTime'] });
    return { ...newUser, access_token: this.jwtService.sign(payload) };
  }

  async register(body: RegisterUserDto) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = await this.userEntity.save(body);
    return result;
  }

  async update(id: number, body: UpdateUserDto) {
    return this.userEntity.update(id, body);
  }

  async remove(id: number) {
    const user = await this.userEntity.findOne(id);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...data } = await this.userEntity.remove(user);
    return data;
  }
}

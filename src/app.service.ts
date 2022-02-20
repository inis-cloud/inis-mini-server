import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // constructor(
  //   @InjectRepository(UserEntity)
  //   private userEntityRepository: Repository<UserEntity>,
  // ) {}

  getHello(): string {
    return 'Hello World!';
  }
}

import { IsNotEmpty } from 'class-validator';
export class AppDto {
  @IsNotEmpty({ message: '登录密钥不能为空' })
  readonly 'login-token': string;
}

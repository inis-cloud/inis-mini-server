import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class AppDto {
  @IsNotEmpty({ message: '登录密钥不能为空' })
  @ApiProperty({ description: '登录密钥', example: undefined, required: true })
  readonly 'login-token': string;
}

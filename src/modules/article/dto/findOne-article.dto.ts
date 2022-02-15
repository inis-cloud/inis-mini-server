import { ApiProperty } from '@nestjs/swagger';

export class FindOneArticleDto {
  @ApiProperty({ description: '文章ID', example: undefined, required: false })
  readonly id: number;

  @ApiProperty({ description: '文章渲染模式', example: 'html', required: false })
  readonly mode: string;

  @ApiProperty({ description: '文章密码', example: undefined, required: false })
  readonly password: string;

  @ApiProperty({ description: '是否获取缓存数据', example: true, required: false })
  readonly cache: boolean;
}

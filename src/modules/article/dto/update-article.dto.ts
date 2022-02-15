import { ApiProperty } from '@nestjs/swagger';

export class UpdateArticleDto {
  @ApiProperty({ description: '文章渲染模式', example: 'html', required: false })
  readonly id: string;

  @ApiProperty({ description: '模式', example: undefined, required: true })
  readonly mode: string;

  @ApiProperty({ description: '是否获取缓存数据', example: false, required: false })
  readonly destroy: boolean;
}

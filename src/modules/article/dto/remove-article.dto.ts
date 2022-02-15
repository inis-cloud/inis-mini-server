import { ApiProperty } from '@nestjs/swagger';

export class RemoveArticleDto {
  @ApiProperty({ description: '文章ID', example: 1, required: false })
  readonly id: string | any[];

  @ApiProperty({ description: '模式', example: 'remove', required: true })
  readonly mode: string;

  @ApiProperty({ description: '是否获取缓存数据', example: false, required: false })
  readonly destroy: boolean;
}

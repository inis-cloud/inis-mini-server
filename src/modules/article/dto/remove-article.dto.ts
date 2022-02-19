import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class RemoveArticleDto {
  @ApiProperty({ description: '文章ID', example: 1 })
  @IsNumber()
  readonly id: number;
}

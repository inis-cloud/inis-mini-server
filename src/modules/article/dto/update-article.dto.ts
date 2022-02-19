import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { CreateArticleDto } from '.';

export class UpdateArticleDto extends PartialType(CreateArticleDto) {
  @ApiProperty({ description: '浏览次数', required: false })
  @IsNumber()
  readonly viewCount: number;
}

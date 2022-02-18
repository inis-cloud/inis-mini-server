import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString, IsString } from 'class-validator';

export class FindArticleDto {
  @ApiProperty({ description: '标题' })
  @IsString()
  readonly title: string;

  @ApiProperty({ description: '描述' })
  @IsString()
  readonly description: string;

  @ApiProperty({ description: '内容' })
  @IsString()
  readonly content: string | null;

  @ApiProperty({ description: '当前页码', example: 1 })
  @IsNumberString()
  readonly pageNum: number;

  @ApiProperty({ description: '分页大小', example: 10 })
  @IsNumberString()
  readonly pageSize: number;
}

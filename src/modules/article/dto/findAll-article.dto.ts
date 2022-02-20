import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsPositive } from 'class-validator';

export class FindAllArticleDto {
  @ApiProperty({ description: '当前页码', example: 1, required: false })
  @IsOptional()
  @IsPositive()
  readonly pageNum: number;

  @ApiProperty({ description: '分页大小', example: 10, required: false })
  @IsOptional()
  @IsPositive()
  readonly pageSize: number;
}

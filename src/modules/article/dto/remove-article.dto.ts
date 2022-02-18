import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class RemoveArticleDto {
  @ApiProperty({ description: '唯一标识', example: 1 })
  @IsNotEmpty()
  @IsNumber()
  readonly id: number;
}

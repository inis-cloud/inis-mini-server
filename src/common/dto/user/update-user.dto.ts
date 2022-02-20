import { PartialType } from '@nestjs/swagger';
import { IsNumber, IsPositive } from 'class-validator';
import { CreateArticleDto } from '..';

export class UpdateUserDto extends PartialType(CreateArticleDto) {
  @IsNumber()
  @IsPositive()
  readonly viewCount: number;
}

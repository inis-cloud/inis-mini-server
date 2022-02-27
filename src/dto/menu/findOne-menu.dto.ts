import { PartialType } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { CreateMenuDto } from '..';

export class FindOneMenuDto extends PartialType(CreateMenuDto) {
  @IsNumber()
  readonly id: number;
}

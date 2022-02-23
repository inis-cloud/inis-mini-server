import { PartialType } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { UpsertMenuDto } from '..';

export class FindOneMenuDto extends PartialType(UpsertMenuDto) {
  @IsNumber()
  readonly id: number;
}

import { IsNumber } from 'class-validator';

export class RemoveUserDto {
  @IsNumber()
  readonly id: number;
}

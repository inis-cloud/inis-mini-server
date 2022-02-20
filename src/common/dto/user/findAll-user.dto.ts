import { IsOptional, IsPositive } from 'class-validator';

export class FindAllUserDto {
  @IsOptional()
  @IsPositive()
  readonly pageNum: number;

  @IsOptional()
  @IsPositive()
  readonly pageSize: number;
}

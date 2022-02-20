import { IsOptional, IsPositive } from 'class-validator';

export class FindAllArticleDto {
  @IsOptional()
  @IsPositive()
  readonly pageNum?: number;

  @IsOptional()
  @IsPositive()
  readonly pageSize?: number;
}

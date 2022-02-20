import { IsNumber } from 'class-validator';

export class RemoveArticleDto {
  @IsNumber()
  readonly id: number;
}

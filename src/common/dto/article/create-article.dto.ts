import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateArticleDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsString()
  readonly description?: string;

  @IsNotEmpty()
  @IsString({ each: true })
  readonly tags?: string[];

  @IsString()
  readonly cover?: string | null;

  @IsNumber()
  readonly content?: string | null;

  @IsString()
  readonly isShow?: boolean;

  @IsString()
  readonly isTop?: boolean;
}

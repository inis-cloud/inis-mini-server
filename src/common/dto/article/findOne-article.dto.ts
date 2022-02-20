import { IsNumber, IsPositive } from 'class-validator';

export class FindOneArticleDto {
  @IsNumber()
  @IsPositive()
  readonly id: number;

  // @ApiProperty({ description: '标题', required: false })

  // @IsString()
  // readonly title: string;

  // @ApiProperty({ description: '描述', required: false })
  // @IsString()
  // readonly description: string;

  // @ApiProperty({ description: '标签', required: false, type: 'array' })
  // @IsString({ each: true })
  // readonly tags: string[];

  // @ApiProperty({ description: '内容', required: false })
  // @IsString()
  // readonly content: string | null;
}

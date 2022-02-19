import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateArticleDto {
  @ApiProperty({ description: '标题' })
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @ApiProperty({ description: '描述', required: false })
  @IsString()
  readonly description: string;

  @ApiProperty({ description: '标签', required: false, type: 'array' })
  @IsNotEmpty()
  @IsString({ each: true })
  readonly tags: string[];

  @ApiProperty({ description: '文章封面', required: false })
  @IsString()
  readonly cover: string | null;

  @ApiProperty({ description: '内容', required: false })
  @IsNumber()
  readonly content: string | null;

  @ApiProperty({ description: '是否显示', required: false })
  @IsString()
  readonly isShow: boolean;

  @ApiProperty({ description: '是否置顶', required: false })
  @IsString()
  readonly isTop: boolean;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateArticleDto {
  @ApiProperty({ description: '标题', required: true })
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @ApiProperty({ description: '描述' })
  @IsString()
  readonly description: string;

  @ApiProperty({ description: '分类' })
  @IsString()
  readonly classify: string;

  @ApiProperty({ description: '文章封面' })
  @IsString()
  readonly cover: string | null;

  @ApiProperty({ description: '内容' })
  @IsNumber()
  readonly content: string | null;

  @ApiProperty({ description: '是否显示' })
  @IsString()
  readonly isShow: boolean;

  @ApiProperty({ description: '是否置顶' })
  @IsString()
  readonly isTop: boolean;
}

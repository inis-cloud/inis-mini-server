import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateArticleDto {
  @ApiProperty({ description: '文章ID', example: undefined, required: false })
  @IsNumber()
  readonly id: number;

  @ApiProperty({ description: '文章标题', example: '未命名文章', required: false })
  @IsString()
  readonly title: string;

  @ApiProperty({ description: '文章内容', example: undefined, required: false })
  @IsString()
  readonly content: string;

  @ApiProperty({ description: '文章描述', example: undefined, required: false })
  @IsString()
  readonly description: string;

  @ApiProperty({ description: '文章封面', example: undefined, required: false })
  @IsString()
  readonly img_src: string;

  @ApiProperty({ description: '文章字数', example: undefined, required: false })
  @IsNumber()
  readonly font_count: number;

  @ApiProperty({ description: '分类ID', example: undefined, required: false })
  @IsString({ each: true })
  readonly sort_id: string[];

  @ApiProperty({ description: '标签ID', example: undefined, required: false })
  @IsString()
  readonly tag_id: string;

  @ApiProperty({ description: '新增标签名称', example: undefined, required: false })
  @IsString()
  readonly tag_name: string;

  @ApiProperty({ description: '是否显示', example: 1, required: false })
  @IsNumber()
  readonly is_show: number;

  @ApiProperty({ description: '是否置顶', example: 0, required: false })
  @IsNumber()
  readonly is_top: number;

  @ApiProperty({ description: '自定义字段', example: undefined, required: false })
  @IsString()
  readonly opt: string;
}

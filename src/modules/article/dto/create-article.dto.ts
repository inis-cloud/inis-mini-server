import { ApiProperty } from '@nestjs/swagger';
export class CreateArticleDto {
  @ApiProperty({ description: '文章ID', example: undefined, required: false })
  readonly int: number;

  @ApiProperty({ description: '文章标题', example: '未命名文章', required: false })
  readonly title: string;

  @ApiProperty({ description: '文章内容', example: undefined, required: false })
  readonly content: string;

  @ApiProperty({ description: '文章描述', example: undefined, required: false })
  readonly description: string;

  @ApiProperty({ description: '文章封面', example: undefined, required: false })
  readonly img_src: string;

  @ApiProperty({ description: '文章字数', example: undefined, required: false })
  readonly font_count: number;

  @ApiProperty({ description: '分类ID', example: undefined, required: false })
  readonly sort_id: any[];

  @ApiProperty({ description: '标签ID', example: undefined, required: false })
  readonly tag_id: string | any[];

  @ApiProperty({ description: '新增标签名称', example: undefined, required: false })
  readonly tag_name: string | any[];

  @ApiProperty({ description: '是否显示', example: 1, required: false })
  readonly is_show: number;

  @ApiProperty({ description: '是否置顶', example: 0, required: false })
  readonly is_top: number;

  @ApiProperty({ description: '自定义字段', example: undefined, required: false })
  readonly opt: string;
}

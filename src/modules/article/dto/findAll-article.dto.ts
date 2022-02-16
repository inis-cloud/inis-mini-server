import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsNumberString, IsString } from 'class-validator';

export class FindAllArticleDto {
  @ApiProperty({ description: '数据数量', example: 5, required: false })
  @IsNumberString()
  readonly limit: number;

  @ApiProperty({ description: '分页请求', example: 1, required: false })
  @IsNumberString()
  readonly page: number;

  @ApiProperty({ description: '排序方式', example: 'create_time desc', required: false })
  @IsString()
  readonly order: string;

  @ApiProperty({ description: '文章渲染模式', example: 'html', required: false })
  @IsString()
  readonly mode: string;

  @ApiProperty({ description: '文章标题或内容搜索', example: 5, required: false })
  @IsNumber()
  readonly search: number;

  @ApiProperty({ description: '是否获取缓存数据', example: true, required: false })
  @IsBoolean()
  readonly cache: boolean;
}

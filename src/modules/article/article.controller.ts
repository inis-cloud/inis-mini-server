import { Controller, Get, Post, Body, Param, Delete, Put, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ArticleService } from './article.service';
import { CreateArticleDto, FindAllArticleDto, FindOneArticleDto, RemoveArticleDto, UpdateArticleDto } from './dto';

@Controller('api/article')
@ApiTags('文章模块')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articleService.create(createArticleDto);
  }

  @Get('/findAll')
  find(@Query() param: FindAllArticleDto) {
    return this.articleService.findAll(param);
  }

  @Get('/findOne')
  findOne(@Param() param: FindOneArticleDto) {
    return this.articleService.findOne(param);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: UpdateArticleDto) {
    return this.articleService.update(+id, body);
  }

  @Delete()
  remove(@Param() param: RemoveArticleDto) {
    return this.articleService.remove(param);
  }
}

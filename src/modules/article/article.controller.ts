import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { FindeAllArticleDto } from './dto/findAll-article.dto';
import { FindOneArticleDto } from './dto/findOne-article.dto';
import { RemoveArticleDto } from './dto/remove-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Controller('api/article')
@ApiTags('文章模块')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  create(@Body() body: CreateArticleDto) {
    return this.articleService.create(body);
  }

  @Get('/findAll')
  find(@Param() param: FindeAllArticleDto) {
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

  @Delete(':id')
  remove(@Param() param: RemoveArticleDto) {
    return this.articleService.remove(param);
  }
}

import { Controller, Get, Post, Body, Delete, Put, Query, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ArticlePipe } from './article.pipe';
import { ArticleService } from './article.service';
import { CreateArticleDto, FindAllArticleDto, FindOneArticleDto, RemoveArticleDto, UpdateArticleDto } from '../../dto';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';

@Controller('article')
@ApiTags('文章接口')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get('findAll')
  findAll(@Query() { pageNum, pageSize }: FindAllArticleDto) {
    return this.articleService.findAll({ pageNum: pageNum || 1, pageSize: pageSize || 10 });
  }

  @Get('findOne')
  findOne(@Query(ArticlePipe) query: FindOneArticleDto) {
    return this.articleService.findOne(query);
  }

  @UseGuards(JwtAuthGuard)
  @Post('create')
  create(@Body() body: CreateArticleDto) {
    return this.articleService.create(body);
  }

  @UseGuards(JwtAuthGuard)
  @Put('update')
  update(@Query('id') id: number, @Body() body: UpdateArticleDto) {
    return this.articleService.update(id, body);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('remove')
  remove(@Query(ArticlePipe) query: RemoveArticleDto) {
    return this.articleService.remove(query);
  }
}

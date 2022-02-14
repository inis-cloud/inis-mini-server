import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { inisArticle } from 'src/entities/InisArticle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([inisArticle])],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}

import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { artcleEntity } from './artcle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([artcleEntity])],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}

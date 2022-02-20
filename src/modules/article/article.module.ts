import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtcleEntity } from '../../common/entityes/artcle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ArtcleEntity])],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}

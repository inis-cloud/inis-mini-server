import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { inisArticle } from 'src/entities/InisArticle.entity';
import { Repository } from 'typeorm';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(inisArticle)
    private inisArticleRepository: Repository<inisArticle>,
  ) {}

  async create(createArticleDto: CreateArticleDto) {
    return await this.inisArticleRepository.save(createArticleDto);
  }

  async findAll() {
    return await this.inisArticleRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} article`;
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return this.inisArticleRepository.update(id, updateArticleDto);
  }

  remove(id: number) {
    return `This action removes a #${id} article`;
  }
}

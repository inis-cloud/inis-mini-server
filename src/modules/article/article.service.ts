import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { inisArticle } from 'src/entities/InisArticle.entity';
import { Repository } from 'typeorm';
import { CreateArticleDto, FindeAllArticleDto, FindOneArticleDto, RemoveArticleDto, UpdateArticleDto } from './dto';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(inisArticle)
    private inisArticleRepository: Repository<inisArticle>,
  ) {}

  async create(body: CreateArticleDto) {
    return await this.inisArticleRepository.save(body);
  }

  async findAll(body: FindeAllArticleDto) {
    return await this.inisArticleRepository.find(body);
  }

  async findOne(body: FindOneArticleDto) {
    return await this.inisArticleRepository.findOne(body);
  }

  async update(id: number, body: UpdateArticleDto) {
    return this.inisArticleRepository.update(id, body);
  }

  async remove(param: RemoveArticleDto) {
    return this.inisArticleRepository.remove(param);
  }
}

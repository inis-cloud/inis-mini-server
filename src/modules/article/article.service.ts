import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { inisArticle } from 'src/entities/InisArticle.entity';
import { Repository } from 'typeorm';
import { CreateArticleDto, FindAllArticleDto, FindOneArticleDto, RemoveArticleDto, UpdateArticleDto } from './dto';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(inisArticle)
    private inisArticleRepository: Repository<inisArticle>,
  ) {}

  async create(body: CreateArticleDto) {
    return await this.inisArticleRepository.save(body);
  }

  async findAll(body: FindAllArticleDto) {
    // const data = await this.inisArticleRepository.find();
    // console.log(data);
    return await this.inisArticleRepository.find({ take: body.limit ?? 5 });
  }

  async findOne(body: FindOneArticleDto) {
    return await this.inisArticleRepository.findOne(body);
  }

  async update(id: number, body: UpdateArticleDto) {
    return this.inisArticleRepository.update(id, body);
  }

  async remove(param: RemoveArticleDto) {
    // return this.inisArticleRepository.remove(param);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { artcleEntity } from './artcle.entity';
import { Repository } from 'typeorm';
import { CreateArticleDto, FindArticleDto, RemoveArticleDto, UpdateArticleDto } from './dto';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(artcleEntity)
    private artcleEntityRepository: Repository<artcleEntity>,
  ) {}

  async find({ pageNum, pageSize, title, description, content, classify }: FindArticleDto) {
    const count = await this.artcleEntityRepository.findAndCount();
    const pagingData = { pageNum: +pageNum || 1, pageSize: +pageSize || 10, total: count[1] };
    const data = await this.artcleEntityRepository.find({
      take: pagingData.pageSize,
      where: title || description || content || classify ? [{ title }, { description }, { content }, { classify }] : null,
    });
    return { ...pagingData, list: data };
  }

  async create(body: CreateArticleDto) {
    const { classify, ...data } = await this.artcleEntityRepository.save(body);
    return { classify: classify.split(','), ...data };
  }

  async update(id: number, body: UpdateArticleDto) {
    return this.artcleEntityRepository.update(id, body);
  }

  async remove(id: RemoveArticleDto) {
    const data = await this.artcleEntityRepository.findOne(id);
    return this.artcleEntityRepository.remove(data);
  }
}

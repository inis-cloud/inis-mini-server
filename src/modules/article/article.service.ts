import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ArtcleEntity } from '../../entityes/artcle.entity';
import { Repository, UpdateResult } from 'typeorm';
import { CreateArticleDto, FindAllArticleDto, FindOneArticleDto, RemoveArticleDto, UpdateArticleDto } from '../../common/dto/index';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(ArtcleEntity)
    private ArtcleEntityRepository: Repository<ArtcleEntity>,
  ) {}

  async findAll({ pageNum, pageSize }: FindAllArticleDto) {
    const count = await this.ArtcleEntityRepository.findAndCount();
    const pagingData = { pageNum, pageSize, total: count[1] };
    const list = await this.ArtcleEntityRepository.find({
      skip: (pageNum - 1) * pageSize,
      take: pageSize,
    });
    return { ...pagingData, list };
  }

  async findOne(query: FindOneArticleDto) {
    const data = await this.ArtcleEntityRepository.findOne(query);
    // 查看文章时更新浏览次数
    query.id && this.update(query.id, { ...data, viewCount: ++data.viewCount });
    return data || {};
  }

  async create(body: CreateArticleDto) {
    return await this.ArtcleEntityRepository.save(body);
  }

  async update(id: number, body: UpdateArticleDto) {
    return this.ArtcleEntityRepository.update(id, body);
  }

  async remove(query: RemoveArticleDto) {
    const data = await this.ArtcleEntityRepository.findOne(query);
    return this.ArtcleEntityRepository.remove(data);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ArtcleEntity } from '../../entityes/artcle.entity';
import { Repository } from 'typeorm';
import { CreateArticleDto, FindAllArticleDto, FindOneArticleDto, RemoveArticleDto, UpdateArticleDto } from '../../dto/index';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(ArtcleEntity)
    private readonly ArtcleEntity: Repository<ArtcleEntity>,
  ) {}

  async findAll({ pageNum, pageSize }: FindAllArticleDto) {
    const count = await this.ArtcleEntity.findAndCount();
    const pagingData = { pageNum, pageSize, total: count[1] };
    const list = await this.ArtcleEntity.find({
      skip: (pageNum - 1) * pageSize,
      take: pageSize,
    });
    return { ...pagingData, list };
  }

  async findOne(query: FindOneArticleDto) {
    const data = await this.ArtcleEntity.findOne(query);
    // 查看文章时更新浏览次数
    query.id && (await this.update(query.id, { ...data, viewCount: ++data.viewCount }));
    return data;
  }

  async create(body: CreateArticleDto) {
    return await this.ArtcleEntity.save(body);
  }

  async update(id: number, body: UpdateArticleDto) {
    return await this.ArtcleEntity.update(id, body);
  }

  async remove(query: RemoveArticleDto) {
    const data = await this.ArtcleEntity.findOne(query);
    return await this.ArtcleEntity.remove(data);
  }
}

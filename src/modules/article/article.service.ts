import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ArtcleEntity } from './artcle.entity';
import { Repository } from 'typeorm';
import { CreateArticleDto, FindAllArticleDto, FindOneArticleDto, RemoveArticleDto, UpdateArticleDto } from './dto';

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
      take: pagingData.pageSize,
    });
    return { ...pagingData, list };
  }

  async findOne({ id }: FindOneArticleDto) {
    const data = await this.ArtcleEntityRepository.findOne(id);
    // 查看文章时更新浏览次数
    id && this.update(id, { ...data, viewCount: ++data.viewCount });
    return data || {};
  }

  async create(body: CreateArticleDto) {
    return await this.ArtcleEntityRepository.save(body);
  }

  async update(id: number, body: UpdateArticleDto) {
    return this.ArtcleEntityRepository.update(id, body);
  }

  async remove(id: RemoveArticleDto) {
    const data = await this.ArtcleEntityRepository.findOne(id);
    return this.ArtcleEntityRepository.remove(data);
  }
}

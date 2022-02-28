import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMenuDto } from 'src/dto';
import { TreeRepository } from 'typeorm';
import { MenuEntity } from '../../entityes';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(MenuEntity)
    private readonly menuEntity: TreeRepository<MenuEntity>,
  ) {}

  async findAll() {
    return await this.menuEntity.findTrees();
  }

  async findOne(id: number) {
    if (!id) throw new NotFoundException();
    return await this.menuEntity.findOne(id);
  }

  async upsert(body: CreateMenuDto) {
    return await this.menuEntity.save(body);
  }
}

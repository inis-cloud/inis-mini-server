import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMenuDto } from 'src/dto';
import { TreeChildren, TreeRepository } from 'typeorm';
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

  async findOne(body: MenuEntity) {
    return await this.menuEntity.findDescendantsTree(body);
  }

  async create(body) {
    return await this.menuEntity.save(body);
  }

  async remove(body: MenuEntity) {
    const menu = await this.menuEntity.findDescendantsTree(body);
    return await this.menuEntity.remove(menu);
  }
}

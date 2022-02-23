import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, TreeRepository } from 'typeorm';
import { MenuEntity } from '../../entityes';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(MenuEntity)
    private readonly menuEntity: TreeRepository<MenuEntity | EntityManager>,
  ) {}

  async findAll() {
    return await this.menuEntity.findTrees();
  }

  async findOne(body: MenuEntity) {
    return await this.menuEntity.findDescendantsTree(body);
  }

  async upsert(body: MenuEntity) {
    // this.menuEntity.manager.transaction(async (manager: EntityManager) => {
    //   await manager.find({ children: body.children });
    //   await manager.find({ children: body.children });
    // });
    return this.menuEntity.upsert(body, ['value']);
  }

  async remove(body: MenuEntity) {
    const menu = await this.menuEntity.findDescendantsTree(body);
    return await this.menuEntity.remove(menu);
  }
}

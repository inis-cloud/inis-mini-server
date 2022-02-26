import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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

  async findOne(body: MenuEntity) {
    return await this.menuEntity.findDescendantsTree(body);
  }

  async create(body) {
    const recursion = (menuList) => {
      menuList.forEach(async (item: MenuEntity) => {
        const parent = await this.menuEntity.save(item);
        item.children.forEach(async (ele: MenuEntity) => {
          ele.parent = parent;
          await this.menuEntity.save(ele);
          ele.children.length && recursion(item.children);
        });
      });
      return menuList;
    };
    return recursion(body);
  }

  async remove(body: MenuEntity) {
    const menu = await this.menuEntity.findDescendantsTree(body);
    return await this.menuEntity.remove(menu);
  }
}

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

  async upsert(body) {
    const recursion = (menuList: any) => {
      menuList.forEach(async (item: MenuEntity) => {
        const parent = await this.menuEntity.save(item);
        item.children.forEach(async (ele) => {
          let ment = new MenuEntity();
          ment = ele;
          await this.menuEntity.save({ ...ment, parent });
        });
        item.children.length && recursion(item.children);
      });
      return menuList;
    };

    return recursion(body);

    // const data = await this.menuEntity.save({
    //   label: '菜单管理',
    //   value: 'sajdijasidjijasd',
    //   path: '/menu',
    // });
    // // await this.menuEntity.save({
    // //   label: '角色管理',
    // //   value: 'asdasdasdasd',
    // //   path: '/role',
    // //   parent: data,
    // // });
    // return data;
    // return this.menuEntity.upsert(data, ['id']);
  }

  async remove(body: MenuEntity) {
    const menu = await this.menuEntity.findDescendantsTree(body);
    return await this.menuEntity.remove(menu);
  }
}

import { Controller, Get, Body, Delete, Put, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MenuService } from './menu.service';

@Controller('menu')
@ApiTags('菜单接口')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get('findAll')
  findAll() {
    return this.menuService.findAll();
  }

  @Get('findOne')
  findOne(body) {
    return this.menuService.findOne(body);
  }

  @Post('upsert')
  upsert(@Body() body) {
    return this.menuService.upsert(body);
  }

  @Delete('remove')
  remove(@Body() body) {
    return this.menuService.remove(body);
  }
}

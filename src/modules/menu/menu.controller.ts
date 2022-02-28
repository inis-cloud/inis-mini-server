import { Controller, Get, Body, Patch, Query, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateMenuDto } from 'src/dto';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
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
  findOne(@Query('id') id: number) {
    return this.menuService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('upsert')
  upsert(@Body() body: CreateMenuDto) {
    return this.menuService.upsert(body);
  }
}
